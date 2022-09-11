import { useState } from "react";

export default function Modal({ color, completed, text }) {
  console.log(text);
  //const { id, completed, text, color } = todo;
  const [task, setTask] = useState(text);
  console.log(task);
  const [clr, setClr] = useState(color);
  const [isCompleted, setIsCompleted] = useState(completed);
  console.log(clr);
  const closeModal = () => {
    const ele = document.getElementById("authentication-modal");
    ele.classList.add("hidden");
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    closeModal();
  };
  return (
    <>
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden mr-auto fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
      >
        <div className="relative mr-auto p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={closeModal}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Edit the Transaction
              </h3>
              <form className="space-y-6" onSubmit={handleUpdate}>
                <div className="flex justify-start items-center p-2 bg-slate-800 rounded  hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
                  <div
                    className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
                      completed &&
                      "border-green-500 focus-within:border-green-500"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isCompleted}
                      onChange={() => setIsCompleted(!isCompleted)}
                      className="opacity-0 absolute rounded-full"
                    />
                    {isCompleted && (
                      <svg
                        className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                        viewBox="0 0 20 20"
                      >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                      </svg>
                    )}
                  </div>

                  <div
                    className={`select-none flex-1 bg-indigo-0  ${
                      isCompleted && "line-through"
                    }`}
                  >
                    <input
                      className="bg-transparent width-100 text-white rounded bg-slate-900 pl-2 outline-0 "
                      type="text"
                      value={task}
                      onChange={(e) => {
                        console.log("onChange");
                      }}
                    />
                  </div>

                  {/* <div
                    className={`flex-shrink-0 h-4 w-4  ml-auto cursor-pointer
        }`}
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
                  </div> */}

                  <div
                    className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500 ${
                      clr === "green" && "bg-green-500"
                    }`}
                    onClick={() => setClr("green")}
                  ></div>

                  <div
                    className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500 ${
                      clr === "yellow" && "bg-yellow-500"
                    }`}
                    onClick={() => setClr("yellow")}
                  ></div>

                  <div
                    className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500 ${
                      clr === "red" && "bg-red-500"
                    }`}
                    onClick={() => setClr("red")}
                  ></div>
                </div>
                <button
                  type="submit"
                  onClick={handleUpdate}
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Update Transaction
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
