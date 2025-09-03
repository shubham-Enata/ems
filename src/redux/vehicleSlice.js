import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedvehicle: "Sprint Jr",
    selectedColor: "blue",
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
    },
    extraReducers: (builder) => {
        // handle async thunks here
    },
});

// export actions
export const { setSelectedvehicle , setSelectedColor} = vehicleSlice.actions;

// export reducer
export default vehicleSlice.reducer;
