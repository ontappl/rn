import {combineReducers} from 'redux';
import update from 'react-addons-update';

import * as actionTypes from './actionTypes';
import {reducer as navigation} from './navigation';
import {reducer as appReducer} from './reducers/app';
import {reducer as rootNavigator} from './reducers/rootNavigator';
import {homeTabs} from './reducers/homeTabs';
import {pubs} from './reducers/pubs';


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

        // case actionTypes.FETCH_PUBS_REQUEST:
        //     return update(state, {
        //         isLoading: {$set: true},
        //     });
        // case actionTypes.FETCH_PUBS_SUCCESS:
        //     const {pubs, cityId} = action;
        //     const newPubs = pubs.reduce((p, c) => ({...p, [c.id]: c}), {});
        //     const newIds = Object.keys(newPubs);
        //     const newState = update(state, {
        //         isLoading: {$set: false},
        //         pubs: {$merge: newPubs},
        //         cities: {
        //             [cityId]: {
        //                 $merge: {
        //                     pubs: newIds,
        //                 },
        //             },
        //         },
        //     });
        //     return newState;
        // case actionTypes.FETCH_PUBS_FAILURE:
        //     return update(state, {
        //         $merge: {
        //             isLoading: false,
        //             error: action.error,
        //         },
        //     });

        // case actionTypes.FETCH_TAPS_REQUEST:
        //     return update(state, {
        //         isLoading: {$set: true},
        //     });
        // case actionTypes.FETCH_TAPS_SUCCESS:
        //     return update(state, {
        //         isLoading: {$set: false},
        //         pubs: {
        //             [action.pubId]: {
        //                 $merge: {
        //                     taps: action.taps,
        //                 }
        //             }
        //         }
        //     });
        // case actionTypes.FETCH_TAPS_FAILURE:
        //     return update(state, {
        //         $merge: {
        //             isLoading: false,
        //             error: action.error,
        //         },
        //     });
    }

    return state;
};

export const reducer = combineReducers({
    cities,
    // navigation,
    app: appReducer,
    rootNavigator,
    homeTabs,
    pubs,
});