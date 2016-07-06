import * as actionTypes from '../actionTypes/homeTabs';

export const changeTab = (index) => ({
    type: actionTypes.CHANGE_TAB,
    index,
});
