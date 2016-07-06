import update from 'react-addons-update';

import * as actionTypes from '../actionTypes/cites';


const initialState = {
    isLoading: false,
    cities: {},
    error: null,
};

export const cities = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CITIES_REQUEST:
            return update(state, {
                isLoading: {$set: true},
            });
        case actionTypes.FETCH_CITIES_SUCCESS:
            const newCities = action.cities.reduce((p, c) => ({...p, [c.id]: c}), {});
            return update(state, {
                $merge: {
                    isLoading: false,
                    cities: newCities,
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