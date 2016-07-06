import * as actionTypes from '../actionTypes/cites';


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
