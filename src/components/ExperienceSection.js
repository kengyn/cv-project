import React, { Component } from "react";

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="experience-form">
        <label htmlFor="companyInput">Company:</label>
        <input
          name="company"
          type="text"
          id="companyInput"
          onChange={this.props.handleInputChange}
          value={this.props.company}
        ></input>
        <label htmlFor="positionInput">Position:</label>
        <input
          name="position"
          type="text"
          id="positionInput"
          onChange={this.props.handleInputChange}
          value={this.props.position}
        ></input>
        <label htmlFor="expFromInput">From:</label>
        <input
          name="expFrom"
          type="date"
          id="expFromInput"
          onChange={this.props.handleInputChange}
          value={this.props.expFrom}
        ></input>
        <label htmlFor="expToInput">To:</label>
        <input
          name="expTo"
          type="date"
          id="expToInput"
          onChange={this.props.handleInputChange}
          value={this.props.expTo}
        ></input>
        <label htmlFor="description">Description: </label>
        <textarea
          name="description"
          id="description"
          rows="4"
          cols="50"
          onChange={this.props.handleInputChange}
          value={this.props.description}
        ></textarea>
        <button onClick={this.props.handleSubmit}>save</button>
      </div>
    );
  }
}

class SavedForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="personal-form">
        <h2>company: {this.props.company}</h2>
        <h2>position: {this.props.position}</h2>
        <h2>expFrom: {this.props.expFrom}</h2>
        <h2>expTo: {this.props.expTo}</h2>
        <h2>description: {this.props.description}</h2>
        <button onClick={this.props.handleEdit}>edit</button>
      </div>
    );
  }
}

class ExperienceSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.saved === false) {
      return (
        <div className="experience-container">
          <h2>Experience</h2>
          <ExperienceForm
            company={this.props.company}
            position={this.props.position}
            expFrom={this.props.expFrom}
            expTo={this.props.expTo}
            description={this.props.description}
            handleSubmit={this.props.onSubmit}
            handleInputChange={this.props.onChange}
          />
        </div>
      );
    } else {
      return (
        <div className="experience-container">
          <h2>Experience</h2>
          <SavedForm
            company={this.props.company}
            position={this.props.position}
            expFrom={this.props.expFrom}
            expTo={this.props.expTo}
            description={this.props.description}
            handleEdit={this.props.onSubmit}
          />
        </div>
      );
    }
  }
}

export default ExperienceSection;
