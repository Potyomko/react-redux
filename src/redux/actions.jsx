import { nanoid } from "nanoid";

export const addTask =(text)=>( {
    type: 'tasks/addTask',
    payload: {
        id: nanoid(),
        text,
        completed: false,
    }
})

export const deleteTask = (taskId) => ({
    type: 'tasks/deleteTask',
    payload: taskId
})

export const toggleCompleted = (taskId) => ({
    type: 'tasks/toggleCompleted',
    payload: taskId
})

export const changeFilter = (value) => ({
    tyoe: 'filters/changeFilter',
    payload: value
})