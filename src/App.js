import React from "react";
import CardsContainer from "./Components/CardsContainer";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardsContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
