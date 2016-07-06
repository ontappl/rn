import * as actionTypes from '../actionTypes/onboarding';


export const selectCity = (cityId) => ({
    type: actionTypes.SELECT_CITY,
    cityId,
});
