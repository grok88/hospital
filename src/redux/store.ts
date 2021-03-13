import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {appReducer} from './appReducer';
import {employeesReducer} from './employeesReducer';
import {worklogReducer} from './worklogReducer';

const rootReducers = combineReducers({
    app: appReducer,
    employees: employeesReducer,
    worklog: worklogReducer
})

export type  AppRootStateType = ReturnType<typeof rootReducers>;
export const store = createStore(rootReducers, applyMiddleware(thunk))

