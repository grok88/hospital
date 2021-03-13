import {InitialWorklogStateType, intersectionWorklog, setWorklog, worklogReducer, WorklogType} from './worklogReducer';

let startState: InitialWorklogStateType;

beforeEach(() => {
    startState = {
        worklog: [],
        intersectionWorklog: []
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
        }];
    const endState = worklogReducer(startState, setWorklog(data));

    expect(endState.worklog.length).toBe(2);
    expect(endState.worklog).toEqual(data);
    expect(endState.intersectionWorklog).toEqual([]);
});
test('Correct data  should be added to startState.intersectionWorklog', () => {
    let data: Array<WorklogType> = [
        {id: 2, employee_id: 1, from: '2021-03-04 06:55:01', to: '2021-03-04 08:13:10'},
        {id: 3, employee_id: 2, from: '2021-03-04 06:55:01', to: '2021-03-04 08:13:10'},

    ]
    const endState = worklogReducer(startState, intersectionWorklog(data));

    expect(endState.intersectionWorklog.length).toBe(2);
    expect(endState.intersectionWorklog).toEqual(data);
    expect(endState.worklog).toEqual([]);
});