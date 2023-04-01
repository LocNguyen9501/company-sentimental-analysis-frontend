import { configureStore } from "@reduxjs/toolkit";
import companyListReducer from "./companyList-slice"

const store = configureStore({
    reducer: {
        companyList:companyListReducer 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
});

export default store;
