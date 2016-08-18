import * as actionTypes from '../actionTypes/onboarding';


export const selectCity = (cityId, name) => ({
  type: actionTypes.SELECT_CITY,
  cityId,
  name,
});
