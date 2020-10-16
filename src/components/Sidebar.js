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
  console.log("keywords", keywords);

  if (!keywords) {
    return <section>Loading...</section>;
  }

  return (
    <Grid container>
      <Grid item>
        <Box component="h3">keywords</Box>
      </Grid>
      <Grid item className={classes.root}>
        {keywords.map((kw, index) => (
          <Chip key={index} label={kw.name} />
        ))}
      </Grid>
    </Grid>
  );
};
