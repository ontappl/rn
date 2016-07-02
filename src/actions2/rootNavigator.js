import * as actionTypes from '../actionTypes2/rootNavigator';


export const push = (state) => ({
    type: actionTypes.PUSH,
    newState: typeof state === 'string' ? {key: state} : state
});

export const pop = (source) => ({
    type: actionTypes.POP,
    source,
});

export const resetOnCurrentScene = () => ({
    type: actionTypes.RESET_ON_CURRENT_SCENE,
});
