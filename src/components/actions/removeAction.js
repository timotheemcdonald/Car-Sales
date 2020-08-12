export const REMOVE_ACTION = "REMOVE_ACTION"

export const removeAction = (input) => {
    return {
        type: REMOVE_ACTION,
        payload: input
    }
}