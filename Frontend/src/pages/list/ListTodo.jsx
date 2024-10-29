import { useSelector, useDispatch } from "react-redux";

import { editTodo, removeTodo } from "../../redux/slices/todos/todoSlice";

const ListTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);
  console.log(todos);

  //handle remove event
  const handelRemove = (id) => {
    dispatch(removeTodo(id));
  };

  // handle edit function
  const handleEdit = (editId) => {
    const editTask = prompt("Edit your task..");

    if (editTask) {
      dispatch(editTodo({ editId, editTask }));
    }
  };
  return (
    <>
      <div className="container mt-4">
        <h2>Kam ho hai</h2>
        <ul className="list-group mt-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="list-group-item d-flex justify-content-between align-items-center "
            >
              <div>{todo.task}</div>
              <div className="d-flex gp-2">
                <button
                  className="btn btn-danger btn-sm me-2"
                  onClick={() => {
                    handelRemove(todo.id);
                  }}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => {
                    handleEdit(todo.id);
                  }}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListTodo;
