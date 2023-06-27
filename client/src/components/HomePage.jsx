import React from "react";
import AddGolferForm from "./AddGolferForm";
import GolferList from "./GolferList"

function HomePage() {

  return (
    <div className="home-page">
      <AddGolferForm />
      <GolferList />
    </div>
  );
}

export default HomePage;
