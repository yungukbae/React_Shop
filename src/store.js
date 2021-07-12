import reducer from './reducer'
import { applyMiddleware, createStore, compose } from "redux";
import promiseMiddlerware from "redux-promise";
import reduxThunk from "redux-thunk";
import {rrfConfig} from './config/fbConfig'
import { createFirestoreInstance } from "redux-firestore";
import firebase from "firebase/app";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

export const store = createStore(
  // 리듀서를 생성후 넣어준다
    reducer,composeEnhancer(applyMiddleware(
      promiseMiddlerware,
      reduxThunk
    ))
  // 
  //개발자 도구를 사용하기 위한 설정
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    // window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

// export const persistor = persistStore(store);