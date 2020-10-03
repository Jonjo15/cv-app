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
      isEditingPersonal: false,
      isEditingEducation: false,
      education: [
        { school: "Fancy School", degree: "Engineer", graduationDate: "2020" },
        { school: "Zadar", degree: "Gimnazijalac", graduationDate: "2015" },
      ],
      experience: [],
    };
  }
  handleEditPersonal = () => {
    this.setState((prevState) => {
      const updatedState = { ...prevState };
      updatedState.isEditingPersonal = !prevState.isEditingPersonal;
      return updatedState;
    });
    console.log("hey");
  };
  /* editEducation() {
    this.setState((prevState) => {
      return { ...prevState, isEditingEducation: true };
    });
  } */
  handleSubmit = (e) => {
    this.setState({ isEditingPersonal: true });
    e.preventDefault();
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    /* if (name === "education") {
      this.setState(prevState=> {

      })
    } */
    this.setState({ [name]: value });
  };
  render() {
    const education = this.state.education;
    return (
      <div>
        <h1>CV APP</h1>
        <PersonalInfo
          handleEditPersonal={this.handleEditPersonal}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state}
        />
        <Education
          editEducation={this.editEducation}
          data={education}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Experience />
      </div>
    );
  }
}

export default App;
