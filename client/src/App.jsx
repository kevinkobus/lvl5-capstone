import React, { useState, useEffect } from "react";
import axios from "axios";
// import AddCourse from "./components/AddCourse"
import AddGolfer from "./components/AddGolfer"

function App() {
  const [golfers, setGolfers] = useState([]);

  // GET
  function getGolfers() {
    axios
      .get("/api/golfer")
      // .then((res) => console.log(res.data))
      .then((res) => setGolfers(res.data))
      .catch((err) => console.log(err.response.data.errMsg));
  }
  // POST
  function addGolfer(newGolfer) {
    axios
      .post("/api/golfer", newGolfer)
      // .then(res => console.log(res))
      .then((res) => {
        setGolfers((prevGolfers) => [...prevGolfers, res.data]);
      })
      .catch((err) => console.log(err));
  }

  function deleteGolfer(golferId) {
    axios
      .delete(`/api/golfer/${golferId}`)
      // .then(res => console.log(res))
      .then((res) => {
        setGolfers((prevGolfers) =>
          prevGolfers.filter((golfer) => golfer._id !== golferId)
        );
      })
      .catch((err) => console.log(err));
  }

  function editGolfer(updates, golferId) {
    axios
      .put(`/api/golfer/${golferId}`, updates)
      // .then(res => console.log(res))
      .then((res) => {
        setGolfer((prevGolfer) =>
          prevGolfer.map((golfer) => (golfer._id !== golferId ? golfer : res.data))
        );
      })
      .catch((err) => console.log(err));
  }

  function handleFilter(e) {
    if(e.target.value === "reset"){
      getGolfers()
    } else {
      axios.get(`/api/golfer/search/name?name=${e.target.value}`)
      .then(res => setGolfers(res.data))
      .catch(err => console.log(err))
    }
  }

//   mapping through golfers and returning the years to display in the dropdown
const golferList = golfers.map((golfer) => {
  return (
    <option value={golfer} key={id}>
      {golfer}
    </option>
  );
});

  useEffect(() => {
    getGolfers();
  }, []);

  return (
    <div className="golfer-container">
      <AddGolfer 
      submit={addGolfer} 
      btnText="Add Golfer" 
      />

      <h4>Filter by Name</h4>
      <select onChange={handleFilter} className="filter-golfer">
        <option value="reset">- All Golfers -</option>
        {golferList}
      </select>

      {golfers.map((golfer) => (
        <GolferProfile
          {...golfer}
          key={golfer.name}
          deleteGolfer={deleteGolfer}
          editGolfer={editGolfer}
        />
      ))}
    </div>
  );
}

export default App;
