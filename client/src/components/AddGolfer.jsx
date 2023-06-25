import React, { useState } from "react";

// Change this component to golfer info, inputs and fields need to match

function AddGolfer(props) {
  const initialInputs = {
    firstName: props.firstName || "",
    lastName: props.lastName || "",
    handicap: props.handicap || "",
    username: props.username || "",
    coursesPlayed: props.coursesPlayed || "",
  };
  const [inputs, setInputs] = useState(initialInputs);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.submit(inputs, props._id);
    setInputs(initialInputs);
  }

  return (
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
       <input
        type="number"
        name="handicap"
        value={inputs.handicap}
        onChange={handleChange}
        placeholder="Handicap"
        min="0"
        max="36"
      /> 
        <input
        type="text"
        name="username"
        value={inputs.username}
        onChange={handleChange}
        placeholder="Username"
        minLength={8}
        maxLength={16}
      />
      <input
        type="text"
        name="coursesPlayed"
        value={inputs.coursesPlayed}
        onChange={handleChange}
        placeholder="Courses Played"
      />
      <button>{props.btnText}</button>
    </form>
  );
}

export default AddGolfer;
