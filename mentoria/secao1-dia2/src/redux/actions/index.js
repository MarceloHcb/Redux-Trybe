// ACTIONS TYPE
export const SAVE_TASK = 'SAVE_TASK';

// ACTIONS CREATOR
export const saveTask = (payload) => ({
    type: SAVE_TASK,
    payload,
})
