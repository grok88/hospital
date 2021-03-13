import {EmployeesType} from '../redux/appReducer';

export function refactorData(employees: Array<EmployeesType>) {
    return employees.map(e => {
        let birthDate = e.birthDate.split('-').reverse().join('.');
        return {...e, birthDate}
    }).sort((a, b) => a.lastName > b.lastName ? 1 : -1);
}