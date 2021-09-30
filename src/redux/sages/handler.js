import { call, put } from "redux-saga/effects";
import { requestGetUser } from "../../services";
import { set_user } from "../actions";

export function* handleGetUser(action) {
  try {
    console.log("saga middleware called");
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(set_user(data));
  } catch (error) {
    console.log("error", error);
  }
}
