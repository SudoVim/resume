import React from "react";
import { Link, Column, EventTitle } from "components/utils";

export function Education() {
  return (
    <Link to={"/education"}>
      <Column>
        <EventTitle
          event="The University of Texas at Austin"
          tenure="September 2007 - December 2010"
          bold
        />
        <EventTitle event="Bachelor of Science in Electrical Engineering" />
      </Column>
    </Link>
  );
}
