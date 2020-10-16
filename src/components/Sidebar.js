import { Chip, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieKeywords } from "../features/movies/moviesSlice";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-left",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.2),
    },
  },
}));

export const Sidebar = ({ movieId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchMovieKeywords(movieId));
  }, [movieId, dispatch]);

  const keywords = useSelector((state) => state.movies.keywordsList.keywords);
  const movie = useSelector((state) =>
    state.movies.movies.find((movie) => movie.id == movieId)
  );

  if (!keywords) {
    return <section>Loading...</section>;
  }

  return (
    <Grid container direction="column">
      <Grid item>
        <Box component="h3">Status</Box>
        <Box component="span">{movie.status || " - "}</Box>
      </Grid>
      <Grid item>
        <Box component="h3">Original Language</Box>
        <Box component="span">{movie.original_language || " - "}</Box>
      </Grid>
      <Grid item>
        <Box component="h3">Budget</Box>
        <Box component="span">{"$" + movie.budget || " - "}</Box>
      </Grid>
      <Grid item>
        <Box component="h3">Reveneu</Box>
        <Box component="span">{movie.reveneu || " - "}</Box>
      </Grid>
      <Grid item>
        <Box component="h3">keywords</Box>
      </Grid>
      <Grid item className={classes.root}>
        {keywords.map((kw, index) => (
          <Chip variant="default" key={index} label={kw.name} />
        ))}
      </Grid>
    </Grid>
  );
};
