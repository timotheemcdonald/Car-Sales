export const ADD_ACTION = "ADD_ACTION"

export const addAction = (input) => {
    return {
        type: ADD_ACTION,
        payload: input
    }
}