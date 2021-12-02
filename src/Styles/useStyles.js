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
    backgroundSize: "cover",
    backgroundColor: "#000",
  },
}));

export default useStyles;
