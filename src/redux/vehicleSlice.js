import { createSlice } from "@reduxjs/toolkit";
import { getCountryList, getdistrictList, getStateList } from "./vehicleAction";

const initialState = {
    selectedvehicle: "Sprint Jr",
    selectedColor: "blue",
    loading: false,
    countrylist: [],
    statelist: [],
    districtList: [],
};

const vehicleSlice = createSlice({
    name: "vehicle",
    initialState,
    reducers: {
        // add your reducers here
        setSelectedvehicle: (state, action) => {
            state.selectedvehicle = action.payload
        },
        setSelectedColor: (state, action) => {
            state.selectedColor = action.payload;
        },
        setloading: (state, action) => {
            state.loading = action.payload
        }
    },
    extraReducers: (builder) => {
        // handle async thunks here


        builder.addCase(getCountryList.pending, (state) => {
            // state.loading = true;

        });
        builder.addCase(getCountryList.fulfilled, (state, { payload }) => {
            // state.loading = false;

            state.countrylist = payload;
        });
        builder.addCase(getCountryList.rejected, (state, { payload }) => {
            // state.loading = false;

        });


        // 

        builder.addCase(getStateList.pending, (state) => {
            // state.loading = true;

        });
        builder.addCase(getStateList.fulfilled, (state, { payload }) => {
            // state.loading = false;

            state.statelist = payload;
        });
        builder.addCase(getStateList.rejected, (state, { payload }) => {
            // state.loading = false;

        });

        // 

        builder.addCase(getdistrictList.pending, (state) => {
            // state.loading = true;

        });
        builder.addCase(getdistrictList.fulfilled, (state, { payload }) => {
            // state.loading = false;

            state.districtList = payload;
        });
        builder.addCase(getdistrictList.rejected, (state, { payload }) => {
            // state.loading = false;

        });
    },
});

// export actions
export const { setSelectedvehicle, setSelectedColor , setloading} = vehicleSlice.actions;

// export reducer
export default vehicleSlice.reducer;
