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
      bounce: 0.3,
    },
  };

  return (
    <Menu as={motion.div}>
      {({ open }) => (
        <>
          <Menu.Button className="rounded-full p-2 outline-none transition hover:bg-gray-500/30">
            <HiOutlineDotsVertical className="h-5 w-5" />
          </Menu.Button>

          <AnimatePresence>
            {open && (
              <Menu.Items
                static
                {...fadeAnimation}
                as={motion.div}
                className="absolute -top-32 -left-2 mt-2 w-48 gap-4 rounded-lg bg-grayish shadow"
              >
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active && "bg-darkGray/50"
                      } flex h-full w-full items-center gap-3 p-4 outline-none hover:text-yellow-300`}
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
                      } flex h-full w-full items-center gap-3 p-4 outline-none hover:text-red-400`}
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
        </>
      )}
    </Menu>
  );
};
