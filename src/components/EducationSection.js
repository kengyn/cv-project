const EducationForm = (props) => {
  return (
    <div className="education-form">
      <label htmlFor="schoolInput">School Name:</label>
      <input
        name="school"
        type="text"
        id="schoolInput"
        onChange={props.onEduChange}
        value={props.school}
      ></input>
      <label htmlFor="degreeInput">Degree:</label>
      <input
        name="degree"
        type="text"
        id="degreeInput"
        onChange={props.onEduChange}
        value={props.degree}
      ></input>
      <label htmlFor="fromInput">From:</label>
      <input
        name="from"
        type="date"
        id="fromInput"
        onChange={props.onEduChange}
        value={props.from}
      ></input>
      <label htmlFor="toInput">To:</label>
      <input
        name="to"
        type="date"
        id="toInput"
        onChange={props.onEduChange}
        value={props.to}
      ></input>
      <button onClick={props.onSubmitChange}>save</button>
    </div>
  );
};

const SavedForm = (props) => {
  return (
    <div className="personal-form">
      <h2>school: {props.school}</h2>
      <h2>degree: {props.degree}</h2>
      <h2>from: {props.from}</h2>
      <h2>to: {props.to}</h2>
      <button onClick={props.onEdit}>edit</button>
    </div>
  );
};

const EducationSection = (props) => {
  let form;
  if (props.saved) {
    form = (
      <SavedForm
        school={props.school}
        degree={props.degree}
        from={props.from}
        to={props.to}
        onEdit={props.onSubmit}
      />
    );
  } else {
    form = (
      <EducationForm
        school={props.school}
        degree={props.degree}
        from={props.from}
        to={props.to}
        onSubmitChange={props.onSubmit}
        onEduChange={props.onChange}
      />
    );
  }

  return (
    <div className="education-container">
      <h2>Education</h2>
      {form}
    </div>
  );
};

export default EducationSection;
