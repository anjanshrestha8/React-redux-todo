import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../redux/slices";

const AddTodos = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <>
      <div className="mb-4 d-flex">
        <input
          type="text"
          className="form-control me-2" // Use form-control for input styling
          placeholder="Enter new tasks..."
          onChange={(event) => setInput(event.target.value)}
          value={input}
        />
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default AddTodos;
