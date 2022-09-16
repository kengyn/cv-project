const PersonalForm = (props) => {
  return (
    <div className="personal-form">
      <label htmlFor="nameInput">Name:</label>
      <input
        name="name"
        type="text"
        id="nameInput"
        onChange={props.onChange}
        value={props.name}
      ></input>
      <label htmlFor="emailInput">Email:</label>
      <input
        name="email"
        type="email"
        id="emailInput"
        onChange={props.onChange}
        value={props.email}
      ></input>
      <label htmlFor="phoneInput">Phone:</label>
      <input
        name="phone"
        type="tel"
        id="phoneInput"
        onChange={props.onChange}
        value={props.phone}
      ></input>
      <button onClick={props.handleSubmit}>save</button>
    </div>
  );
};

const SavedForm = (props) => {
  return (
    <div className="personal-form">
      <h2>name: {props.name}</h2>
      <h2>email: {props.email}</h2>
      <h2>phone: {props.phone}</h2>
      <button onClick={props.handleEdit}>edit</button>
    </div>
  );
};

const PersonalSection = (props) => {
  if (props.saved === false) {
    return (
      <div className="personal-container">
        <h2>Personal Information</h2>
        <PersonalForm
          name={props.name}
          email={props.email}
          phone={props.phone}
          handleSubmit={props.onSubmit}
          onChange={props.onChange}
        />
      </div>
    );
  } else {
    return (
      <div className="personal-container">
        <h2>Personal Information</h2>
        <SavedForm
          name={props.name}
          email={props.email}
          phone={props.phone}
          handleEdit={props.onSubmit}
        />
      </div>
    );
  }
};

export default PersonalSection;
