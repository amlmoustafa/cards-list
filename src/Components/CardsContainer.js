import React, { Fragment, useMemo, useState } from "react";
import { Button, Grid } from "@mui/material";
import Cards from "./Cards";
import { cardsJson } from "../CardsData/cardsJson";
import Container from "@mui/material/Container";
import CardStyles from "../Styles/CardStyles";

const CardsContainer = () => {
  const classes = CardStyles();
  const [displayedCardCount, setDisplayedCardCount] = useState(9);

  const displayedArticles = useMemo(
    () => cardsJson.articles.slice(0, displayedCardCount),
    [displayedCardCount]
  );
  return (
    <Fragment>
      <Container>
        <Cards cardsList={displayedArticles} />
        <Grid container className={classes.centeredLoadAllBtn}>
          <Button
            onClick={() => {
              setDisplayedCardCount(
                (prevDisplayedCardCount) => prevDisplayedCardCount + 9
              );
            }}
            id="submitButton"
            variant="contained"
            className={classes.loadMoreButton}
          >
            Load More...
          </Button>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default CardsContainer;
