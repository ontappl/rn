import * as actionTypes from '../actionTypes/homeTabs';


const tabs = [
    {key: 'HOME_TAB_PUBS', title: 'PUBY'},
    {key: 'HOME_TAB_BEERS', title: 'PIWA'},
];

const initialState = {
    index: 0,
    tabs,
};

export const homeTabs = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_TAB:
            return {
                ...state,
                index: action.index,
            };
        default:
            return state;
    }
};
