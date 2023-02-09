import { Experience } from "./types";
import { ibm_flashsystems } from "./ibm_flashsystems";
import { pullrequest } from "./pullrequest";
import { hackerone } from "./hackerone";
import { tms } from "./tms";

export const experience: Experience[] = [
  hackerone,
  pullrequest,
  ibm_flashsystems,
  tms,
];
