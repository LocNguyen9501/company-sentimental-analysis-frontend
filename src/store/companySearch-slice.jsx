import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    isActive:0,
    companyimage:"",
    wordEntered:"",
    company:{
        "companyName": "amazon",
        "normalize": 0.49537142583117566,
        "rating": {
          "allTime": [
            {
              "name": "Positive",
              "percent": 0.2165913085295883
            },
            {
              "name": "Neutral",
              "percent": 0.5575602335375772
            },
            {
              "name": "Negative",
              "percent": 0.225848456867237
            }
          ],
          "day": [
            {
              "name": "Positive",
              "percent": 0.23173546511133336
            },
            {
              "name": "Neutral",
              "percent": 0.5242538497588671
            },
            {
              "name": "Negative",
              "percent": 0.24401068019089311
            }
          ],
          "month": [
            {
              "name": "Positive",
              "percent": 0.217058872340681
            },
            {
              "name": "Neutral",
              "percent": 0.5397667677802469
            },
            {
              "name": "Negative",
              "percent": 0.24317435543107463
            }
          ],
          "week": [
            {
              "name": "Positive",
              "percent": 0.229998094372899
            },
            {
              "name": "Neutral",
              "percent": 0.5281504686898605
            },
            {
              "name": "Negative",
              "percent": 0.24185143209663337
            }
          ],
          "year": [
            {
              "name": "Positive",
              "percent": 0.21931068291780725
            },
            {
              "name": "Neutral",
              "percent": 0.5503530399498017
            },
            {
              "name": "Negative",
              "percent": 0.2303362754006227
            }
          ]
        }
      }
};

const companySearchSlice = createSlice({
    name:"companySearch",
    initialState,
    reducers:{
      fetchCompanyInfo(state, action) {
        state.company = action.payload;
      },
      setSearchActive(state, action) {
        state.isActive = action.payload;
      },
      setCompanyImage(state, action) {
        state.companyimage = action.payload;
      },
      setWordEntered(state, action) {
        state.wordEntered = action.payload;
      }
    }
});

export const {fetchCompanyInfo, setSearchActive, setCompanyImage, setWordEntered} = companySearchSlice.actions;
export default companySearchSlice.reducer;