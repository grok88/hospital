import React from 'react';
import {Button, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {NavLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    btn: {
        marginTop: '24px'
    },
    btnNavlink: {
        textDecoration: 'none'
    },
});
const PageNotFound:React.FC = () => {
    const classes = useStyles();
    return <Grid item xs={12}>
        <Typography variant="h1" component="h1">
            404 - Page not found
        </Typography>
        <Grid item xs={12} className={classes.btn}>
            <NavLink to={'/'} className={classes.btnNavlink}>
                <Button variant="contained" color="primary">
                    На Главную
                </Button>
            </NavLink>
        </Grid>
    </Grid>
};

export default PageNotFound;