import * as onboardingActionTypes from '../actionTypes/onboarding';

const initialState = {
  selectedCity: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case onboardingActionTypes.SELECT_CITY:
    return {
      ...state,
      selectedCity: action.cityId,
    };
  }
  return state;
};