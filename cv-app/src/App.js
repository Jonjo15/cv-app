import React from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";

import "./App.css";
import Experience from "./components/Experience";
function App() {
  return (
    <div className="app">
      <h2>Curriculum Vitae</h2>
      <PersonalInfo />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
