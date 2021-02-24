import {
  WATCH_SAVE_USER_DATA,
  WATCH_UPDATE_USER_DATA,
  GET_USER_INFO,
  UPDATE_NOTIFIFY_NUMBER,
  SAVE_NOTIFICATION,
} from "./actionTypes";

export function saveUserToRedux(data, token) {
  return {
    type: WATCH_SAVE_USER_DATA,
    data,
    token,
  };
}

export function updateUserToRedux(data) {
  return {
    type: WATCH_UPDATE_USER_DATA,
    data,
  };
}

export function getUserInfor(data) {
  return {
    type: GET_USER_INFO,
    payload: data,
  };
}

export function updateNotifyNumber(notifyNumeber) {
  return {
    type: UPDATE_NOTIFIFY_NUMBER,
    payload: notifyNumeber,
  };
}

export function saveNotification(notification) {
  return {
    type: SAVE_NOTIFICATION,
    payload: notification,
  };
}
