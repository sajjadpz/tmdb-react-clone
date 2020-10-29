import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchReviews } from "../features/movies/moviesSlice";

const useStyles = makeStyles((theme) => ({
  card: {
    flexGrow: 1,
    maxHeight: 290,
    overflow: "scroll",
  },
}));

export const ReviewCard = ({ movieId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews(movieId));
  }, [movieId, dispatch]);

  const reviews = useSelector((state) => state.movies.reviews);

  if (!reviews) {
    return <section>Loading...</section>;
  }

  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>Tabs</Grid>
      {reviews.slice(0, 1).map((review, index) => (
        <Grid item key={index}>
          <Card className={classes.card} raised>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                  {review.author.charAt(0).toUpperCase()}
                </Avatar>
              }
              title={review.author}
              subheader={`Writteny by ${review.author}`}
            />
            <CardContent>
              <Typography variant="body2" color="textPrimary" component="p">
                {review.content}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
