import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0.1),
    margin: theme.spacing(0.1),
    textAlign: "center",
    color: theme.palette.text.primary,
    backgroundColor: "#64B5F6",
  },
}));

export const Navbar = () => {
  const classes = useStyles();

  return (
    <nav>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Box>
            <Paper className={classes.paper}>
              <Box component="h2">The Movie Database (TMDB) Clone</Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </nav>
  );
};
