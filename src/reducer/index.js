import { combineReducers } from "redux";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
import auth from "./authreducer";
import item from './itemreducer'
// import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'



// const persistConfig = {
//   key:['Token'],
//   storage
// };



const rootReducer = combineReducers({
  auth,
  item,
  firebase:firebaseReducer,
  firestore:firestoreReducer
});

// export default persistReducer(persistConfig,rootReducer);
export default rootReducer;