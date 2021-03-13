import {appReducer, InitialAppStateType, setIsLoading} from './appReducer';

let startState: InitialAppStateType;

beforeEach(() => {
    startState = {
        isLoading: false
    }
});

test('isLoading should be changed to correct value', () => {

    const endState = appReducer(startState, setIsLoading(true));
    expect(endState.isLoading).toBe(true);
});