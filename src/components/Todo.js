import cancelImage from "../assets/images/cancel.png";
import {
  useDeleteToDoMutation,
  useUpdateToDoMutation,
} from "../features/apiSlice";

export default function Todo({ todo }) {
  const { text, id, completed, color } = todo;
  const [updateToDo] = useUpdateToDoMutation();
  const [deleteToDo] = useDeleteToDoMutation();

  const handleEdit = (e) => {
    const element = document.getElementById("authentication-modal");
    console.log(text);
    element.classList.remove("hidden");
  };
  const handleStatusChange = (todoId, status) => {
    updateToDo({
      id: todoId,
      data: {
        completed: !status,
      },
    });
  };
  const handleColorChange = (todoId, color) => {
    updateToDo({
      id: todoId,
      data: {
        color: color,
      },
    });
  };
  const handleDelete = (todoId) => {
    deleteToDo(todoId);
  };

  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        className={`relative rounded-full bg-white border-2 border-gray-400 cursor:pointer w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          completed && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleStatusChange(id, completed)}
          className="opacity-0 absolute rounded-full"
        />
        {completed && (
          <svg
            className="fill-current w-3 h-3 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      <div className={`select-none flex-1 ${completed && "line-through"}`}>
        {text}
      </div>
      <div
        className={`flex-shrink-0 h-4 w-4  ml-auto cursor-pointer
        }`}
        onClick={handleEdit}
      >
        <svg
          className="fill-current w-5 h-5 text-black-500 pointer-events-none"
          viewBox="0 0 36 36"
        >
          <path
            fill="currentColor"
            d="M28 30H6V8h13.22l2-2H6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V15l-2 2Z"
            className="clr-i-outline clr-i-outline-path-1"
          />
          <path
            fill="currentColor"
            d="m33.53 5.84l-3.37-3.37a1.61 1.61 0 0 0-2.28 0L14.17 16.26l-1.11 4.81A1.61 1.61 0 0 0 14.63 23a1.69 1.69 0 0 0 .37 0l4.85-1.07L33.53 8.12a1.61 1.61 0 0 0 0-2.28ZM18.81 20.08l-3.66.81l.85-3.63L26.32 6.87l2.82 2.82ZM30.27 8.56l-2.82-2.82L29 4.16L31.84 7Z"
            className="clr-i-outline clr-i-outline-path-2"
          />
          <path fill="none" d="M0 0h36v36H0z" />
        </svg>
      </div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500 ${
          color === "green" && "bg-green-500"
        }`}
        onClick={() => handleColorChange(id, "green")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500 ${
          color === "yellow" && "bg-yellow-500"
        }`}
        onClick={() => handleColorChange(id, "yellow")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500 ${
          color === "red" && "bg-red-500"
        }`}
        onClick={() => handleColorChange(id, "red")}
      ></div>

      <img
        src={cancelImage}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
        onClick={() => handleDelete(id)}
      />
    </div>
  );
}
