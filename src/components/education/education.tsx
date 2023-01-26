import React from "react";
import { Link, Column, EventTitle, Essay } from "components/utils";

export function Education() {
  return (
    <Column>
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
      <Essay>
        I started my time at The University of Texas at Austin with 28 hours of
        credit due to my AP scores in high school. This allowed me to pack my
        schedule with primarily engineering courses so that I could finish my
        education in three and a half years.
      </Essay>
    </Column>
  );
}
