import { configureStore } from "@reduxjs/toolkit";
import companyListReducer from "./companyList-slice"
import companyRateReducer from "./companyRate-slice";
import companySearchReducer from "./companySearch-slice";

const store = configureStore({
    reducer: {
        companyList:companyListReducer,
        companyRate:companyRateReducer,
        companySearch:companySearchReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
});

export default store;
