import React from "react";
import InfoForm from "./PersonalInfoForm";
const PersonalInfo = (props) => {
  if (!props.data.isEditingPersonal) {
    return (
      <div>
        <h2>Personal Information</h2>
        <InfoForm
          handleChange={props.handleChange}
          data={props.data}
          handleSubmit={props.handleSubmit}
        />
      </div>
    );
  } else {
    return (
      <div>
        <h2>Personal Information</h2>
        <p>First Name: {props.data.firstName}</p>
        <p>Last Name: {props.data.lastName}</p>
        <p>Phone: {props.data.phone}</p>
        <p>Email: {props.data.email}</p>
        <button onClick={props.handleEditPersonal}>Edit</button>
      </div>
    );
  }
};
export default PersonalInfo;
