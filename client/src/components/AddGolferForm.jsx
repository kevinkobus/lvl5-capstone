import React, { useState, useContext } from "react";
import { InfoContext } from "./InfoContext.jsx";


function AddGolferForm(props) {
  const { addGolfer, setGolfers } = useContext(InfoContext);

  const initialInputs = {
    firstName: props.firstName || "",
    lastName: props.lastName || "",
    handicap: props.handicap || "",
    username: props.username || "",
    // coursesPlayed: props.coursesPlayed || "",
  };
  const [inputs, setInputs] = useState(initialInputs);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  }
  // console.log(inputs)

  function handleSubmit(e) {
    e.preventDefault();
    addGolfer(inputs);
    // props.submit(inputs, props._id);
    setInputs(initialInputs);
  }

  // console.log(inputs)

  return (
    <div className="golfer-form-container">
      <h4 className="form-title">Sign up</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={inputs.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={inputs.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <label htmlFor="handicap">Handicap</label>
        <input
          type="number"
          name="handicap"
          value={inputs.handicap}
          onChange={handleChange}
          min="0"
          max="36"
        />
        <input
          type="text"
          name="username"
          value={inputs.username}
          onChange={handleChange}
          placeholder="Choose a username"
          minLength={8}
          maxLength={16}
        />
        {/* <input
        type="text"
        name="coursesPlayed"
        value={inputs.coursesPlayed}
        onChange={handleChange}
        placeholder="Courses Played"
      /> */}
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default AddGolferForm;

// {props.btnText}
