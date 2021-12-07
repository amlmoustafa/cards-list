import { makeStyles } from "@mui/styles";

const CardStyles = makeStyles(() => ({
  centeredLoadAllBtn: {
    display: "flex",
    justifyContent: "center",
  },
  cardContainer: {
    display: "flex",
    paddingTop: 50,
  },
  postCard: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    width: "90%",
    margin: "60px 0px",
  },
  cardImg: {
    height: "100%",
    position: "relative",
    "&:hover": {
      transform: "translate(0px, 0px)",
      width: 300,
    },
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
  loadMoreButton: {
    margin: "40px 0px !important",
    backgroundColor: "black !important",
    border: "1px solid #fff !important",
    padding: "20px !important",
    width: 280,
    fontSize: "20px !important",
    fontWeight: "bold !important",
  },
}));

export default CardStyles;
