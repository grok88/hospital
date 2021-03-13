import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import {Button, CircularProgress, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import WorklogTable from './WorklogTable/WorklogTable';
import {NavLink, Redirect, useParams} from 'react-router-dom';
import {setWorklogTC, WorklogType} from '../../redux/worklogReducer';

const useStyles = makeStyles({
    titleContainer: {
        marginBottom: '24px'
    },
    btn: {
        marginTop: '24px'
    },
    btnNavlink: {
        textDecoration: 'none'
    },
    progress: {
        display: 'flex',
        justifyContent: 'center'
    }
});

type ParamTypes = {
    id: string
}
const Worklog: React.FC = React.memo(() => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const worklog = useSelector<AppRootStateType, Array<WorklogType>>(state => state.worklog.worklog);
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);

    const {id} = useParams<ParamTypes>();

    useEffect(() => {
        dispatch(setWorklogTC(Number(id)));
    }, []);

    if (isLoading) {
        return <div className={classes.progress}>
            <CircularProgress color="secondary"/>
        </div>
    }
    if (!id) {
        return <Redirect to={'/'}/>
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
                <NavLink to={'/'} className={classes.btnNavlink}>
                    <Button variant="contained" color="primary">
                        На Главную
                    </Button>
                </NavLink>
            </Grid>
        </Grid>
    </>);
});

export default Worklog;