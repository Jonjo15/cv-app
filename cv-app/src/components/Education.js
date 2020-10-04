import React from "react";
import EducationForm from "./EducationForm";
class Education extends React.Component {
  constructor() {
    super();
    this.state = {
      school: "",
      degree: "",
      graduationYear: "",
      isEditing: true,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isEditing: false });
  };
  handleEdit = (e) => {
    this.setState({ isEditing: true });
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return !this.state.isEditing ? (
      <div className="educationDiv">
        <h3>Education</h3>
        <p>School: {this.state.school}</p>
        <p>Degree: {this.state.degree}</p>
        <p>Graduation Year: {this.state.graduationYear}</p>

        <button onClick={this.handleEdit}>Edit</button>
      </div>
    ) : (
      <EducationForm
        handleChange={this.handleChange}
        data={this.state}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Education;
