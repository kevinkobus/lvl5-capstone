import React, { useContext, useEffect } from "react";
import { InfoContext } from "./InfoContext";
import GolferCard from "./GolferCard";
import axios from "axios"

function GolferList(props) {

  const { golfers, getGolfers } = useContext(InfoContext);

  

  //   function to handle search by username
  function handleSearch(e) {
    if (e.target.value === "") {
      getGolfers();
    } else {
      axios
        .get(`/api/golfer/search/username?username=${e.target.value}`)
        .then((res) => setGolfers(res.data))
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    getGolfers();
  }, []);
  
  return (
    <>
      <div className="golfer-search">
        <h4 className="search-label">Search for your profile</h4>
        <input placeholder="Enter Username" className="search-input"/>
      </div>
      <div className="golfer-list">
        {golfers.map((golfers) => (
          <GolferCard {...golfers} key={golfers._id} />
        ))}
      </div>
    </>
  );
}

export default GolferList;

//   mapping through golfers and returning the names to display in the dropdown
// const golferList = golfers.map((golfers) => {
//   return (
//     <option value={golfers.firstName} key={golfers._id}>
//       {golfers.firstName} {golfers.lastName}
//     </option>
//   );
// });

//   function to handle the changes in the dropdown of golfer names in the DB
// function handleFilter(e) {
//   if (e.target.value === "reset") {
//     getGolfers();
//   } else {
//     getOneGolfer();
//   }
// }

// <div className="golfer-dropdown">
//       <h4>Filter by Name</h4>
//       <select onChange={handleFilter} className="filter-golfer">
//         <option value="reset">- All Golfers -</option>
//         {golferList}
//       </select>
//     </div>
