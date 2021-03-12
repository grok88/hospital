import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Button, CircularProgress, LinearProgress, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {WorklogType} from '../../redux/appReducer';
import WorklogTable from './WorklogTable/WorklogTable';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles({
    titleContainer: {
        marginBottom: '24px'
    },
    btn: {
        marginTop: '24px'
    },
    progress:{
        display:'flex',
        justifyContent:'center'
    }
});

const Worklog: React.FC = React.memo(() => {
    const classes = useStyles();
    const worklog = useSelector<AppRootStateType, Array<WorklogType>>(state => state.app.worklog);
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);




    if (isLoading) {
        return  <div className={classes.progress}>
            <CircularProgress color="secondary" />
        </div>
    }
    return (<>
        <Grid item xs={12}>
            <Grid item xs={12} className={classes.titleContainer}>
                <Typography variant="h3" component="h1">
                    Worklog
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <WorklogTable worklog={worklog}/>
            </Grid>
            <Grid item xs={12} className={classes.btn}>
                <NavLink to={'/'}>
                    <Button variant="contained" color="primary">
                        На Главную
                    </Button>
                </NavLink>
            </Grid>
        </Grid>
    </>);
});

export default Worklog;