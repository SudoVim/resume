import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectors, actions } from "features";
import { HC, HW, Column } from "components/utils";
import { Row } from "./rows";

export function Mastermind() {
  const dispatch = useDispatch();
  const mastermind = useSelector(selectors.mastermind.mastermind);

  useEffect(() => {
    dispatch(actions.mastermind.initialize());
  }, [dispatch]);

  if (!mastermind.board) {
    return null;
  }

  const rows: React.ReactNode[] = [];
  for (let i = mastermind.numTries - 1; i >= 0; i--) {
    rows.push(<Row key={i} index={i} />);
  }

  return (
    <HC>
      <HW width="300px">
        <HC>
          <Column spacing="2px">{rows}</Column>
        </HC>
      </HW>
    </HC>
  );
}
