import {combineReducers} from 'redux';
import update from 'react-addons-update';

import * as actionTypes from './actionTypes';


const initialState = {
    isLoading: false,
    cities: [],
    error: null,
};

const cities = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CITIES_REQUEST:
            return update(state, {
                isLoading: {$set: true},
            });
        case actionTypes.FETCH_CITIES_SUCCESS:
            return update(state, {
                $merge: {
                    isLoading: false,
                    cities: action.cities,
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

export const reducer = combineReducers({cities});