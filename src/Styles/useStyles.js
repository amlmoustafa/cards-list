import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  appContainer: {
    backgroundColor: "#000000",
  },
  bgImage: {
    backgroundImage: `url("https://interview.blockgemini.dev/img/bg.ec675d54.png")`,
    width: "100%",
    height: "100vh",
    position: "relative",
  },
  bgOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
    transition: ".5s ease",
  },
}));

export default useStyles;
