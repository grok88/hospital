import {employeesReducer, EmployeesType, InitialEmployeesStateType, setEmployees} from './employeesReducer';


let startState: InitialEmployeesStateType;

beforeEach(() => {
    startState = {
        employees: []
    }
});

test('Correct data  should be added to startState.employees', () => {
    let data: Array<EmployeesType> = [
        {
            id: 1,
            firstName: 'Леонид',
            lastName: 'Старокадомский',
            middleName: 'Михайлович',
            birthDate: '1875-03-27',
            phone: '+79975669545'
        },
        {
            id: 2,
            firstName: 'Владимир',
            lastName: 'Демихов',
            middleName: 'Петрович',
            birthDate: '1916-06-18',
            phone: '+74951263366'
        }];
    const endState = employeesReducer(startState, setEmployees(data));

    expect(endState.employees.length).toBe(2);
    expect(endState.employees).toEqual(data);
});