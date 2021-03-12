import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {appReducer} from './appReducer';

const rootReducers = combineReducers({
    app: appReducer
})

export type  AppRootStateType = ReturnType<typeof rootReducers>;
const store = createStore(rootReducers, applyMiddleware(thunk))

//@ts-ignore
window.store = store;
export default store;