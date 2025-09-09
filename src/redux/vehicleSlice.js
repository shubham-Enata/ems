import { createSlice } from "@reduxjs/toolkit";
import { get_contact_us, get_dealer, get_dealer_master, get_enquiry, getCountryList, getdistrictList, getorgList, getpincodeList, getStateList } from "./vehicleAction";
import { act } from "react";

const initialState = {
    selectedvehicle: "Sprint Jr",
    selectedColor: "blue",
    loading: false,
    countrylist: [],
    statelist: [],
    districtList: [],
    pincodelist: [],
    orgList: [],
    dealer_master_list: [],
    contactuslist: [],
    enquiryList: [],
    dealerList:[],
    collapsed: false,
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
        },
        setCollapsed: (state, action) => {
            state.collapsed = action.payload
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

        // 

        builder.addCase(getpincodeList.pending, (state) => {


        });
        builder.addCase(getpincodeList.fulfilled, (state, { payload }) => {


            state.pincodelist = payload;
        });
        builder.addCase(getpincodeList.rejected, (state, { payload }) => {


        });

        // 

        builder.addCase(getorgList.pending, (state) => {


        });
        builder.addCase(getorgList.fulfilled, (state, { payload }) => {


            state.orgList = payload;
        });
        builder.addCase(getorgList.rejected, (state, { payload }) => {


        });

        // 
        builder.addCase(get_dealer_master.pending, (state) => {
            state.loading = true

        });
        builder.addCase(get_dealer_master.fulfilled, (state, { payload }) => {


            state.dealer_master_list = payload;
        });
        builder.addCase(get_dealer_master.rejected, (state, { payload }) => {
            state.loading = false


        });


        // 
        builder.addCase(get_contact_us.pending, (state) => {
            state.loading = true

        });
        builder.addCase(get_contact_us.fulfilled, (state, { payload }) => {


            state.contactuslist = payload;
        });
        builder.addCase(get_contact_us.rejected, (state, { payload }) => {
            state.loading = false


        });

        // 
        builder.addCase(get_enquiry.pending, (state) => {
            state.loading = true
        });
        builder.addCase(get_enquiry.fulfilled, (state, { payload }) => {
            state.enquiryList = payload;
        });
        builder.addCase(get_enquiry.rejected, (state, { payload }) => {
            state.loading = false
        });

        // 
        builder.addCase(get_dealer.pending, (state) => {
            state.loading = true
        });
        builder.addCase(get_dealer.fulfilled, (state, { payload }) => {
            state.dealerList = payload;
        });
        builder.addCase(get_dealer.rejected, (state, { payload }) => {
            state.loading = false
        });
    },
});

// export actions
export const { setSelectedvehicle, setSelectedColor, setloading, setCollapsed } = vehicleSlice.actions;

// export reducer
export default vehicleSlice.reducer;
