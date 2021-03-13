import React from 'react';
import {WorklogType} from '../../../redux/appReducer';
import {createStyles, makeStyles, Theme, withStyles} from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';

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

type WorklogTablePropsType = {
    worklog: Array<WorklogType>
}

const WorklogTable: React.FC<WorklogTablePropsType> = React.memo(({worklog}) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="worklog table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Employed ID</StyledTableCell>
                        <StyledTableCell align="right">Начало работы</StyledTableCell>
                        <StyledTableCell align="right">Конец работы</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {worklog.map((w) => (
                        <TableRow key={w.id}>
                            <TableCell component="th" scope="row">
                                {w.employee_id}
                            </TableCell>
                            <TableCell align="right">{w.from}</TableCell>
                            <TableCell align="right">{w.to}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
});

export default WorklogTable;