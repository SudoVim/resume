import { initialState, store, mastermindSlice, generateTry } from "./store";
import random from "random";

jest.mock("random", () => {
  return {
    int: jest.fn(),
  };
});

describe("exercise the store mechanism", () => {
  const initialized = {
    board: {
      answer: [0, 1, 2, 3],
      board: [],
    },
    currentPlay: [],
    finished: false,
    lineWidth: 4,
    numTileTypes: 4,
    numTries: 12,
    success: false,
  };
  it("initializes the board from the empty state", () => {
    const state = initialState;
    random.int
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(3);
    expect(store(state, mastermindSlice.actions.initialize())).toEqual(
      initialized
    );
  });
  it("initializes the board from a non-initialized state", () => {
    const state = {
      ...initialized,
      board: {
        ...initialized.board,
        board: [[3, 2, 1, 0]],
      },
    };
    random.int
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(3);
    expect(store(state, mastermindSlice.actions.initialize())).toEqual(
      initialized
    );
  });
  it("does not play a tile when not initialized", () => {
    const state = initialState;
    expect(store(state, mastermindSlice.actions.playTile(0))).toEqual(state);
  });
  it("plays the first tile", () => {
    const state = initialized;
    expect(store(state, mastermindSlice.actions.playTile(0))).toEqual({
      ...state,
      currentPlay: [0],
    });
  });
  it("plays the second tile", () => {
    const state = {
      ...initialized,
      currentPlay: [0],
    };
    expect(store(state, mastermindSlice.actions.playTile(1))).toEqual({
      ...state,
      currentPlay: [0, 1],
    });
  });
  it("does not place a tile past the length", () => {
    const state = {
      ...initialized,
      lineWidth: 1,
      currentPlay: [0],
    };
    expect(store(state, mastermindSlice.actions.playTile(1))).toEqual(state);
  });
  it("does not back out a tile when not initialized", () => {
    const state = initialState;
    expect(store(state, mastermindSlice.actions.backPlayTile())).toEqual(state);
  });
  it("backs out a tile", () => {
    const state = {
      ...initialized,
      currentPlay: [0, 1, 2],
    };
    expect(store(state, mastermindSlice.actions.backPlayTile())).toEqual({
      ...initialized,
      currentPlay: [0, 1],
    });
  });
  it("ignores a line if the game board is not initialized", () => {
    const state = initialState;
    const line = [3, 2, 1, 0];
    expect(store(state, mastermindSlice.actions.playLine(line))).toEqual(state);
  });
  it("ignores a line if the correct number of tiles is not given", () => {
    const currentPlay = [3, 2, 1];
    const state = {
      ...initialized,
      currentPlay,
    };
    expect(store(state, mastermindSlice.actions.playLine())).toEqual(state);
  });
  it("ignores a line if an invalid tile is given", () => {
    const currentPlay = [3, 2, 1, 8];
    const state = {
      ...initialized,
      currentPlay,
    };
    expect(store(state, mastermindSlice.actions.playLine())).toEqual(state);
  });
  it("plays a line that does not end the game", () => {
    const currentPlay = [3, 2, 1, 0];
    const state = {
      ...initialized,
      currentPlay,
    };
    expect(store(state, mastermindSlice.actions.playLine())).toEqual({
      ...state,
      board: {
        ...state.board,
        board: [
          {
            line: currentPlay,
            numClose: 4,
            numCorrect: 0,
          },
        ],
      },
      currentPlay: [],
    });
  });
  it("plays a line that ends the game unsuccessfully", () => {
    const currentPlay = [3, 2, 1, 0];
    const state = {
      ...initialized,
      numTries: 1,
      currentPlay,
    };
    expect(store(state, mastermindSlice.actions.playLine())).toEqual({
      ...state,
      board: {
        ...state.board,
        board: [
          {
            line: currentPlay,
            numClose: 4,
            numCorrect: 0,
          },
        ],
      },
      currentPlay: [],
      finished: true,
    });
  });
  it("plays a line that ends the game successfully", () => {
    const currentPlay = [0, 1, 2, 3];
    const state = {
      ...initialized,
      currentPlay,
    };
    expect(store(state, mastermindSlice.actions.playLine())).toEqual({
      ...state,
      board: {
        ...state.board,
        board: [
          {
            line: currentPlay,
            numClose: 0,
            numCorrect: 4,
          },
        ],
      },
      currentPlay: [],
      finished: true,
      success: true,
    });
  });
});

describe("exercise the generateTry function", () => {
  it("matches no tiles", () => {
    const board = {
      answer: [0, 0, 0, 0],
      board: [],
    };
    const line = [1, 1, 1, 1];
    expect(generateTry(board, line)).toEqual({
      line,
      numClose: 0,
      numCorrect: 0,
    });
  });
  it("matches one tile but no close", () => {
    const board = {
      answer: [0, 1, 2, 3],
      board: [],
    };
    const line = [1, 1, 1, 1];
    expect(generateTry(board, line)).toEqual({
      line,
      numClose: 0,
      numCorrect: 1,
    });
  });
  it("has one tile that is close but no matches", () => {
    const board = {
      answer: [0, 1, 2, 2],
      board: [],
    };
    const line = [1, 3, 1, 1];
    expect(generateTry(board, line)).toEqual({
      line,
      numClose: 1,
      numCorrect: 0,
    });
  });
  it("matches all tiles", () => {
    const board = {
      answer: [0, 1, 2, 2],
      board: [],
    };
    const line = [0, 1, 2, 2];
    expect(generateTry(board, line)).toEqual({
      line,
      numClose: 0,
      numCorrect: 4,
    });
  });
  it('marks all tiles as "close"', () => {
    const board = {
      answer: [0, 1, 2, 2],
      board: [],
    };
    const line = [2, 2, 1, 0];
    expect(generateTry(board, line)).toEqual({
      line,
      numClose: 4,
      numCorrect: 0,
    });
  });
  it("mixes and matches", () => {
    const board = {
      answer: [0, 1, 2, 2],
      board: [],
    };
    const line = [3, 1, 2, 0];
    expect(generateTry(board, line)).toEqual({
      line,
      numClose: 1,
      numCorrect: 2,
    });
  });
});
