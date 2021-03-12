import React from 'react';
import {EmployeesType, setWorklogTC} from '../../redux/appReducer';
import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EmployeesTable from './EmployeesTable/EmployeesTable';
import {useDispatch} from 'react-redux';


const useStyles = makeStyles({
    titleContainer: {
        marginBottom: '24px'
    }
});

type EmployeesPropsType = {
    employees: Array<EmployeesType>
}

const Employees: React.FC<EmployeesPropsType> = React.memo(({employees}) => {
    const classes = useStyles();
    const dispatch = useDispatch();


    const onClickHandler = (id:number) =>{
        dispatch(setWorklogTC(id))
    }

    return (<>
            <Grid item xs={12} className={classes.titleContainer}>
                <Typography variant="h3" component="h1">
                    Employees
                </Typography>
            </Grid>
            <Grid item xs={12} >
                <EmployeesTable employees={employees} onClickHandler={onClickHandler}/>
            </Grid>
        </>
    );
});

export default Employees;