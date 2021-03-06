import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import playerSaga from './playerSaga';
import coachSaga from './coachSaga';
import registerSaga from './registerSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    playerSaga(),
    coachSaga(),
    registerSaga(),
    // watchIncrementAsync()
  ]);
}
