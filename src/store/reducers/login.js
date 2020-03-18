import { message } from 'antd';
import * as Login from '../constants';
import { getToken } from '@/utils/auth'


console.log(Login)

const id_token = getToken() ? getToken() : '';

const loginReducer = (state = {
    id_token: id_token,
    userInfo: {}
}, action) => {
    switch (action.type) {
        case Login.LOGIN_REQUEST:
            return {
                ...state
            };
        case Login.LOGIN_SUCCESS:
            return {
                ...state,
                id_token: action.payload.id_token
            };
        case Login.LOGIN_FAILURE:
            message.error(action.payload.msg);
            return {
                ...state,
                id_token: ''
            };
        case Login.LOGOUT_REQUEST:
            return {
                ...state,
                id_token: ''
            };
        case Login.GET_ACCOUNT_INFO:
            return {
                ...state,
                userInfo: action.payload
            };
        default:
            return state;
    }
};
export default loginReducer;
