import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { version } from "react";
import { UserApi } from "../Features/users/UserApi";
import { loginAPI } from "../Features/loginApi";
import { ProductsApi } from "../Features/products/ProductsApi";
import { PaymentsApi } from "../Features/admin/PaymentsApi";
import { AdminProductsApi } from "../Features/admin/AdminProductsApi";
import storage from "redux-persist/lib/storage";
import userSlice from "../Features/login/userSlice";
import cartSlice from "../Features/cart/cartSlice";
import { persistReducer, persistStore } from "redux-persist";










const persistConfig = {
    key:'root',
    version: 1,
    storage,
    whitelist: ['user', 'cart'],
}

const rootReducer = combineReducers({
    [UserApi.reducerPath]: UserApi.reducer,
    [loginAPI.reducerPath]: loginAPI.reducer,
    [ProductsApi.reducerPath]: ProductsApi.reducer,
    [PaymentsApi.reducerPath]: PaymentsApi.reducer,
    [AdminProductsApi.reducerPath]: AdminProductsApi.reducer,
    user: userSlice,
    cart: cartSlice,
});

export const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
        serializableCheck: false,
        
    }).concat(UserApi.middleware)
       .concat(loginAPI.middleware)
       .concat(ProductsApi.middleware)
       .concat(PaymentsApi.middleware)
       .concat(AdminProductsApi.middleware),
       

})

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;