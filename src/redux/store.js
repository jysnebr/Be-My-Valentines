import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

import { userReducer } from "./reducer/userReducer";
import { thunk } from "redux-thunk";
import { logger } from "redux-logger"
 
const config = {
  key: 'root',
  storage: AsyncStorage
}

const combinedReducers = combineReducers({
  userReducer: persistReducer(config, userReducer)
})

const store = configureStore({ 
  reducer: combinedReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

const persistor = persistStore(store);

export {
  persistor,
  store
}