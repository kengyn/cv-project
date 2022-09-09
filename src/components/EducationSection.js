import React, { Component } from "react";

class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: this.props.school,
      degree: this.props.degree,
      from: this.props.from,
      to: this.props.to,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;

    this.setState({
      [name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(
      this.state.school,
      this.state.degree,
      this.state.from,
      this.state.to
    );
  }

  render() {
    return (
      <div className="education-form">
        <label htmlFor="schoolInput">School Name:</label>
        <input
          name="school"
          type="text"
          id="schoolInput"
          onChange={this.handleInputChange}
          defaultValue={this.state.school}
        ></input>
        <label htmlFor="degreeInput">Degree:</label>
        <input
          name="degree"
          type="text"
          id="degreeInput"
          onChange={this.handleInputChange}
          defaultValue={this.state.degree}
        ></input>
        <label htmlFor="fromInput">From:</label>
        <input
          name="from"
          type="date"
          id="fromInput"
          onChange={this.handleInputChange}
          defaultValue={this.state.from}
        ></input>
        <label htmlFor="toInput">To:</label>
        <input
          name="to"
          type="date"
          id="toInput"
          onChange={this.handleInputChange}
          defaultValue={this.state.to}
        ></input>
        <button onClick={this.onSubmit}>save</button>
      </div>
    );
  }
}

class SavedForm extends Component {
  constructor(props) {
    super(props);
    this.onEdit = this.onEdit.bind(this);
  }

  onEdit(e) {
    e.preventDefault();
    this.props.handleEdit();
  }
  render() {
    return (
      <div className="personal-form">
        <h2>school: {this.props.school}</h2>
        <h2>degree: {this.props.degree}</h2>
        <h2>from: {this.props.from}</h2>
        <h2>to: {this.props.to}</h2>
        <button onClick={this.onEdit}>edit</button>
      </div>
    );
  }
}

class EducationSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      degree: "",
      from: "",
      to: "",
      saved: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleSubmit(school, degree, from, to) {
    this.setState({
      school: school,
      degree: degree,
      from: from,
      to: to,
      saved: true,
    });
  }

  handleEdit() {
    this.setState({
      saved: false,
    });
  }

  render() {
    if (this.state.saved === false) {
      return (
        <div className="education-container">
          <h2>Education</h2>
          <EducationForm
            school={this.state.school}
            degree={this.state.degree}
            from={this.state.from}
            to={this.state.to}
            handleSubmit={this.handleSubmit}
          />
        </div>
      );
    } else {
      return (
        <div className="education-container">
          <h2>Education</h2>
          <SavedForm
            school={this.state.school}
            degree={this.state.degree}
            from={this.state.from}
            to={this.state.to}
            handleEdit={this.handleEdit}
          />
        </div>
      );
    }
  }
}

export default EducationSection;
