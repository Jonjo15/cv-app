import React from "react";
import ExperienceForm from "./ExperienceForm";
class Experience extends React.Component {
  constructor() {
    super();
    this.state = {
      companyName: "",
      role: "",
      responsibilities: "",
      dateStart: "",
      dateEnd: "",
      isEditing: true,
    };
  }
  handleEdit = (e) => {
    this.setState({ isEditing: true });
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isEditing: false });
  };
  render() {
    return !this.state.isEditing ? (
      <div>
        <h2>Experience</h2>
        <p>Company Name: {this.state.companyName}</p>
        <p>Role: {this.state.role}</p>
        <p>Responsibilities: {this.state.responsibilities}</p>
        <p>Start Date: {this.state.dateStart}</p>
        <p>End Date: {this.state.dateEnd}</p>
        <button onClick={this.handleEdit}>Edit</button>
      </div>
    ) : (
      <ExperienceForm
        handleSubmit={this.handleSubmit}
        data={this.state}
        handleChange={this.handleChange}
      />
    );
  }
}
export default Experience;
