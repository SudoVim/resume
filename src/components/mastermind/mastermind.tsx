import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectors, actions } from "features";
import { HC, HW, Column } from "components/utils";
import { Row, AnswerRow } from "./rows";

export function Mastermind() {
  const dispatch = useDispatch();
  const mastermind = useSelector(selectors.mastermind.mastermind);

  useEffect(() => {
    dispatch(actions.mastermind.initialize());
  }, [dispatch]);

  if (!mastermind.board) {
    return null;
  }

  // Render rows in reverse order as the first "play" is at the bottom and the
  // last play is at the top.
  const rows: React.ReactNode[] = [];
  for (let i = mastermind.numTries - 1; i >= 0; i--) {
    rows.push(<Row key={i} index={i} />);
  }

  return (
    <HC>
      <HW width="400px">
        <HC>
          <Column spacing="2px">
            <AnswerRow />
            {rows}
          </Column>
        </HC>
      </HW>
    </HC>
  );
}
