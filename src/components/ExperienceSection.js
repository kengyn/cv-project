import React, { Component } from "react";

class ExperienceSection extends Component {
  render() {
    return (
      <div className="experience-container">
        <h1>Experience</h1>
        <label htmlFor="companyInput">Company:</label>
        <input type="text" id="companyInput"></input>
        <label htmlFor="positionInput">Position:</label>
        <input type="text" id="positionInput"></input>
        <label htmlFor="expFromInput">From:</label>
        <input type="date" id="expFromInput"></input>
        <label htmlFor="expToInput">To:</label>
        <input type="date" id="expToInput"></input>
        <label htmlFor="description">Description: </label>
        <textarea id="description" rows="4" cols="50"></textarea>
      </div>
    );
  }
}

export default ExperienceSection;
