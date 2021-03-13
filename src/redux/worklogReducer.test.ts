import {employeesReducer, EmployeesType, InitialEmployeesStateType, setEmployees} from './employeesReducer';
import {InitialWorklogStateType, setWorklog, worklogReducer, WorklogType} from './worklogReducer';

let startState: InitialWorklogStateType;

beforeEach(() => {
    startState = {
        worklog: []
    }
});

test('Correct data  should be added to startState.worklog', () => {
    let data: Array<WorklogType> = [
        {
            id: 1,
            employee_id: 1,
            from: '2021-03-04 04:44:44',
            to: '2021-03-04 06:46:09'
        },
        {
            id: 2,
            employee_id: 1,
            from: '2021-03-04 06:55:01',
            to: '2021-03-04 08:13:10'
        } ];
    const endState = worklogReducer(startState, setWorklog(data));

    expect(endState.worklog.length).toBe(2);
    expect(endState.worklog).toEqual(data);
});