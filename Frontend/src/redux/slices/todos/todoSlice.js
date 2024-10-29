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

      state.todos = state.todos.filter((todo) => {
        todo.id !== removeId;
      });
    },
    editTodo: (state, action) => {
      const { editId, editTask } = action.payload;
      const findEditingTask = state.todos.find((todo) => {
        console.log(editId);
        console.log(todo.id);

        todo.id === editId;
      });
      console.log(findEditingTask);
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
