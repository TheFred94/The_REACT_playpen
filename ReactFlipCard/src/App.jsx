import { useState } from "react";
import ReactFlipCard from "@holbech/react-flip-card";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{ "--width": "500px", "--height": "500px" }}>
        <ReactFlipCard>
          <p>Front</p>
          <p>Back</p>
        </ReactFlipCard>
      </div>
    </div>
  );
}

export default App;
