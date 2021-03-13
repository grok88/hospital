import {EmployeesType} from '../redux/employeesReducer';
import {WorklogType} from '../redux/worklogReducer';

export function refactorData(employees: Array<EmployeesType>) {
    return employees.map(e => {
        let birthDate = e.birthDate.split('-').reverse().join('.');
        return {...e, birthDate}
    }).sort((a, b) => a.lastName > b.lastName ? 1 : -1);
}

export type NewArr = {
    time: string
    start: boolean
    employee_id: number
}

export const refactor = (data: Array<WorklogType>) => {
    let redWorklog = [] as Array<WorklogType>;

    let arr: Array<NewArr> = []
    let resCopy = data.map(d => ({...d}));
    resCopy.forEach(item => {
        arr.push({
            time: item.from,
            start: true,
            employee_id: item.employee_id
        })
        arr.push({
            time: item.to,
            start: false,
            employee_id: item.employee_id
        })
    })
    arr = arr.sort((a, b) => a.time > b.time ? 1 : -1);

    let sum: number = 0;
    arr.forEach(item => {
        if (item.start === true) {
            sum += 1;
        } else {
            sum -= 1;
            if (sum <= 2) {
                let test = data.find(elem => elem.employee_id === item.employee_id && elem.to === item.time);
                if (test) {
                    redWorklog.push(test)
                }
            }
        }
    });

    return redWorklog;
}