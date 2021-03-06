import * as actionTypes from '../actionTypes/pushNotifications';


export const handleToken = (token) => ({
  type: actionTypes.HANDLE_TOKEN,
  token,
});

export const sendTokenRequest = (token) => ({
  type: actionTypes.SEND_TOKEN_REQUEST,
  token,
});

export const sendTokenSuccess = (token) => ({
  type: actionTypes.SEND_TOKEN_SUCCESS,
  token,
});

export const sendTokenFailure = (error) => ({
  type: actionTypes.SEND_TOKEN_FAILURE,
  error,
});
