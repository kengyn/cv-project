import React, { Component } from "react";

class PersonalForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="personal-form">
        <label htmlFor="nameInput">Name:</label>
        <input
          name="name"
          type="text"
          id="nameInput"
          onChange={this.props.onChange}
          value={this.props.name}
        ></input>
        <label htmlFor="emailInput">Email:</label>
        <input
          name="email"
          type="email"
          id="emailInput"
          onChange={this.props.onChange}
          value={this.props.email}
        ></input>
        <label htmlFor="phoneInput">Phone:</label>
        <input
          name="phone"
          type="tel"
          id="phoneInput"
          onChange={this.props.onChange}
          value={this.props.phone}
        ></input>
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
        <h2>name: {this.props.name}</h2>
        <h2>email: {this.props.email}</h2>
        <h2>phone: {this.props.phone}</h2>
        <button onClick={this.props.handleEdit}>edit</button>
      </div>
    );
  }
}

class PersonalSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.saved === false) {
      return (
        <div className="personal-container">
          <h2>Personal Information</h2>
          <PersonalForm
            name={this.props.name}
            email={this.props.email}
            phone={this.props.phone}
            handleSubmit={this.props.onSubmit}
            onChange={this.props.onChange}
          />
        </div>
      );
    } else {
      return (
        <div className="personal-container">
          <h2>Personal Information</h2>
          <SavedForm
            name={this.props.name}
            email={this.props.email}
            phone={this.props.phone}
            handleEdit={this.props.onSubmit}
          />
        </div>
      );
    }
  }
}

export default PersonalSection;
