import { call, all } from "redux-saga/effects";
import { watchUpdateUser } from "./userSaga";

export default function* rootSaga() {
  yield all([call(watchUpdateUser)]);
}
