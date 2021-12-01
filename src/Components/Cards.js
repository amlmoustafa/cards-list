import React, { Fragment } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import CardStyles from "../Styles/CardStyles";

const Cards = ({ cardsList }) => {
  const classes = CardStyles();

  return (
    <Fragment>
      <Grid container>
        {cardsList?.map((article) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={article.urlToImage}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="body2" component="div">
                    {article.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default Cards;
