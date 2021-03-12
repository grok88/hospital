import {Dispatch} from 'redux';
import {getEmployees, getWorklog} from '../api';

type SetEmployees = ReturnType<typeof setEmployees>;
type SetWorklog = ReturnType<typeof setWorklog>;
type SetIsLoading = ReturnType<typeof setIsLoading>;

type Actions = SetEmployees | SetWorklog | SetIsLoading;

export type InitialAppStateType = typeof initialState;

export type EmployeesType = {
    id: number
    firstName: string
    lastName: string
    middleName: string
    birthDate: string
    phone: string
}

export type WorklogType = {
    id: number
    employee_id: number
    from: string
    to: string
}

const initialState = {
    employees: [] as Array<EmployeesType>,
    worklog: [] as Array<WorklogType>,
    isLoading: false
}

export const appReducer = (state: InitialAppStateType = initialState, action: Actions): InitialAppStateType => {
    switch (action.type) {
        case 'SET-EMPLOYEES':
            return {
                ...state,
                employees: action.employees
            }
        case 'SET-WORKLOG':
            return {
                ...state,
                worklog: action.worklog
            }
        case 'SET-IS-LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }
}

//actions
export const setIsLoading = (isLoading: boolean) => {
    return {
        type: 'SET-IS-LOADING',
        isLoading
    } as const;
}
export const setEmployees = (employees: Array<EmployeesType>) => {
    return {
        type: 'SET-EMPLOYEES',
        employees
    } as const;
}

export const setWorklog = (worklog: Array<WorklogType>) => {
    return {
        type: 'SET-WORKLOG',
        worklog
    } as const;
}

function refactorData(employees: Array<EmployeesType>) {
    return employees.map(e => {
        let birthDate = e.birthDate.split('-').reverse().join('.');
        return {...e, birthDate}
    }).sort((a, b) => a.lastName > b.lastName ? 1 : -1);
}

//thunk
export const setEmployeesTC = () => async (dispatch: Dispatch<Actions>) => {

    try {
        dispatch(setIsLoading(true));
        let res = await getEmployees();
        res = refactorData(res);
        dispatch(setEmployees(res));
    } catch (e) {
        // alert(e.message);
        throw new Error(e.message)
    } finally {
        dispatch(setIsLoading(false));
    }
}
export const setWorklogTC = (id: number) => async (dispatch: Dispatch<Actions>) => {
    dispatch(setIsLoading(true));
    try {
        dispatch(setIsLoading(true));
        let res: Array<WorklogType> = await getWorklog();
        res = res.filter(r => r.employee_id === id);
        dispatch(setWorklog(res));
        dispatch(setIsLoading(false));
    } catch (e) {
        alert(e.message);
        dispatch(setIsLoading(false));
    }
}

