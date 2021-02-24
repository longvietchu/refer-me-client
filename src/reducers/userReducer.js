import { LOGIN } from "../actions/actionTypes";

const initialState = {
  user: { name: "Tdgiang", pass: "abc" },
  isSignedIn: false,
  expiredTime: new Date(),
  userInfo: {},
};
// @ts-ignore
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return { ...action.data, isSignedIn: true };
    }
    default:
      return state;
  }
}
