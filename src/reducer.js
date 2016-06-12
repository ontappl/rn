import {combineReducers} from 'redux';
import update from 'react-addons-update';

import * as actionTypes from './actionTypes';
import {reducer as navigation} from './navigation';


const initialState = {
    isLoading: false,
    cities: {},
    pubs: {},
    error: null,
};

const cities = (state = initialState, action) => {
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

        case actionTypes.FETCH_PUBS_REQUEST:
            return update(state, {
                isLoading: {$set: true},
            });
        case actionTypes.FETCH_PUBS_SUCCESS:
            const {pubs, cityId} = action;
            const newPubs = pubs.reduce((p, c) => ({...p, [c.id]: c}), {});
            const newIds = Object.keys(newPubs);
            const newState = update(state, {
                isLoading: {$set: false},
                pubs: {$merge: newPubs},
                cities: {
                    [cityId]: {
                        $merge: {
                            pubs: newIds,
                        },
                    },
                },
            });
            return newState;
    }

    return state;
};

export const reducer = combineReducers({
    navigation,
    cities,
});