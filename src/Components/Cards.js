import React, { Fragment } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Grid, Typography } from "@mui/material";
import CardStyles from "../Styles/CardStyles";

const Cards = ({ cardsList }) => {
  const classes = CardStyles();

  return (
    <Fragment>
      <Grid container className={classes.cardContainer}>
        {cardsList?.map((article) => (
          <Grid className={classes.postCard} item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea className={classes.cardActionArea}>
                <CardMedia
                  className={classes.cardImg}
                  component="img"
                  height="140"
                  image={article.urlToImage}
                  alt="green iguana"
                />
                <div className={classes.postTitleTxt}>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    {article.title}
                  </Typography>
                </div>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default Cards;
