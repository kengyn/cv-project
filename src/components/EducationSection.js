import React, { Component } from "react";

class EducationSection extends Component {
  render() {
    return (
      <div className="education-container">
        <h1>Education</h1>
        <label htmlFor="schoolInput">School Name:</label>
        <input type="text" id="schoolInput"></input>
        <label htmlFor="degreeInput">Degree:</label>
        <input type="text" id="degreeInput"></input>
        <label htmlFor="fromInput">From:</label>
        <input type="date" id="fromInput"></input>
        <label htmlFor="toInput">To:</label>
        <input type="date" id="toInput"></input>
      </div>
    );
  }
}

export default EducationSection;
