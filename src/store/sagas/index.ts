import { all } from "redux-saga/effects"
import authWatcher from "src/store/sagas/authSaga"

function* rootSaga() {
  yield all([authWatcher()])
}

export default rootSaga
