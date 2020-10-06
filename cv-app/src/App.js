import React from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
/* import Experience from "./components/Experience"; */
import "./App.css";
function App() {
  return (
    <div className="app">
      <h2>Curriculum Vitae</h2>
      <PersonalInfo />
      <Education />
    </div>
  );
}

export default App;
