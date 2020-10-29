import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
import * as Constants from "../common/Constants";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, selectAllMovies } from "../features/movies/moviesSlice";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function ItemSlider(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const data = useSelector(selectAllMovies);
  const movieStatus = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);

  useEffect(() => {
    dispatch(fetchMovies(props.val));
  }, [props, dispatch]);

  if (!data) {
    return <section>Something went wrong, please try again later...</section>;
  }
  return (
    <div className={classes.root}>
      {error ? (
        <div>Something went wrong please try again later...</div>
      ) : (
        <Grid container wrap="wrap" justify="center" spacing={2}>
          {(movieStatus === "loading" ? Array.from(new Array(26)) : data).map(
            (item, index) => (
              <Grid item key={index}>
                <Box key={index} width={300} marginRight={0.5} my={5}>
                  {item ? (
                    <Link to={`/movies/${item.id}`}>
                      <img
                        style={{ width: 300, height: 400 }}
                        alt={item.title}
                        src={Constants.TMDB_IMAGE_PATH + item.poster_path}
                      />
                    </Link>
                  ) : (
                    <Skeleton variant="rect" width={300} height={400} />
                  )}
                  {item ? (
                    <Box pr={1}>
                      <Box pr={2}>
                        <Typography gutterBottom variant="body2">
                          {item.title} | {item.original_name}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="caption" color="textSecondary">
                          {`${item.vote_average} • ${
                            item.release_date
                              ? item.release_date
                              : item.first_air_date
                          }`}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="caption" color="textSecondary">
                          {item.overview}
                        </Typography>
                      </Box>
                    </Box>
                  ) : (
                    <Box pt={0.5}>
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Box>
                  )}
                </Box>
              </Grid>
            )
          )}
        </Grid>
      )}
    </div>
  );
}
