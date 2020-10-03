import React from "react";
import EducationForm from "./EducationForm";
class Education extends React.Component {
  constructor() {
    super();
    this.state = { education: [], isEditing: false };
    this.addToEducation = this.addToEducation.bind(this);
  }
  addToEducation(obj) {
    //console.log(obj);
    this.setState((prevState) => {
      const updatedEducation = [...prevState.education];
      //console.log(obj);
      updatedEducation.push(obj);
      //console.log(updatedState.education.length);
      //   updatedState.size = updatedState.education.length;
      return { education: updatedEducation, size: updatedEducation.length };
    });
    // console.log(this.state.education[0].id);
  }
  switchEdit = (e) => {
    this.setState((prevState) => {
      return { isEditing: !prevState.isEditing };
    });
  };
  render() {
    const elements = this.state.education.map((element, i) => (
      <div className="educationList" key={i}>
        <p>School: {element.school}</p>
        <p>Degree: {element.degree}</p>
        <p>Graduation Year: {element.graduationYear}</p>
        <button onClick={(e) => this.editEducation(element.id)} id={element.id}>
          Edit
        </button>
      </div>
    ));
    return (
      <div>
        <h1>Education</h1>
        {elements}
        {this.state.isEditing ? (
          <EducationForm
            switchEdit={this.switchEdit}
            addToEducation={this.addToEducation}
            handleChange={this.props.handleChange}
          />
        ) : (
          <button onClick={this.switchEdit}>Add</button>
        )}
      </div>
    );
  }
}

export default Education;
