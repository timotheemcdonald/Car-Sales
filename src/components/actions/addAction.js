export const ADD_ACTION = "ADD_ACTION"

export const addAction = (input) => {
    console.log(input, 'input in addaction')
    return {
        type: ADD_ACTION,
        payload: input
    }
}