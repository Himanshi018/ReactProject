import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
    // state gives actual present situations of a initial state
    // action gives values required to perform anything for ex id
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id
            !== action.payload)
        },
        // update: (state, action) => {
        //     state.todos = state.todos.filter((todo) => todo.id
        //     === action.payload)
        // }

    }
})

export const {addTodo, removeTodo, } = todoSlice.actions

export default todoSlice.reducer

