import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IconButton } from "@material-ui/core";
import { Close as IconClose } from "@material-ui/icons";

import { SnackbarProvider, VariantType, useSnackbar } from "notistack";

function SnackbarCloseButton({ key }: any) {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton onClick={() => closeSnackbar(key)}>
      <IconClose />
    </IconButton>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      maxSnack={3}
      action={(key) => <SnackbarCloseButton key={key} />}
    >
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
