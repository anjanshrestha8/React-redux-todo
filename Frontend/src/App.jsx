import { AddTodos, ListTodo } from "./pages";

const App = () => {
  return (
    <>
      <div className="d-flex justify-content-center aligns-items-center vh-100 mt-5">
        <div>
          <AddTodos />
          <ListTodo />
        </div>
      </div>
    </>
  );
};
export default App;
