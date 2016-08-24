/* global Headers, fetch */

if (process.env.NODE_ENV === 'test') {
  global.Headers = () => {
  };
}

import DeviceInfo from 'react-native-device-info';

import {config,} from '../.config';


const baseUrl = `${config.baseUrl}${config.currentApiVersion}/`;
const headers = new Headers({
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Api-Key': config.apiKey,
  'Device-Id': DeviceInfo.getUniqueID(),
});

function throwError(response) {
  const {url, status,} = response;
  return response
        .json()
        .then(
            (body) => {
              throw new ApiError('Api error', {url, status, body,});
            },
            () => {
              throw new ApiError('Api error', {url, status,});
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
        return response.json().then(parseTaps);
      } else {
        return throwError(response);
      }
    });
};

export const parseTaps = (responseBody) => responseBody.map((t) => ({
  tapName: t.tapName,
  prices: parsePrices(t.prices),
  beer: parseBeer(t.beer),
}));

export const parseBeer = (beer) => {
  if (!beer) {
    return null;
  } else {
    return {
      name: beer.name,
      style: beer.style,
      brewery: beer.brewery,
      abv: beer.abv,
      ibu: beer.ibu,
    };
  }
};

const parsePrices = (prices) => {
  if (prices.constructor === Array) {
    return prices;
  } else {
    return Object.keys(prices).sort().map((k) => prices[k]);
  }
};


export const sendToken = (token) => {
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify({type: 'android', token,}),
  };
  return fetch(`${baseUrl}notification-tokens`, options)
    .then(response => response.ok ? response.json() : throwError(response));
};

export const sendFavoritedPubs = (pubs) => {
  const options = {
    method: 'PUT',
    headers,
    pubs: JSON.stringify(pubs),
  };
  return fetch(`${baseUrl}favorites`, options)
    .then((response) => response.ok ? response.json() : throwError(response));
};
