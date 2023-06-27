import React, { useState, createContext } from "react";
import axios from "axios";

const InfoContext = createContext();

function InfoContextProvider(props) {
  const [golfers, setGolfers] = useState([]);

  // GET
  function getGolfers() {
    axios
      .get("/api/golfer")
      // .then((res) => console.log(res.data))
      .then((res) => setGolfers(res.data))
      .catch((err) => console.log(err.response.data.errMsg));
  }

  // GET one golfer
  function getOneGolfer(golferId) {
    axios
      .get(`/api/golfer/${golferId}`)
      // .then(res => console.log(res))
      .then((res) => {
        setGolfers((prevGolfers) =>
          prevGolfers.filter((golfers) => golfers._id !== golferId)
        );
      })
      .catch((err) => console.log(err));
  }

  // // POST a golfer
  function addGolfer(newGolfer) {
    axios
      .post("/api/golfer", newGolfer)
      // .then((res) => console.log(res))
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
        setGolfers((prevGolfer) =>
          prevGolfer.map((golfer) =>
            golfer._id !== golferId ? golfer : res.data
          )
        );
      })
      .catch((err) => console.log(err));
  }

  return (
    <InfoContext.Provider
      value={{
        golfers,
        getGolfers,
        getOneGolfer,
        deleteGolfer,
        editGolfer,
        addGolfer,
      }}
    >
      {props.children}
    </InfoContext.Provider>
  );
}

export { InfoContextProvider, InfoContext };
