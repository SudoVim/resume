import React from "react";
import ReactMarkdown from "react-markdown";
import { Typography } from "@mui/material";
import { Column } from "components/utils";

type Props = {
  children: string;
};

function EssayWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <Typography variant="body1" sx={{ fontFamily: "monospace" }}>
      {children}
    </Typography>
  );
}

export function Essay({ children }: Props) {
  return (
    <Column>
      {/*
        Split these children into paragraphs because the ReactMarkdown component
        doesn't seem to have a way to split these paragraphs up with whitespace.
        The end result functions the same as before but includes the markdown
        formatting for each individual paragraph.
      */}
      {children.split("\n\n").map((child, i) => (
        <ReactMarkdown
          key={i}
          components={{
            p: ({ node, ...props }) => <EssayWrapper {...props} />,
            li: ({ node, ...props }) => (
              <li>
                <EssayWrapper {...props} />
              </li>
            ),
          }}
        >
          {child}
        </ReactMarkdown>
      ))}
    </Column>
  );
}
