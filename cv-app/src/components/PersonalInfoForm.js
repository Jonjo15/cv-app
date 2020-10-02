import React from "react";

function InfoForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={props.firstName}
        onChange={props.handleChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={props.lastName}
        onChange={props.handleChange}
      />
      <input
        type="number"
        placeholder="Phone"
        name="phone"
        value={props.phone}
        onChange={props.handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={props.email}
        onChange={props.handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default InfoForm;
