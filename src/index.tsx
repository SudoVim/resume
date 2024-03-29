import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const container = document.getElementById("root")!;
const root = createRoot(container);

export const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#373739",
    },
    secondary: {
      main: "#a0a0a0",
    },
    background: {
      paper: "#ffffe9",
    },
  },
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={createTheme(themeOptions)}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
