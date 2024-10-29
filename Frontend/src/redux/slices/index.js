import { addTodo, removeTodo, editTodo } from "./todos/todoSlice";
import todoReducer from "./todos/todoSlice";
import { store } from "../store";

export { addTodo, removeTodo, editTodo, todoReducer, store };
