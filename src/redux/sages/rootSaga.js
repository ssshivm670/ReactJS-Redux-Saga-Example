import { takeLatest } from "redux-saga/effects";
import { NEXT } from "../constants";
import { handleGetUser } from "./handler";

export function* watcherSaga() {
  yield takeLatest(NEXT, handleGetUser);
}
