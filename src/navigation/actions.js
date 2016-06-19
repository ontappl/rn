import * as actionTypes from './actionTypes';


export const push = (state) => {
    const newState = typeof state === 'string' ? {key: state, title: state} : state;
    return {
        type: actionTypes.PUSH,
        newState,
    };
};

export const pop = (source) => ({
    type: actionTypes.POP,
    source,
});