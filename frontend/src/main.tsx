import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// only needed if you are using the default github page path for the rep
import { frontendBaseFolder } from "./utils/config.defaults.ts";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*
      basename is only needed if you are using the default github path
      for the repo
    */}
    <BrowserRouter basename={frontendBaseFolder}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
