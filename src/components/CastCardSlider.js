import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieCreditsById } from "../features/movies/moviesSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 138,
  },
  media: {
    height: 0,
  },
  paper: {
    padding: theme.spacing(0.1),
    margin: theme.spacing(0.1),
    textAlign: "center",
    color: theme.palette.text.primary,
    backgroundColor: "#64B5F6",
  },
}));

export const CastCardSlider = ({movieId}) => {
  const classes = useStyles();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovieCreditsById(movieId))
  }, [movieId, dispatch])

  const movieCredits = useSelector((state) => state.movies.movieCredits.cast)
  if (!movieCredits) {
    return <section>Loading...</section>;
  }

  return (
    <Box style={{ flexGrow: 1, maxWidth: '49vw', overflow:'scroll'}}>
        <Grid container justify="flex-start" style={{minWidth: '64vw'}} spacing={1}>
        {Array.from(movieCredits.slice(0, 7)).map((cast, index) => (
          <Grid item key={index}>
            <Card className={classes.root} variant="outlined">
              <CardMedia>
                <img src={`https://image.tmdb.org/t/p/w138_and_h175_face${cast.profile_path}`} />
              </CardMedia>
              <CardContent>
                <Typography color="textPrimary" component="p">
                  {cast.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item>
          View more
        </Grid>
    </Grid>
    </Box>
  );
};
