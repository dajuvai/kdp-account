import { takeLatest, all } from 'redux-saga/effects';
import { loginUser } from './login';

export default function* watcher() {
  yield all([
    takeLatest('USER_LOGIN', loginUser),
  ]);
}
