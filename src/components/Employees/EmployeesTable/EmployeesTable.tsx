import React from 'react';
import {EmployeesType} from '../../../redux/appReducer';
import { makeStyles,Theme, createStyles,withStyles  } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {NavLink} from 'react-router-dom';


const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const useStyles = makeStyles({
    table: {
        // minWidth: 650,
    },
});

type EmployeesTablePropsType = {
    employees: Array<EmployeesType>
    onClickHandler:(id:number) => void
}

const EmployeesTable: React.FC<EmployeesTablePropsType> = ({employees,onClickHandler}) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="employees table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell align="right">ФИО</StyledTableCell>
                        <StyledTableCell align="right">Дата рождения</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map((employee) => (
                        <TableRow key={employee.id}>
                            <TableCell component="th" scope="row">
                                {employee.id}
                            </TableCell>
                            <TableCell align="right" onClick={() =>onClickHandler(employee.id)}><NavLink to={'/worklog/${employee.id}'}>{employee.lastName} {employee.firstName} {employee.middleName}</NavLink></TableCell>
                            <TableCell align="right">{employee.birthDate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EmployeesTable;