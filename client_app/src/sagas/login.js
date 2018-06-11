import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  loginUserApi,
} from '../api';
import {
  loginUserDone,
} from '../actions';

export function* loginUser({ username, password }) {
  // console.log(username, password);
  try {
    const authData = yield call(loginUserApi, username, password);
    console.log(authData);
    // yield put(loginUserDone(authData));
  } catch (err) {
    console.log(err);
  }
}
