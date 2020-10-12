import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 170,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  paper: {
    padding: theme.spacing(0.1),
    margin: theme.spacing(0.1),
    textAlign: "center",
    color: theme.palette.text.primary,
    backgroundColor: "#64B5F6",
  },
}));

const data = [1, 2, 3, 4, 5, 6, 7];

export const CastCardSlider = () => {
  const classes = useStyles();

  return (
    <Box style={{ flexGrow: 1, maxWidth: '45vw', overflow:'scroll'}}>
        <Grid container justify="left" style={{minWidth: '70vw'}}>
        {data.map((item, index) => (
          <Grid item key={index}>
            <Card className={classes.root} variant="outlined">
              <CardMedia>
                <img src="https://image.tmdb.org/t/p/w200/qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg" />
              </CardMedia>
              <CardContent>
                <Typography color="textPrimary" component="h3">
                  Jessica Chastian.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
    </Box>
  );
};
