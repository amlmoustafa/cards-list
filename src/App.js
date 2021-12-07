import React from "react";
import CardsContainer from "./Components/CardsContainer";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Burger, Header } from "./Components/Header";
import useStyles from "./Styles/useStyles";
import { createTheme, ThemeProvider } from "@mui/material";
import logoImage from "./Images/logo.png";

function App() {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  const classes = useStyles();

  const theme = createTheme({
    typography: {
      fontFamily: "Pompiere",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.appContainer}>
          <div className={classes.bgImage}>
            <CardsContainer />
          </div>
          <div className={classes.bgOverlay}>
            <div ref={node}>
              <Burger open={open} setOpen={setOpen} />
              <Header open={open} setOpen={setOpen} />
              <img
                className={classes.logoImage}
                src={logoImage}
                alt="logo"
              />
            </div>
          </div>
          <Switch>
            <Route path="/" element={<CardsContainer />} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
