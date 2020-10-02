import React from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      personalEditing: true,
      education: [],
      experience: [],
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("hey");
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <h1>CV APP</h1>
        <PersonalInfo
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state}
        />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
