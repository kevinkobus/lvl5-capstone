import React, { useState } from "react";
import AddGolfer from "./AddGolferForm";
import InfoContext, { InfoContext } from "./InfoContext"

function GolferProfile(props) {
  // console.log(props)

const {  } = useContext(InfoContext)

  const { firstName, lastName, handicap, username, _id } = props;
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
        coursesPlayed={coursesPlayed}
        _id={_id}
        key={_id}
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