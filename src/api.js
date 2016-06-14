import {config} from '../.config';


const baseUrl = `${config.baseUrl}${config.currentApiVersion}/`;
const headers = new Headers({
    'Content-Type': 'application/json',
    'Api-Key': config.apiKey,
});

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
                const message = `Houston we have problem: ${response.status}, ${response.url}`;
                throw new Error(message);
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
                const message = `Houston we have problem: ${response.status}, ${response.url}`;
                throw new Error(message);
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
                const message = `Houston we have problem: ${response.status}, ${response.url}`;
                throw new Error(message);
            }
        });
};
