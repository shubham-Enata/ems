import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




const api = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
});

export default api;


export const getCountryList = createAsyncThunk(
    "vehicle/getCountryList",
    async (_, { rejectWithValue }) => {

        try {

            const { data } = await api.get(`/api/v1/locations/country/`);

            console.log("returning ", data);
            return data.results;
        } catch (error) {
            // Return custom error message from the API if any
            if (error.response && error.response.data) {

                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const getStateList = createAsyncThunk(
    "vehicle/getStateList",
    async ({ id }, { rejectWithValue }) => {

        try {

            const { data } = await api.get(`/api/v1/locations/state/?country=${id}`);

            console.log("returning ", data);
            return data.results;
        } catch (error) {
            // Return custom error message from the API if any
            if (error.response && error.response.data) {

                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const getdistrictList = createAsyncThunk(
    "vehicle/getdistrictList",
    async ({ id }, { rejectWithValue }) => {

        try {

            const { data } = await api.get(`/api/v1/locations/district/?state=${id}`);

            console.log("returning ", data);
            return data.results;
        } catch (error) {
            // Return custom error message from the API if any
            if (error.response && error.response.data) {

                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const getpincodeList = createAsyncThunk(
    "vehicle/getpincodeList",
    async ({ id }, { rejectWithValue }) => {

        try {

            const { data } = await api.get(`/api/v1/locations/pincode/?district=${id}`);

            console.log("returning ", data);
            return data.results;
        } catch (error) {
            // Return custom error message from the API if any
            if (error.response && error.response.data) {

                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const create_contact_us = createAsyncThunk(
    "vehicle/create_contact_us",
    async ({ payload }, { rejectWithValue }) => {

        try {

            const { data } = await api.post(`/api/v1/organizations/create/ems_contact_us/`, payload);

            console.log("returning ", data);
            return data;
        } catch (error) {
            // Return custom error message from the API if any
            if (error.response && error.response.data) {

                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const create_dealer = createAsyncThunk(
    "vehicle/create_dealer",
    async ({ payload }, { rejectWithValue }) => {

        try {

            const { data } = await api.post(`/api/v1/organizations/create/become_a_dealer/`, payload);

            console.log("returning ", data);
            return data;
        } catch (error) {
            // Return custom error message from the API if any
            if (error.response && error.response.data) {

                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const create_enquiry = createAsyncThunk(
    "vehicle/create_enquiry",
    async ({ payload }, { rejectWithValue }) => {

        try {

            const { data } = await api.post(`/api/v1/organizations/create/enquire_now/`, payload);

            console.log("returning ", data);
            return data;
        } catch (error) {
            // Return custom error message from the API if any
            if (error.response && error.response.data) {

                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);



// Auth apis >>>>

export const getorgList = createAsyncThunk(
    "vehicle/getorgList",
    async (_, { rejectWithValue }) => {

        try {
            const { data } = await api.get(`/api/v1/organizations/fetch/new1/org/`);
            console.log("returning ", data);
            return data.results;
        } catch (error) {
            // Return custom error message from the API if any
            if (error.response && error.response.data) {

                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);


export const create_dealer_master = createAsyncThunk(
    "vehicle/create_dealer_master",
    async ({ payload }, { rejectWithValue }) => {

        try {

            const { data } = await api.post(`/api/v1/dms/create/dealer-master/`, payload);

            console.log("returning ", data);
            return data;
        } catch (error) {
            // Return custom error message from the API if any
            if (error.response && error.response.data) {

                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const update_dealer_master = createAsyncThunk(
    "vehicle/update_dealer_master",
    async ({ payload, id }, { rejectWithValue }) => {

        try {

            const { data } = await api.put(`/api/v1/dms/create/dealer-master/${id}/`, payload);

            console.log("returning ", data);
            return data;
        } catch (error) {
            // Return custom error message from the API if any
            if (error.response && error.response.data) {

                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);


export const create_dealer_geoghraphy = createAsyncThunk(
    "vehicle/create_dealer_geoghraphy",
    async ({ payload }, { rejectWithValue }) => {

        try {

            const { data } = await api.post(`/api/v1/dms/create/dealer-geography/`, payload);

            console.log("returning ", data);
            return data;
        } catch (error) {
            // Return custom error message from the API if any
            if (error.response && error.response.data) {

                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);




export const get_dealer_master = createAsyncThunk(
    "vehicle/get_dealer_master",
    async (_, { rejectWithValue }) => {

        try {

            const { data } = await api.get(`/api/v1/dms/get/dealer-master/`);

            console.log("returning ", data);
            return data.results;
        } catch (error) {
            // Return custom error message from the API if any
            if (error.response && error.response.data) {

                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);


export const get_contact_us = createAsyncThunk(
    "vehicle/get_contact_us",
    async (_, { rejectWithValue }) => {

        try {

            const { data } = await api.get(`/api/v1/organizations/create/ems_contact_us/`);

            console.log("returning ", data);
            return data.results;
        } catch (error) {
            // Return custom error message from the API if any
            if (error.response && error.response.data) {

                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const get_enquiry = createAsyncThunk(
    "vehicle/get_enquiry",
    async (_, { rejectWithValue }) => {

        try {

            const { data } = await api.get(`/api/v1/organizations/create/enquire_now/`);

            console.log("returning ", data);
            return data.results;
        } catch (error) {
            // Return custom error message from the API if any
            if (error.response && error.response.data) {

                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const get_dealer = createAsyncThunk(
    "vehicle/get_dealer",
    async (_, { rejectWithValue }) => {

        try {

            const { data } = await api.get(`/api/v1/organizations/create/become_a_dealer/`);

            console.log("returning ", data);
            return data.results;
        } catch (error) {
            // Return custom error message from the API if any
            if (error.response && error.response.data) {

                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);