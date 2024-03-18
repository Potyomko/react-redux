import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

export const selectTasks = (state) => { console.log(state); return state.tasks.items };
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;
export const selectFiltersStatus = state => state.filters.status;

export const visibleTasks = createSelector([selectTasks, selectFiltersStatus], (tasks, statusFilter) => {
    return tasks.filter((task) => {
      switch (statusFilter) {
        case statusFilters.active:
          return !task.completed;
        case statusFilters.completed:
            return task.completed;
        default:
          return task;
      }
      })
})


export const count = createSelector([selectTasks], (tasks) => {
    return tasks.reduce((acc, task) => {
            if (task.completed) {
                acc.completed += 1
            } else {
                acc.active += 1
            }
            return acc
        },
            { active: 0, completed: 0, })
    })