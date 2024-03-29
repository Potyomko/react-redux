import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/';
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
export const register = createAsyncThunk('auth/signup', async (body, thunkApi) => {
    try {
        const res = await axios.post('users/signup', body)
        setAuthHeader(res.data.token);
        return res.data; 
    } catch (error) {
        thunkApi.rejectWithValue(error.message)
        console.log(error);
    }
})

export const login = createAsyncThunk('auth/login', async (body, thunkApi) => {
    try {
        const res = await axios.post('users/login', body)
        setAuthHeader(res.data.token);
        return res.data; 
    } catch (error) {
        thunkApi.rejectWithValue(error.message)

    }
})

export const logout = createAsyncThunk('auth/logout', async (body, thunkApi) => {
    try {
        const res = await axios.post('users/logout', body)
        clearAuthHeader(res.data.token);
        return res.data; 
    } catch (error) {
        thunkApi.rejectWithValue(error.message)
        console.log(error);
    }
})
export const refresh = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
    try {
        const state = thunkApi.getState();
        if (state.auth.token === null) return thunkApi.rejectWithValue('відсутній токен');
        setAuthHeader(state.auth.token)
        const res = await axios.get('users/me')
        return res.data;
    } catch (error) {
        thunkApi.rejectWithValue(error.message);
    }
})