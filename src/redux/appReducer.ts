export type SetIsLoading = ReturnType<typeof setIsLoading>;

type Actions = SetIsLoading;

export type InitialAppStateType = typeof initialState;

const initialState = {
    isLoading: false
}

export const appReducer = (state: InitialAppStateType = initialState, action: Actions): InitialAppStateType => {
    switch (action.type) {
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
