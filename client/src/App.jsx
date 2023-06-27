import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { StyleContextProvider } from "./components/StyleContext"
import { InfoContextProvider } from "./components/InfoContext";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
// import GolferProfile from "./components/GolferProfile";
// import CourseProfile from "./components/CourseProfile"
import Footer from "./components/Footer";
// import AddGolferForm from "./components/AddGolferForm";
// import GolferList from "./components/GolferList";
// import GolferCard from "./components/GolferCard"

function App() {
  return (
    <div className="App">
      <InfoContextProvider>
        <Navbar />
        <HomePage />
        <Footer />
      </InfoContextProvider>
    </div>
  );
}

export default App;

{
  /* submit={addGolfer}
 btnText="Add Golfer" */
}

{
  /* <Router>
        <InfoContextProvider>
          <Navbar>
            <Link to="/home" className="link">
              Home
            </Link>
            <Link to="/golferProfile" className="link">
              Golfer Profile
            </Link>
            <Link to="/courseProfiles" className="link">
              Course Profiles
            </Link>
          </Navbar>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/golferProfile" element={<GolferProfile />} />
            <Route path="/courseProfile" element={<CourseProfile />} />
          </Routes>
          <Footer />
        </InfoContextProvider>
      </Router> */
}
