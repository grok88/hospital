import {Dispatch} from 'redux';
import {getWorklog} from '../api';
import {setIsLoading, SetIsLoading} from './appReducer';

type SetWorklog = ReturnType<typeof setWorklog>;

type Actions = SetWorklog;

export type InitialWorklogStateType = typeof initialState;

export type WorklogType = {
    id: number
    employee_id: number
    from: string
    to: string
}

const initialState = {
    worklog: [] as Array<WorklogType>
}

export const worklogReducer = (state: InitialWorklogStateType = initialState, action: Actions): InitialWorklogStateType => {
    switch (action.type) {

        case 'SET-WORKLOG':
            return {
                ...state,
                worklog: action.worklog
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
//thunks
export const setWorklogTC = (id: number) => async (dispatch: Dispatch<DispatchActions>) => {
    dispatch(setIsLoading(true));
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

type DispatchActions = Actions | SetIsLoading;
