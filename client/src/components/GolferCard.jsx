import React, { useContext } from "react";
// import { InfoContext } from "./InfoContext";

function GolferCard(props) {
  // console.log(props)
  // const { golfers, getGolfers, getOneGolfer } = useContext(InfoContext);

  const { firstName, lastName, handicap } = props;

  return (
    <div className="golfer-card">
      <h3>{firstName}</h3>
      <h3>{lastName}</h3>
      <h4>Handicap: {handicap}</h4>
      {/* <img src="" alt="pic" className="golfer-card-image" /> */}
      <button className="select-btn">Select</button>
    </div>
  );
}

export default GolferCard;
