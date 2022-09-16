import React, { useState } from "react";
import PersonalSection from "./components/PersonalSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";

const App = () => {
  const [state, setState] = useState({
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
  });

  const handleOnChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setState({ ...state, saved: !state.saved });
  };

  return (
    <div>
      <form>
        <h1>CV APPLICATION</h1>
        <PersonalSection
          name={state.name}
          email={state.email}
          phone={state.phone}
          saved={state.saved}
          onSubmit={handleEdit}
          onChange={handleOnChange}
        />
        <EducationSection
          school={state.school}
          degree={state.degree}
          from={state.from}
          to={state.to}
          saved={state.saved}
          onSubmit={handleEdit}
          onChange={handleOnChange}
        />
        <ExperienceSection
          company={state.company}
          position={state.position}
          expFrom={state.expFrom}
          expTo={state.expTo}
          description={state.description}
          saved={state.saved}
          onSubmit={handleEdit}
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
};

export default App;
