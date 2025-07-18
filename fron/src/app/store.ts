import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { version } from "react";
import { UserApi } from "../Features/users/UserApi";
import { loginAPI } from "../Features/loginApi";
import storage from "redux-persist/lib/storage";
import userSlice from "../Features/login/userSlice";
import { persistReducer, persistStore } from "redux-persist";










const persistConfig = {
    key:'root',
    version: 1,
    storage,
    whitelist: ['user', ],
}

const rootReducer = combineReducers({
    [UserApi.reducerPath]: UserApi.reducer,
    [loginAPI.reducerPath]: loginAPI.reducer,
   
    user:userSlice,
    
    
});

export const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
        serializableCheck: false,
        
    }).concat(UserApi.middleware)
       .concat(loginAPI.middleware),
       

})

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;