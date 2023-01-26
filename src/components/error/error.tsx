import React from "react";
import {
  Page,
  Essay,
  HC,
  HW,
  Column,
  Link,
  EventTitle,
  Subpage,
} from "components/utils";

export function Error() {
  return (
    <Page>
      <Subpage
        title="Error!"
        breadcrumbs={[
          {
            name: "< Back",
            to: "/",
          },
        ]}
      >
        <HC>
          <HW width="600px">
            <Column>
              <Essay>
                An error has occurred. Perhaps you've reached this page on
                purpose? At any rate,
              </Essay>
              <Link to={"/mastermind"}>
                <EventTitle event="Would you like to play a game?" />
              </Link>
            </Column>
          </HW>
        </HC>
      </Subpage>
    </Page>
  );
}
