import {Dispatch} from 'redux';
import {getWorklog} from '../api';
import {setIsLoading, SetIsLoading} from './appReducer';
import {refactor} from '../utils/utils';

type SetWorklog = ReturnType<typeof setWorklog>;
type IntersectionWorklog = ReturnType<typeof intersectionWorklog>;

type Actions = SetWorklog | IntersectionWorklog;

export type InitialWorklogStateType = typeof initialState;

export type WorklogType = {
    id: number
    employee_id: number
    from: string
    to: string
}

const initialState = {
    worklog: [] as Array<WorklogType>,
    intersectionWorklog: [] as Array<WorklogType>,
}

export const worklogReducer = (state: InitialWorklogStateType = initialState, action: Actions): InitialWorklogStateType => {
    switch (action.type) {
        case 'SET-WORKLOG':
            return {
                ...state,
                worklog: action.worklog
            }
        case 'SET-INTERSECTION-WORKLOG':
            return {
                ...state,
                intersectionWorklog: action.worklog
            }
        default:
            return state;
    }
}

//actions
export const setWorklog = (worklog: Array<WorklogType>) => {
    return {
        type: 'SET-WORKLOG',
        worklog
    } as const;
}
export const intersectionWorklog = (worklog: Array<WorklogType>) => {
    return {
        type: 'SET-INTERSECTION-WORKLOG',
        worklog
    } as const;
}

//thunks
export const setWorklogTC = (id: number) => async (dispatch: Dispatch<DispatchActions>) => {
    try {
        dispatch(setIsLoading(true));
        let res: Array<WorklogType> = await getWorklog();
        res = res.filter(r => r.employee_id === id);
        dispatch(setWorklog(res));
    } catch (e) {
        throw new Error(e.message)
    } finally {
        dispatch(setIsLoading(false));
    }
}
export const setIntersectionWorklogTC = () => async (dispatch: Dispatch<DispatchActions>) => {
    try {
        dispatch(setIsLoading(true));
        let res: Array<WorklogType> = await getWorklog();
        let tests = refactor(res);
        dispatch(intersectionWorklog(tests));
    } catch (e) {
        throw new Error(e.message);
    } finally {
        dispatch(setIsLoading(false));
    }
}

type DispatchActions = Actions | SetIsLoading;
