import { createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        companyName:"Dropbox",
        rating:[
            { name: "Positive", percent: 0.4 },
            { name: "Neutral", percent: 0.4 },
            { name: "Negative", percent: 0.3 },
        ],
        normalize: 0.678,
    }
]

const companyRateSlice = createSlice({
    name:"companyRatings",
    initialState,
    reducers:{
      fetchCompanyRating(state, action) {
        state = action.payload;
      }
    }
});

export const {fetchCompanyRating} = companyRateSlice.actions;
export default companyRateSlice.reducer;