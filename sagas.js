import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync()
   
  ]
}
export function* helloSaga() {
  console.log('Farooq using Saga MiddleWare!')
}

export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}
export function* decrementAsync() {
  yield delay(1000)
  yield put({ type: 'DECREMENT' })
}
export function* watchIncrementAsync() {
  yield [
     takeEvery('INCREMENT_ASYNC', incrementAsync ),
     takeEvery('DECREMENT_ASYNC', decrementAsync)
   ]

 
}
