import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  appContainer: {
    backgroundColor: "#000000",
  },
  bgImage: {
    backgroundImage: `url("https://interview.blockgemini.dev/img/bg.ec675d54.png")`,
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundSize: "cover",
    backgroundColor: "#000",
  },
  logoImage: {
    height: 50,
    position: "fixed",
    top: 0,
    margin: 30,
  },
  burgerContainer: {
    position: "fixed",
    width: "4rem",
    height: "4rem",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
    boxShadow: "0 0.1rem 0.4rem rgba(var(--colorWhite),.2)",
    right: 32,
    top: 30,
  },
}));

export default useStyles;
