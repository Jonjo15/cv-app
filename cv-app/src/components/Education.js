import React, { useState } from "react";

function Education(props) {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  if (isEditing) {
    return (
      <div>
        <h2>Education</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsEditing(false);
          }}
        >
          <input
            onChange={(e) => setSchool(e.target.value)}
            value={school}
            type="text"
            placeholder="School"
          />
          <input
            onChange={(e) => setDegree(e.target.value)}
            value={degree}
            type="text"
            placeholder="Degree"
          />
          <input
            onChange={(e) => setGraduationYear(e.target.value)}
            value={graduationYear}
            type="text"
            placeholder="Graduation Year"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Education</h2>
        <p>School: {school}</p>
        <p>Degree: {degree}</p>
        <p>Graduation Year: {graduationYear}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    );
  }
}
export default Education;
