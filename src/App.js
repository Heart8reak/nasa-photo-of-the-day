import React from "react";
import CardDisplay from "./components/cardDisplay";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Astronomy Picture of the Day (APOD)</h1>
      <hr></hr>
      <CardDisplay />
    </div>
  );
}

export default App;
