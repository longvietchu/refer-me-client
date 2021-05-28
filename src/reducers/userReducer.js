import { SAVE_USER, GET_USER_INFO } from '../actions/actionTypes';

const initialState = {
    user: { name: '', pass: '' },
    isSignedIn: false,
    expiredTime: new Date(),
    userInfo: {}
};

// @ts-ignore
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_USER: {
            console.log('bb', action);
            return { ...action.data, isSignedIn: true };
        }
        case GET_USER_INFO: {
            console.log('aa', action);
            return { ...state, userInfo: action.data };
        }
        default:
            return state;
    }
}
