import { statusFilters } from './constants';
 import {createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchTasks, addTasks, deleteTasks, toggleCompleted } from './operations';


 const filtersSlice = createSlice({
   name: "filters",
   initialState: {
     status: statusFilters.all,
   },
   reducers: {
     setStatusFilter(state, action) {
       state.status = action.payload;
     },
   },
 });


     export const taskSlice = createSlice({
         name: 'tasks',
       initialState: {
         items: [],
         isLoading: false,
         error: null,
         },
      //   //  reducers:{
      //      addTask(state, action){
      //        state.push(action.payload)
      //        console.log(action.payload);
      //      },
      //      deleteTask(state, action){
      //        return state.filter(task => task.id !== action.payload)
      //      },
      //      toggleCompleted(state, action){
      //        return state.map(task => {
      //          if (task.id !== action.payload) {
      //            return task;
      //          }
      //          return {...task, completed: !task.completed};
      //        })
      //      }
       //    }
       extraReducers(builder) {
         builder
           .addCase(fetchTasks.fulfilled, (state, action) => {
             state.items = action.payload
           })
           .addCase(addTasks.fulfilled, (state, action) => {
             state.items.push(action.payload)
           })
           .addCase(deleteTasks.fulfilled, (state, action) => {
             const idx = state.items.findIndex((item) => item.id === action.payload.id)
             state.items.splice(idx, 1);
         })
           .addCase(toggleCompleted.fulfilled, (state, action) => {
             const idx = state.items.findIndex((item) => item.id === action.payload.id)
             state.items.splice(idx, 1, action.payload);
         })
           .addMatcher(isAnyOf(fetchTasks.pending, addTasks.pending, deleteTasks.pending), (state) => {
             state.isLoading = true;
           })
         .addMatcher(isAnyOf(fetchTasks.rejected, addTasks.rejected, deleteTasks.rejected), (state, action) => {
             state.error = action.payload;
         })
         .addMatcher(isAnyOf(fetchTasks.fulfilled, addTasks.fulfilled, deleteTasks.fulfilled), (state) => {
           state.isLoading = false;
           state.error = null;
           })
       }
       })

 export const { setStatusFilter } = filtersSlice.actions;
 export const filtersReducer = filtersSlice.reducer;
 export const tasksReducer = taskSlice.reducer;