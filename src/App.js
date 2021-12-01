import React from "react";
import CardsContainer from "./Components/CardsContainer";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Burger, Header } from "./Components/Header";

function App() {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <Router>
      <div className="App">
        <div className="hambugermenu" ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Header open={open} setOpen={setOpen} />
        </div>

        <Routes>
          <Route path="/" element={<CardsContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
