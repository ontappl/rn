import update from 'react-addons-update';

import * as cityActions from '../actionTypes/cites';
import * as pubActions from '../actionTypes/pubs';


const initialState = {
    cities: {},
    pubs: {},
    favoritedPubs: [],
};

export const reducer = (state = initialState, action) => {
    console.log(state);

    switch (action.type) {
        case cityActions.FETCH_CITIES_SUCCESS: {
            const newCities = action.cities.reduce(
                (prev, city) => ({...prev, [city.id]: city}),
                {}
            );
            return {...state, cities: newCities}
        }
        case pubActions.FETCH_PUBS_SUCCESS: {
            const {pubs, cityId} = action;
            const newPubs = pubs.reduce(
                (prev, pub) => ({...prev, [pub.id]: {...pub, city: cityId}}),
                {}
            );
            return update(state, {pubs: {$merge: newPubs}});
        }
        case pubActions.TOGGLE_FAVORITE_PUB: {
            const {id} = action;
            const index = state.favoritedPubs.indexOf(id);

            return update(state, {
                favoritedPubs: index === -1 ? {$push: [id]} : {$splice: [[index, 1]]}
            });
        }
        case pubActions.FETCH_TAPS_SUCCESS: {
            return update(state, {
                pubs: {
                    [action.pubId]: {
                        $merge: {
                            taps: action.taps,
                        }
                    }
                }
            });
        }

        default:
            return state;
    }
};