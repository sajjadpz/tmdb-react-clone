import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import * as Constants from '../common/Constants';
import { selectMovieById } from '../features/movies/moviesSlice';
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: 1000,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


export default function ModalView(props) {
    // Modal CSS
    const [modalStyle] = React.useState(getModalStyle);
    const classes = useStyles();

    const movieId = props.movieId;
    
    const movies = useSelector((state) => selectMovieById(state, movieId))

    function rand() {
        return Math.round(Math.random() * 20) - 10;
    }

    function getModalStyle() {
        const top = 50 + rand();
        const left = 50 + rand();

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    const body = (
        <div style={modalStyle} className={classes.modal}>
            {
                movies.map(movie => (
                <Grid container spacing={2} key={movie.id}>
                    <Grid item>
                        <Box>
                            <img style={{ width: 500, height: 700 }} alt={movie.title} src={Constants.TMDB_IMAGE_PATH + movie.poster_path} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={3}>
                            <Grid item xs>
                                <Typography variant="h5" gutterBottom>
                                    {movie.title || movie.original_name}
                                </Typography>
                                <Typography gutterBottom variant="subtitle1">
                                    {movie.overview}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>))
            }

        </div>
    );
    return (
        <Modal
            open={props.modalOpen}
            onClose={props.modalClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
    );
};