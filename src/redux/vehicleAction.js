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