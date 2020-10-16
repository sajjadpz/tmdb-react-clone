import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieById } from "../features/movies/moviesSlice";
import * as Constants from "../common/Constants";
import { CastCardSlider } from "./CastCardSlider";
import { Sidebar } from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

export const MovieDetail = ({ match }) => {
  const classes = useStyles();
  const movieId = match.params.movieId;

  const status = useSelector((state) => state.movies.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieById(movieId));
  }, [movieId, dispatch]);

  const movie = useSelector((state) =>
    state.movies.movies.find((movie) => movie.id == movieId)
  );

  if (!movie) {
    return <section>Loading...</section>;
  }

  return (
    <div>
      {status === "succeeded" ? (
        <Grid
          container
          className={classes.root}
          wrap="wrap"
          justify="center"
          spacing={3}
        >
          <Grid container justify="center">
            <Grid item xs={3}>
              <Box>
                <img
                  style={{ width: 300, height: 400 }}
                  alt={movie.title}
                  src={Constants.TMDB_IMAGE_PATH + movie.poster_path}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Grid container justify="center" direction="column" spacing={2}>
                <Grid item xs={6}>
                  <Box component="h2" id="title">
                    {movie.title} ({new Date(movie.release_date).getFullYear()})
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box id="genres">
                    {movie.genres
                      ? movie.genres.map((genre) => genre.name).join(",")
                      : ""}{" "}
                    {Math.floor(movie.runtime / 60) +
                      "h:" +
                      (movie.runtime % 60) +
                      "m"}
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box id="tagline" color="text.secondary">
                    {movie.tagline}
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box id="overview-h" component="h3" mb={-0.1}>
                    Overview
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box component="span">{movie.overview}</Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            {/* <Paper className={classes.paper}> */}
            <Box component="h2">Top Build Cast</Box>
            {/* </Paper> */}
            <CastCardSlider movieId={movieId} />
          </Grid>
          <Grid item xs={3}>
            <Box component="h2">SideBar</Box>
            <Sidebar movieId={movieId} />
          </Grid>
        </Grid>
      ) : (
        <div> Movie Loading....</div>
      )}
    </div>
  );
};
