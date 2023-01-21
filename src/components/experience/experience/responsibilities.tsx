import React from "react";
import { Essay } from "components/utils";

type Props = {
  responsibilities: string[];
};

export function Responsibilities({ responsibilities }: Props) {
  return (
    <ul>
      {responsibilities.map((responsibility, i) => (
        <li key={i}>
          <Essay>{responsibility}</Essay>
        </li>
      ))}
    </ul>
  );
}
