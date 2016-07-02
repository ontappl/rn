// import {Answers} from 'react-native-fabric';

// import * as navigationActionTypes from '../navigation/actionTypes';


export const middleware = () => (next) => (action) => {
    // switch (action.type) {
    //     case navigationActionTypes.PUSH: {
    //         const {newState} = action;
    //         Answers.logCustom('Pushed view', {type: newState.key, title: newState.title});
    //         break;
    //     }
    // }
    return next(action);
};