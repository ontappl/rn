import update from 'react-addons-update';

import * as actionTypes from '../actionTypes/cites';


const initialState = {
  isLoading: false,
  error: null,
};

export const cities = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.FETCH_CITIES_REQUEST:
    return update(state, {
      $merge: {
        isLoading: true,
        error: null,
      },
    });
  case actionTypes.FETCH_CITIES_SUCCESS:
    return update(state, {
      $merge: {
        isLoading: false,
      },
    });
  case actionTypes.FETCH_CITIES_FAILURE:
    return update(state, {
      $merge: {
        isLoading: false,
        error: action.error,
      },
    });
  }

  return state;
};