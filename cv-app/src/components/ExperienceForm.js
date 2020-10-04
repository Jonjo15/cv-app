import React from "react";

function ExperienceForm(props) {
  return (
    <div>
      <h3>Experience</h3>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={props.data.companyName}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={props.data.role}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="responsibilities"
          placeholder="Responsibilities"
          value={props.data.responsibilities}
          onChange={props.handleChange}
        />
        <input
          type="date"
          name="dateStart"
          placeholder="Start Date"
          value={props.data.dateStart}
          onChange={props.handleChange}
        />
        <input
          type="date"
          name="dateEnd"
          placeholder="End Date"
          value={props.data.dateEnd}
          onChange={props.handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ExperienceForm;
