import { Menu } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useTodoStore } from "../../store/todoStore";
import { EditTodoModal } from "../EditTodoModal";
type Props = {
  todoID: string;
  todoContent: string;
};

export const TodoOptions = ({ todoID, todoContent }: Props) => {
  const removeTodo = useTodoStore((state) => state.removeTodo);

  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const fadeAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: {
      type: "spring",
      ease: "easeInOut",
      duration: 0.7,
      bounce: 0.2,
    },
  };

  return (
    <Menu as={motion.div}>
      {({ open }) => (
        <div className="flex">
          <AnimatePresence>
            <Menu.Button
              as={motion.button}
              className={` ${
                open && "hidden"
              } rounded-full p-2 outline-none transition-all hover:bg-gray-500/30`}
            >
              <HiOutlineDotsVertical className="h-5 w-5" />
            </Menu.Button>
          </AnimatePresence>

          <AnimatePresence>
            {open && (
              <Menu.Items
                static
                {...fadeAnimation}
                as={motion.div}
                className="flex w-64 gap-4 rounded-lg"
              >
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active && "bg-darkGray/50"
                      } flex h-full w-full items-center gap-3 rounded-lg p-4 outline-none hover:text-yellow-300`}
                      onClick={() => setEditModalOpen(true)}
                    >
                      <FiEdit2 className="h-5 w-5" />
                      <p>Editar</p>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active && "bg-darkGray/50"
                      } flex h-full w-full items-center gap-3 rounded-lg p-4 outline-none hover:text-red-400`}
                      onClick={() => removeTodo(todoID)}
                    >
                      <FiTrash className="h-5 w-5" />
                      <p>Excluir</p>
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            )}
          </AnimatePresence>

          <EditTodoModal
            isOpen={isEditModalOpen}
            setIsOpen={setEditModalOpen}
            todoContent={todoContent}
            todoID={todoID}
          />
        </div>
      )}
    </Menu>
  );
};
