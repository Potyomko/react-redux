import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tasksApi = createApi({
    reducerPath: 'tasksApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://65b92f2bb71048505a8a6162.mockapi.io/'
    }),
    tagTypes: ['Tasks'],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => `tasks`,
            providesTags: ['Tasks'],
        }),
        deleteTask: builder.mutation({
            query: (taskId) => ({
                url: `tasks/${taskId}`,
                method: 'DELETE',
                providesTags: ['Tasks'],
            }),
        }),
    })
})
export const { useGetTasksQuery, useDeleteTaskMutation } = tasksApi;