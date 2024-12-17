import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AssemblyEndgame from "./AssemblyEndgame.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AssemblyEndgame />
  </StrictMode>
);
