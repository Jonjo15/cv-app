import React from "react";

function EducationForm(props) {
  return (
    <form>
      <input type="text" placeholder="School"></input>
      <input type="text" placeholder="Degree"></input>
      <label>Graduation Date: </label>
      <input type="date"></input>
      <button>Submit</button>
    </form>
  );
}

export default EducationForm;
