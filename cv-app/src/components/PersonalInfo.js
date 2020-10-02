import React from "react";
import InfoForm from "./PersonalInfoForm";
const PersonalInfo = (props) => {
  return (
    <div>
      <h2>Personal information</h2>
      <InfoForm
        handleChange={props.handleChange}
        data={props.data}
        handleSubmit={props.handleSubmit}
      />
    </div>
  );
};
export default PersonalInfo;
