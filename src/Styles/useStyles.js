import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  appContainer: {},
  bgImage: {
    backgroundImage: `url("http://www.javascriptkit.com/dhtmltutors/cursor-hand.gif")`,
    width: "100%",
    position: "relative",
  },
  bgOverlay: {
    backgroundColor: "#34343487 ",
    height: "100vh",
    position: "absolute",
    top: 80,
    right: 15,
  },
}));

export default useStyles;
