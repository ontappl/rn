import update from 'react-addons-update';

import * as actionTypes from '../actionTypes2/pubs';


const initialState = {
    isLoading: false,
    pubs: {},
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
            const newPubs = action.pubs
                .reduce(
                    (pubs, curr) => ({...pubs, [curr.id]: {...curr, city: action.cityId}}),
                    {}
                );
            return update(state, {
                isLoading: {$set: false},
                pubs: {$merge: newPubs},
            });
        case actionTypes.FETCH_PUBS_FAILURE:
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
