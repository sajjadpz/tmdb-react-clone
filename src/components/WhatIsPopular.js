//Parent component of What's popular section on the Landing page.
import React, { useState } from 'react';
import CenteredTabs from './CenteredTabs';
import MovieSlider from './MovieSlider';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(0.1),
        margin: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
        backgroundColor: '#64B5F6',
    },
}));

export default function WhatIsPopular() {
    const classes = useStyles();
    const [tabVal, setTablVal] = useState('/movie/popular');

    const getPropsfromChildCallback = (childProps) => {
        setTablVal(childProps);
    }

    return (
        <Grid container justify="center">
            <Grid item xs={12}>
                <Box>
                    <Paper className={classes.paper}>
                        <Box component="h2">
                            The Movie Database (TMDB) Clone
                        </Box>
                    </Paper>
                </Box>
            </Grid>
            <Grid item xs={5}>
                <CenteredTabs callBackFromParent={getPropsfromChildCallback} />
            </Grid>
            <Grid item xs={12}>
                <MovieSlider val={tabVal} />
            </Grid>
        </Grid>
    );
};