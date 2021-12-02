import React from "react";
import CardsContainer from "./Components/CardsContainer";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Burger, Header } from "./Components/Header";
import useStyles from "./Styles/useStyles";

function App() {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.appContainer}>
        <div className={classes.bgImage}></div>
        <div className={classes.bgOverlay}></div>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Header open={open} setOpen={setOpen} />
        </div>
        <Switch>
          <Route path="/" element={<CardsContainer />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
