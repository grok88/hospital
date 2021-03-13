import React from 'react';
import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EmployeesTable from './EmployeesTable/EmployeesTable';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {EmployeesType} from '../../redux/employeesReducer';


const useStyles = makeStyles({
    titleContainer: {
        marginBottom: '24px'
    }
});

type EmployeesPropsType = {}

const Employees: React.FC<EmployeesPropsType> = React.memo(() => {
    const classes = useStyles();
    const employees = useSelector<AppRootStateType, Array<EmployeesType>>(state => state.employees.employees);

    return (<>
            <Grid item xs={12} className={classes.titleContainer}>
                <Typography variant="h3" component="h1">
                    Employees
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <EmployeesTable employees={employees}/>
            </Grid>
        </>
    );
});

export default Employees;