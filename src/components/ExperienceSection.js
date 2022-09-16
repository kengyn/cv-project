const ExperienceForm = (props) => {
  return (
    <div className="experience-form">
      <label htmlFor="companyInput">Company:</label>
      <input
        name="company"
        type="text"
        id="companyInput"
        onChange={props.handleInputChange}
        value={props.company}
      ></input>
      <label htmlFor="positionInput">Position:</label>
      <input
        name="position"
        type="text"
        id="positionInput"
        onChange={props.handleInputChange}
        value={props.position}
      ></input>
      <label htmlFor="expFromInput">From:</label>
      <input
        name="expFrom"
        type="date"
        id="expFromInput"
        onChange={props.handleInputChange}
        value={props.expFrom}
      ></input>
      <label htmlFor="expToInput">To:</label>
      <input
        name="expTo"
        type="date"
        id="expToInput"
        onChange={props.handleInputChange}
        value={props.expTo}
      ></input>
      <label htmlFor="description">Description: </label>
      <textarea
        name="description"
        id="description"
        rows="4"
        cols="50"
        onChange={props.handleInputChange}
        value={props.description}
      ></textarea>
      <button onClick={props.handleSubmit}>save</button>
    </div>
  );
};

const SavedForm = (props) => {
  return (
    <div className="personal-form">
      <h2>company: {props.company}</h2>
      <h2>position: {props.position}</h2>
      <h2>expFrom: {props.expFrom}</h2>
      <h2>expTo: {props.expTo}</h2>
      <h2>description: {props.description}</h2>
      <button onClick={props.handleEdit}>edit</button>
    </div>
  );
};

const ExperienceSection = (props) => {
  if (props.saved === false) {
    return (
      <div className="experience-container">
        <h2>Experience</h2>
        <ExperienceForm
          company={props.company}
          position={props.position}
          expFrom={props.expFrom}
          expTo={props.expTo}
          description={props.description}
          handleSubmit={props.onSubmit}
          handleInputChange={props.onChange}
        />
      </div>
    );
  } else {
    return (
      <div className="experience-container">
        <h2>Experience</h2>
        <SavedForm
          company={props.company}
          position={props.position}
          expFrom={props.expFrom}
          expTo={props.expTo}
          description={props.description}
          handleEdit={props.onSubmit}
        />
      </div>
    );
  }
};

export default ExperienceSection;
