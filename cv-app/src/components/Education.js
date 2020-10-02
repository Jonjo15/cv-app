import React from "react";

function Education(props) {
  return (
    <div>
      <h2>Education</h2>
      {props.data[0].school}
    </div>
  );
}

export default Education;
