import update from 'react-addons-update';

import * as actionTypes from '../actionTypes/pubs';


const initialState = {
    isLoading: false,
    error: null,
};

export const pubs = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PUBS_REQUEST:
            return update(state, {
                $merge: {
                    isLoading: true,
                    error: null,
                },
            });
        case actionTypes.FETCH_PUBS_SUCCESS:
            return update(state, {
                $merge: {
                    isLoading: false,
                },
            });
        case actionTypes.FETCH_PUBS_FAILURE:
            return update(state, {
                $merge: {
                    isLoading: false,
                    error: action.error,
                },
            });

        case actionTypes.FETCH_TAPS_REQUEST:
            return update(state, {
                $merge: {
                    isLoading: true,
                    error: null,
                },
            });
        case actionTypes.FETCH_TAPS_SUCCESS:
            return update(state, {
                $merge: {
                    isLoading: false,
                },
            });
        case actionTypes.FETCH_TAPS_FAILURE:
            return update(state, {
                $merge: {
                    isLoading: false,
                    error: action.error,
                },
            });

        default:
            return state;
    }
};
