import React, { Component } from "react";

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: this.props.company,
      position: this.props.position,
      expFrom: this.props.expFrom,
      expTo: this.props.expTo,
      description: this.props.description,
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
      this.state.company,
      this.state.position,
      this.state.expFrom,
      this.state.expTo,
      this.state.description
    );
  }

  render() {
    return (
      <div className="experience-form">
        <label htmlFor="companyInput">Company:</label>
        <input
          name="company"
          type="text"
          id="companyInput"
          onChange={this.handleInputChange}
          defaultValue={this.state.company}
        ></input>
        <label htmlFor="positionInput">Position:</label>
        <input
          name="position"
          type="text"
          id="positionInput"
          onChange={this.handleInputChange}
          defaultValue={this.state.position}
        ></input>
        <label htmlFor="expFromInput">From:</label>
        <input
          name="expFrom"
          type="date"
          id="expFromInput"
          onChange={this.handleInputChange}
          defaultValue={this.state.expFrom}
        ></input>
        <label htmlFor="expToInput">To:</label>
        <input
          name="expTo"
          type="date"
          id="expToInput"
          onChange={this.handleInputChange}
          defaultValue={this.state.expTo}
        ></input>
        <label htmlFor="description">Description: </label>
        <textarea
          name="description"
          id="description"
          rows="4"
          cols="50"
          onChange={this.handleInputChange}
          defaultValue={this.state.description}
        ></textarea>
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
        <h2>company: {this.props.company}</h2>
        <h2>position: {this.props.position}</h2>
        <h2>expFrom: {this.props.expFrom}</h2>
        <h2>expTo: {this.props.expTo}</h2>
        <h2>description: {this.props.description}</h2>
        <button onClick={this.onEdit}>edit</button>
      </div>
    );
  }
}

class ExperienceSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      position: "",
      expFrom: "",
      expTo: "",
      description: "",
      saved: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleSubmit(company, position, expFrom, expTo, description) {
    this.setState({
      company: company,
      position: position,
      expFrom: expFrom,
      expTo: expTo,
      description: description,
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
        <div className="experience-container">
          <h2>Experience</h2>
          <ExperienceForm
            company={this.state.company}
            position={this.state.position}
            expFrom={this.state.expFrom}
            expTo={this.state.expTo}
            description={this.state.description}
            handleSubmit={this.handleSubmit}
          />
        </div>
      );
    } else {
      return (
        <div className="experience-container">
          <h2>Experience</h2>
          <SavedForm
            company={this.state.company}
            position={this.state.position}
            expFrom={this.state.expFrom}
            expTo={this.state.expTo}
            description={this.state.description}
            handleEdit={this.handleEdit}
          />
        </div>
      );
    }
  }
}

export default ExperienceSection;
