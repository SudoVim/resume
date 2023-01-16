import React from "react";

type Props = {
  children: React.ReactNode[];
};

export function Responsibilities({ children }: Props) {
  return (
    <ul>
      {children.map((child, i) => (
        <li key={i}>{child}</li>
      ))}
    </ul>
  );
}
