import { useSelector } from "react-redux";
import { useGetToDosQuery } from "../features/apiSlice";
import Todo from "./Todo";

export default function TodoList() {
  const { data: todos, isLoading, isError } = useGetToDosQuery();
  const { status, selectedColors } = useSelector((state) => state.filters);

  let filteredTodos = todos;
  switch (status) {
    case "Complete":
      filteredTodos = todos.filter((todo) => todo.completed === true);
      console.log(filteredTodos);
      break;
    case "Incomplete":
      filteredTodos = todos.filter((todo) => todo.completed === false);
      console.log(filteredTodos);
      break;
    default:
      filteredTodos = todos;
      break;
  }
  //What to render
  let content = null;

  if (isLoading) {
    content = <p>Loading ...</p>;
  }
  if (!isLoading && isError) {
    content = <p>Error ...</p>;
  }
  if (!isLoading && !isError) {
    content = (
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {todos
          .filter((todo) => {
            switch (status) {
              case "Complete":
                return todo.completed;
              case "Incomplete":
                return !todo.completed;
              default:
                return true;
            }
          })
          .filter((todo) => {
            if (selectedColors.length > 0) {
              return selectedColors.includes(todo.color);
            } else {
              return true;
            }
          })
          .map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
      </div>
    );
  }

  return content;
}
