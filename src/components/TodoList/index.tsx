import { useTodoStore } from "../../store/todoStore";

import { FiTrash, FiEdit2 } from "react-icons/fi";
import { useState } from "react";
import { EditTodoModal } from "../EditTodoModal";

type Props = {};

export const TodoList = (props: Props) => {
  const { markAsCompleted, removeTodo, todos } = useTodoStore();
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const [todoID, setTodoID] = useState("");
  const [todoContent, setTodoContent] = useState("");

  const openModal = (todoID: string, todoContent: string) => {
    setEditModalOpen(true);

    setTodoID(todoID);
    setTodoContent(todoContent);
  };

  console.log(todos);
  return (
    <div className="w-2/3 my-8">
      <div className="flex flex-col gap-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`${
              todo.status_completed && "bg-[#1d1d24] line-through"
            } flex items-center justify-between py-6 px-7 bg-blueGray rounded-lg transition duration-500`}
          >
            <div className="flex gap-4">
              <input
                type="checkbox"
                name="checkbox"
                className="bg-blueGray rounded-lg h-6 w-6 checked:bg-accent
              focus:ring-accent/40 focus:ring-offset-0 hover:ring-2 transition"
                onClick={() => markAsCompleted(todo.id)}
              />
              <p className="">{todo.content}</p>
            </div>

            <div className="flex gap-6">
              <button
                className="hover:text-yellow-400 outline-none"
                onClick={() => openModal(todo.id, todo.content)}
              >
                <FiEdit2 className="h-5 w-5" />
              </button>
              <button
                className="hover:text-red-400 outline-none"
                onClick={() => removeTodo(todo.id)}
              >
                <FiTrash className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}

        <EditTodoModal
          isOpen={isEditModalOpen}
          setIsOpen={setEditModalOpen}
          todoContent={todoContent}
          todoID={todoID}
        />
      </div>
    </div>
  );
};
