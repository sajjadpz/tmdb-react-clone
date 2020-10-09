import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { selectMovieById } from "../features/movies/moviesSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export const MovieDetail = ({ match }) => {
  const classes = useStyles();
  const movieId = match.params.movieId;
  console.log("movieID", movieId);

//   const movie = useSelector((state) =>
//     state.movies.find((movie) => movie.id === movieId));

    const movie = useSelector((state) => selectMovieById(state, movieId))
    console.log("movie", movie);
  return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <Box>
            <Paper className={classes.paper}>
              <Box component="h2">Poster Area</Box>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Box component="h2">Celebrity Slider</Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Box component="h2">SideBar</Box>
          </Paper>
        </Grid>
      </Grid>
  );
};
