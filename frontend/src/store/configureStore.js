//eslint-disable-next-line
import {
    configureStore,
    getDefaultMiddleware,
    combineReducers,
  } from "@reduxjs/toolkit";
  
  import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
import { locationService } from "../service/locationService";
  import rootReducer from "./rootReducer";
  const persistConfig = {
    key: "plan-your-trip",
    storage,
    whitelist: ["locations", "searchLocations","locationService"],
  };
   
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export default () => {
    const store = configureStore({
      reducer: persistedReducer,
      middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat([
        locationService.middleware
      ]),
    });
  
    const persistor = persistStore(store);
    return { store, persistor };
  };
  