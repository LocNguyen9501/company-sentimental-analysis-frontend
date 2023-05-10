import { configureStore } from "@reduxjs/toolkit";
import companyListReducer from "./companyList-slice"
import companyRateReducer from "./companyRate-slice";

const store = configureStore({
    reducer: {
        companyList:companyListReducer,
        companyRate:companyRateReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
});

export default store;
