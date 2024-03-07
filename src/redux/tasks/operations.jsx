import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = 'https://65b92f2bb71048505a8a6162.mockapi.io/';
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (_, thunkAPI) => {
    try {
        const res = await axios.get('tasks');
        return res.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.massage)
    }
})
export const addTasks = createAsyncThunk('tasks/addTasks', async (text, thunkAPI) => {
    try {
        const res = await axios.post('tasks', {text});
        return res.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.massage)
    }
})
export const deleteTasks = createAsyncThunk('tasks/deleteTasks', async (task, thunkAPI) => {
    try {
        const res = await axios.delete(`tasks/${task.id}`);
        return res.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.massage)
    }
})
export const toggleCompleted = createAsyncThunk('tasks/toggleCompleted', async (task, thunkAPI) => {
    try {
        const res = await axios.put(`tasks/${task.id}`, {
            completed: !task.completed,
        })
        return res.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.massage)
    }
})