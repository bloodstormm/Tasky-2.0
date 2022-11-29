import { motion, useIsPresent, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useTodoStore } from "../../store/todoStore";
import { TodoType } from "../../types/TodoType";
import { EditTodoModal } from "../EditTodoModal";
import { TodoOptions } from "../TodoOptions";

type Props = {
  todo: TodoType;
};

export const TodoContent = ({ todo }: Props) => {
  const markAsCompleted = useTodoStore((state) => state.markAsCompleted);

  const isPresent = useIsPresent();

  const animations = {
    layout: true,
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", ease: "easeInOut", duration: 0.7 },
  };

  return (
    <motion.div
      {...animations}
      style={{
        position: isPresent ? "relative" : "absolute",
      }}
      key={todo.id}
      className={`${todo.status_completed && "bg-[#13131a] line-through"} 
        z-0 flex w-full items-center justify-between rounded-lg  bg-[#232930] py-7 px-8 `}
    >
      <div className="flex gap-4">
        <input
          type="checkbox"
          name="checkbox"
          checked={todo.status_completed}
          className="h-6 w-6 rounded-lg bg-[#2d333a] transition checked:bg-accent hover:ring-2 hover:ring-accent/60
            hover:checked:bg-accent focus:ring-accent/40 focus:ring-offset-0 focus:checked:bg-accent "
          onClick={() => markAsCompleted(todo.id)}
        />
        <p>{todo.content}</p>
      </div>
      <div className="relative z-[1]">
        <TodoOptions todoID={todo.id} todoContent={todo.content} />
      </div>
    </motion.div>
  );
};
