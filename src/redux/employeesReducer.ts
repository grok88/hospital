import {Dispatch} from 'redux';
import {getEmployees, getWorklog} from '../api';
import {refactorData} from '../utils/utils';
import {setIsLoading, SetIsLoading} from './appReducer';

type SetEmployees = ReturnType<typeof setEmployees>;

type Actions = SetEmployees;

export type InitialEmployeesStateType = typeof initialState;

export type EmployeesType = {
    id: number
    firstName: string
    lastName: string
    middleName: string
    birthDate: string
    phone: string
}



const initialState = {
    employees: [] as Array<EmployeesType>
}

export const employeesReducer = (state: InitialEmployeesStateType = initialState, action: Actions): InitialEmployeesStateType => {
    switch (action.type) {
        case 'SET-EMPLOYEES':
            return {
                ...state,
                employees: action.employees
            }
        default:
            return state;
    }
}

//actions

export const setEmployees = (employees: Array<EmployeesType>) => {
    return {
        type: 'SET-EMPLOYEES',
        employees
    } as const;
}

//thunk
export const setEmployeesTC = () => async (dispatch: Dispatch<DispatchActions>) => {

    try {
        dispatch(setIsLoading(true));
        let res = await getEmployees();
        dispatch(setEmployees(refactorData(res)));
    } catch (e) {
        throw new Error(e.message)
    } finally {
        dispatch(setIsLoading(false));
    }
}

type DispatchActions = Actions & SetIsLoading;