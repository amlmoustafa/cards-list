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
    position: "absolute",
    top: 0,
    margin: 30,
  },
}));

export default useStyles;
