import { makeStyles } from "@mui/styles";

const CardStyles = makeStyles(() => ({
  centeredLoadAllBtn: {
    display: "flex",
    justifyContent: "center",
  },
  cardContainer: {
    display: "flex",
  },
  postCard: {
    display: "flex",
    justifyContent: "space-between",
  },
  card: {
    width: "90%",
    margin: "60px 0px",
  },
  cardImg: {
    height: "100%",
    position: "relative",
  },
  postTitleTxt: {
    position: "absolute",
    padding: 15,
    top: 370,
    color: "white",
  },
  cardActionArea: {
    height: "100%",
    display: "flex",
  },
}));

export default CardStyles;
