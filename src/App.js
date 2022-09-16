import React, { Component } from "react";
import PersonalSection from "./components/PersonalSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      school: "",
      degree: "",
      from: "",
      to: "",
      company: "",
      position: "",
      expFrom: "",
      expTo: "",
      description: "",
      saved: false,
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({
      saved: !this.state.saved,
    });
  }

  render() {
    return (
      <div>
        <form>
          <h1>CV APPLICATION</h1>
          <PersonalSection
            name={this.state.name}
            email={this.state.email}
            phone={this.state.phone}
            saved={this.state.saved}
            onSubmit={this.handleEdit}
            onChange={this.handleOnChange}
          />
          <EducationSection
            school={this.state.school}
            degree={this.state.degree}
            from={this.state.from}
            to={this.state.to}
            saved={this.state.saved}
            onSubmit={this.handleEdit}
            onChange={this.handleOnChange}
          />
          <ExperienceSection
            company={this.state.company}
            position={this.state.position}
            expFrom={this.state.expFrom}
            expTo={this.state.expTo}
            description={this.state.description}
            saved={this.state.saved}
            onSubmit={this.handleEdit}
            onChange={this.handleOnChange}
          />
        </form>
      </div>
    );
  }
}

export default App;
