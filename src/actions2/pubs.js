import * as actionTypes from '../actionTypes2/pubs';

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
