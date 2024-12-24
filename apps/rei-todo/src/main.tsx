import React from "react";
import ReactDOM from "react-dom/client";
import { ReiButton } from "rei-design/button";
import App from ".";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <ReiButton />
    <App />
  </React.StrictMode>
);
