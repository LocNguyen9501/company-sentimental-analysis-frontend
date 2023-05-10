import { createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        companyName:"Dropbox",
        rating:[
            { name: "Happy", value: 40 },
            { name: "Neutral", value: 30 },
            { name: "Angry", value: 30 },
        ]
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