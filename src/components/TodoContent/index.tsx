import { motion, useIsPresent } from "framer-motion";
import { useTodoStore } from "../../store/todoStore";
import { TodoType } from "../../types/TodoType";
import { TodoOptions } from "../TodoOptions";

type Props = {
  todo: TodoType;
};

export const TodoContent = ({ todo }: Props) => {
  const markAsCompleted = useTodoStore((state) => state.markAsCompleted);

  const isPresent = useIsPresent();

  const animations = {
    layout: true,
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1, height: "auto" },
    exit: { scale: 0, opacity: 0 },
    transition: {
      type: "spring",
      ease: "easeInOut",
      bounce: 0,
      duration: 0.7,
    },
  };

  return (
    <motion.div
      {...animations}
      style={{
        position: isPresent ? "relative" : "absolute",
      }}
      key={todo.id}
      className={`${todo.status_completed && "bg-[#24272c]"} 
        z-0 flex min-h-[5rem] w-full items-center justify-between transition-colors rounded-lg bg-[#232930] px-7 `}
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
        <p className={`${todo.status_completed && "line-through"}`}>
          {todo.content}
        </p>
      </div>
      <div className="relative z-[1]">
        <TodoOptions todoID={todo.id} todoContent={todo.content} />
      </div>
    </motion.div>
  );
};
