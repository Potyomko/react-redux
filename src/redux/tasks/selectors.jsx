export const getTasks = (state) => { console.log(state); return state.tasks.items };
export const getIsLoading = state => state.tasks.isLoading;
export const getError = state => state.tasks.error;
export const getFiltersStatus = state => state.filters.status;