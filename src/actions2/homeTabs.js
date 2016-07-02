import * as actionTypes from '../actionTypes2/homeTabs';

export const changeTab = (index) => ({
    type: actionTypes.CHANGE_TAB,
    index,
});
