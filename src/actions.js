import * as actionTypes from './actionTypes';


export const fetchCitiesRequest = () => ({
    type: actionTypes.FETCH_CITIES_REQUEST,
});

export const fetchCitiesSuccess = (cities) => ({
    type: actionTypes.FETCH_CITIES_SUCCESS,
    cities,
});

export const fetchCitiesFailure = (error) => ({
    type: actionTypes.FETCH_CITIES_FAILURE,
    error,
});

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
