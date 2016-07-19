import {config} from '../.config';


const baseUrl = `${config.baseUrl}${config.currentApiVersion}/`;
const headers = new Headers({
    'Content-Type': 'application/json',
    'Api-Key': config.apiKey,
});

function throwError(response) {
    const {url, status} = response;
    return response
        .json()
        .then(
            (body) => {
                throw new ApiError('Api error', {url, status, body})
            },
            () => {
                throw new ApiError('Api error', {url, status})
            }
        );
}

export class ApiError extends Error {
    constructor(message, data) {
        super(message);
        this.name = this.constructor.name;
        this.data = data;
        // better node stacktaces, more here:
        // http://stackoverflow.com/a/32749533/1035552
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}

export const fetchCities = () => {
    const options = {
        method: 'GET',
        headers,
    };
    return fetch(`${baseUrl}cities/`, options)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return throwError(response);
            }
        });
};

export const fetchPubs = (cityId) => {
    const options = {
        method: 'GET',
        headers,
    };
    return fetch(`${baseUrl}cities/${cityId}/pubs`, options)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return throwError(response);
            }
        });
};

export const fetchTaps = (pubId) => {
    const options = {
        method: 'GET',
        headers,
    };
    return fetch(`${baseUrl}pubs/${pubId}/taps`, options)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return throwError(response);
            }
        });
};
