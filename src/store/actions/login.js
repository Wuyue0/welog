import * as Login from '../constants';

export const loginRequest = (data) => {
  return { type: Login.LOGIN_REQUEST, payload: data };
};

export const loginSuccess = (id_token) => {
  return { type: Login.LOGIN_SUCCESS, payload: { id_token } };
};

export const loginFailure = (data) => {
  return { type: Login.LOGIN_FAILURE, payload: { status: data.code, msg: data.msg } };
};

export const logoutRequest = () => {
  return { type: Login.LOGOUT_REQUEST };
};

export const getAccountInfoData = (data) => {
  return { type: Login.GET_ACCOUNT_INFO, payload: data };
};

