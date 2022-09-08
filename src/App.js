import React, { Component } from "react";
import PersonalSection from "./components/PersonalSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <PersonalSection />
        </form>
      </div>
    );
  }
}

export default App;
