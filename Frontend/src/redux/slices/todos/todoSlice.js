import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      task: "test task",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // properties and functions
    addTodo: (state, action) => {
      const newTask = {
        id: nanoid(),
        task: action.payload,
      };
      state.todos.push(newTask);
    },
    removeTodo: (state, action) => {
      const removeId = {
        id: action.payload,
      };

      state.todos = state.todos.filter((todos) => {
        todos.id !== removeId;
      });
    },
  },
});

export const {addTodo,removeTodo} = todoSlice.actions;

export default todoSlice.reducer;
