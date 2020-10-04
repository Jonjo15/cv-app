import React from "react";

function EducationForm(props) {
  return (
    <div>
      <h3>Education</h3>
      <form>
        <input
          type="text"
          placeholder="School"
          name="school"
          value={props.data.school}
          onChange={props.handleChange}
        />
        <input
          type="text"
          placeholder="Degree"
          name="degree"
          value={props.data.degree}
          onChange={props.handleChange}
        />
        <input
          type="number"
          placeholder="Graduation Year"
          name="graduationYear"
          value={props.data.graduationYear}
          onChange={props.handleChange}
        />
        <button onClick={props.handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
export default EducationForm;
