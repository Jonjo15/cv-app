import React from "react";

class EducationForm extends React.Component {
  constructor() {
    super();
    this.state = { school: "", degree: "", graduationYear: "" };
    this.uid = this.uid.bind(this);
  }
  /*  const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
} */
  uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.uid());
    //console.log(this.state);
    this.props.switchEdit();
    this.props.addToEducation(this.state);
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    const id = this.uid();
    this.setState({ [name]: value, id: id });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="school"
          value={this.state.school}
          type="text"
          placeholder="School"
          onChange={this.handleChange}
        ></input>
        <input
          name="degree"
          value={this.state.degree}
          type="text"
          placeholder="Degree"
          onChange={this.handleChange}
        ></input>
        <label>Graduation Date: </label>
        <input
          name="graduationYear"
          value={this.state.graduationYear}
          type="number"
          onChange={this.handleChange}
        ></input>
        <button>Submit</button>
      </form>
    );
  }
}
export default EducationForm;
