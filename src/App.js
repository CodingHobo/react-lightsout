import React from "react";
import Board from "./Board";
import chanceLightStartsOn from "./chanceLightsStart"
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
      <div className="App">
        <Board chanceLightStartsOn={chanceLightStartsOn} />
      </div>
  );
}

export default App;
