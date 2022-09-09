import React, { Component } from "react";

class PersonalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      email: this.props.email,
      phone: this.props.phone,
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
      this.state.name,
      this.state.email,
      this.state.phone
    );
  }

  render() {
    return (
      <div className="personal-form">
        <label htmlFor="nameInput">Name:</label>
        <input
          name="name"
          type="text"
          id="nameInput"
          onChange={this.handleInputChange}
          defaultValue={this.state.name}
        ></input>
        <label htmlFor="emailInput">Email:</label>
        <input
          name="email"
          type="email"
          id="emailInput"
          onChange={this.handleInputChange}
          defaultValue={this.state.email}
        ></input>
        <label htmlFor="phoneInput">Phone:</label>
        <input
          name="phone"
          type="tel"
          id="phoneInput"
          onChange={this.handleInputChange}
          defaultValue={this.state.phone}
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
        <h2>name: {this.props.name}</h2>
        <h2>email: {this.props.email}</h2>
        <h2>phone: {this.props.phone}</h2>
        <button onClick={this.onEdit}>edit</button>
      </div>
    );
  }
}

class PersonalSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      saved: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleSubmit(name, email, phone) {
    this.setState({
      name: name,
      phone: phone,
      email: email,
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
        <div className="personal-container">
          <h2>Personal Information</h2>
          <PersonalForm
            name={this.state.name}
            email={this.state.email}
            phone={this.state.phone}
            handleSubmit={this.handleSubmit}
          />
        </div>
      );
    } else {
      return (
        <div className="personal-container">
          <h2>Personal Information</h2>
          <SavedForm
            name={this.state.name}
            email={this.state.email}
            phone={this.state.phone}
            handleEdit={this.handleEdit}
          />
        </div>
      );
    }
  }
}

export default PersonalSection;
