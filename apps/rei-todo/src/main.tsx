import React from "react";
import ReactDOM from "react-dom/client";
import { ReiButton } from "@rei/design/button";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <ReiButton />
    <Button />
  </React.StrictMode>
);
