import { configureStore} from '@reduxjs/toolkit';
 import {filtersReducer, tasksReducer} from '../redux/slices';

export const store = configureStore({
  reducer: {
     tasks: tasksReducer,
     filters: filtersReducer
   }
 })