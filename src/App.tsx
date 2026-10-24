import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import { PlateEditor } from "@/components/editor/plate-editor";
import "./App.css";

function App() {
  return (
    <main style={{ height: "100vh", width: "100vw", padding: "2rem", boxSizing: "border-box" }}>
      <PlateEditor/>
    </main>
  );
}

export default App;
