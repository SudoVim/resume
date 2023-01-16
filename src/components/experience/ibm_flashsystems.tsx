import React from "react";
import { Grid, Typography } from "@mui/material";
import { Item } from "./item";
import { SubItem } from "./subitem";
import { Responsibilities } from "./responsibilities";
import { Responsibility } from "./responsibility";

export function IBMFlashSystems() {
  return (
    <Item company="IBM FlashSystems" tenure="January 2013 - April 2019">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1" sx={{ fontFamily: "monospace" }}>
            Worked in all aspects of the day-to-day at IBM FlashSystems and
            succeeded at not only improving the product itself but also our core
            infrastructure, release cycles, and regression.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SubItem
            role="Senior Software Infrastructure Engineer"
            tenure="February 2014 - April 2019"
          >
            <Responsibilities>
              <Responsibility>
                designed and implemented distributed system for digesting and
                analyzing product debug data using MongoDB, Celery, and
                Elasticsearch
              </Responsibility>
              <Responsibility>
                architecting management software infrastructure for FlashSystems
              </Responsibility>
              <Responsibility>
                regularly communicating best practices when using internal
                project infrastructure
              </Responsibility>
              <Responsibility>
                documenting internal project infrastructure in a way that’s easy
                to quickly understand the bigger picture but also showcase the
                inner workings and design of the specific modules
              </Responsibility>
              <Responsibility>
                reviewing others’ code to ensure cohesion between modules and to
                better educate them on which API functions are best to use where
                and why
              </Responsibility>
              <Responsibility>
                organizing release cycles around new features and bugs to
                tighten the feedback loop between test and development
              </Responsibility>
              <Responsibility>
                designed and implemented APIs to use FlashSystems as a part of
                larger products
              </Responsibility>
            </Responsibilities>
          </SubItem>
        </Grid>
      </Grid>
    </Item>
  );
}
