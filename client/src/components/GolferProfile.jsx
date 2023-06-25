import React, { useState } from "react";
import AddGolfer from "./AddGolfer";


// Change this component to golfer info, inputs and fields need to match


function GolferProfile(props) {
  // console.log(props)
  const { firstName, lastName, handicap, username, coursesPlayed, _id } = props;
  const [editToggle, setEditToggle] = useState(false)

  return (
    <div className="golfer">
    { !editToggle ?
        <>
          <h3>{firstName}</h3>
          <h3>{lastName}</h3>
          <button 
            className="delete-btn" 
            onClick={() => props.deleteGolfer(_id)}>
            Delete
          </button>
          <button
            className="edit-btn"
            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Edit
          </button>         
        </>
    : 
      <>
      <AddGolfer
        firstName={firstName}
        lastName={lastName}
        handicap={handicap}
        username={username}
        cousr
        _id={_id}
        btnText="Submit Edit"
        submit={props.editGolfer}
      />
      <button
        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
        Close
      </button>
      </>
    }
    </div>
  );
}

export default GolferProfile;