import { createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        companyName:"Dropbox",
        rating:{
            day:[
                { name: "Positive", percent: 0.8 },
                { name: "Neutral", percent: 0.1 },
                { name: "Negative", percent: 0.1 },
            ],
            week:[
                { name: "Positive", percent: 0.7 },
                { name: "Neutral", percent: 0.2 },
                { name: "Negative", percent: 0.1 },
            ],
            month:[
                { name: "Positive", percent: 0.6 },
                { name: "Neutral", percent: 0.2 },
                { name: "Negative", percent: 0.2 },
            ],
            year:[
                { name: "Positive", percent: 0.5 },
                { name: "Neutral", percent: 0.3 },
                { name: "Negative", percent: 0.2 },
            ],
            allTime:[
                { name: "Positive", percent: 0.1 },
                { name: "Neutral", percent: 0.2 },
                { name: "Negative", percent: 0.7 },
            ],
        },
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