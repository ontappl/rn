import * as actionTypes from '../actionTypes/pubs';

export const fetchPubsRequest = (cityId) => ({
    type: actionTypes.FETCH_PUBS_REQUEST,
    cityId,
});

export const fetchPubsSuccess = (cityId, pubs) => ({
    type: actionTypes.FETCH_PUBS_SUCCESS,
    cityId,
    pubs,
});

export const fetchPubsFailure = (error) => ({
    type: actionTypes.FETCH_PUBS_FAILURE,
    error,
});

export const selectPub = (id, name) => ({
    type: actionTypes.SELECT_PUB,
    id,
    name,
});

export const togglePubFavorite = (id) => ({
    type: actionTypes.TOGGLE_FAVORITE_PUB,
    id,
});

export const fetchTapsRequest = (pubId) => ({
    type: actionTypes.FETCH_TAPS_REQUEST,
    pubId,
});

export const fetchTapsSuccess = (pubId, taps) => ({
    type: actionTypes.FETCH_TAPS_SUCCESS,
    pubId,
    taps,
});

export const fetchTapsFailure = (error) => ({
    type: actionTypes.FETCH_TAPS_FAILURE,
    error,
});
