import React, { useState } from "react";
function Experience(props) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  if (isEditing) {
    return (
      <div>
        <h2>Experience</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsEditing(false);
          }}
        >
          <input
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            type="text"
          />
          <input
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            type="text"
          />
          <input
            placeholder="Responsibilities"
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)}
            type="text"
          />
          <input
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            type="date"
          />
          <input
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            type="date"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Experience</h2>
        <p>Company: {company}</p>
        <p>Role: {role}</p>
        <p>Responsibilities: {responsibilities}</p>
        <p>Start date: {startDate}</p>
        <p>End date: {endDate}</p>
        <button onClick={(e) => setIsEditing(true)}>Edit</button>
      </div>
    );
  }
}
export default Experience;
