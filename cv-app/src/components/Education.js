import React from "react";
import EducationForm from "./EducationForm";
class Education extends React.Component {
  render() {
    const elements = this.props.data.map((element, i) => (
      <div className="educationList" key={i}>
        <p>School: {element.school}</p>
        <p>Degree: {element.degree}</p>
        <p>Graduation Year: {element.graduationDate}</p>
        <button>Edit</button>
      </div>
    ));
    return (
      <div>
        <h1>Education</h1>
        {elements}
        {!this.props.data.isEditingEducation ? (
          <EducationForm handleChange={this.props.handleChange} />
        ) : null}
      </div>
    );
  }
}

export default Education;
