import * as actionTypes from '../actionTypes2/onboarding';


export const selectCity = (cityId) => ({
    type: actionTypes.SELECT_CITY,
    cityId,
});
