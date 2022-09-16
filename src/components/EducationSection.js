import React, { Component } from "react";

class EducationForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="education-form">
        <label htmlFor="schoolInput">School Name:</label>
        <input
          name="school"
          type="text"
          id="schoolInput"
          onChange={this.props.onEduChange}
          value={this.props.school}
        ></input>
        <label htmlFor="degreeInput">Degree:</label>
        <input
          name="degree"
          type="text"
          id="degreeInput"
          onChange={this.props.onEduChange}
          value={this.props.degree}
        ></input>
        <label htmlFor="fromInput">From:</label>
        <input
          name="from"
          type="date"
          id="fromInput"
          onChange={this.props.onEduChange}
          value={this.props.from}
        ></input>
        <label htmlFor="toInput">To:</label>
        <input
          name="to"
          type="date"
          id="toInput"
          onChange={this.props.onEduChange}
          value={this.props.to}
        ></input>
        <button onClick={this.props.onSubmitChange}>save</button>
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
        <h2>school: {this.props.school}</h2>
        <h2>degree: {this.props.degree}</h2>
        <h2>from: {this.props.from}</h2>
        <h2>to: {this.props.to}</h2>
        <button onClick={this.props.onEdit}>edit</button>
      </div>
    );
  }
}

class EducationSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let form;
    if (this.props.saved) {
      form = (
        <SavedForm
          school={this.props.school}
          degree={this.props.degree}
          from={this.props.from}
          to={this.props.to}
          onEdit={this.props.onSubmit}
        />
      );
    } else {
      form = (
        <EducationForm
          school={this.props.school}
          degree={this.props.degree}
          from={this.props.from}
          to={this.props.to}
          onSubmitChange={this.props.onSubmit}
          onEduChange={this.props.onChange}
        />
      );
    }

    return (
      <div className="education-container">
        <h2>Education</h2>
        {form}
      </div>
    );
  }
}

export default EducationSection;
