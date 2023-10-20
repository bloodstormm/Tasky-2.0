import { useTodoStore } from "../../store/todoStore";
import { AnimatePresence, delay, motion } from "framer-motion";

export const RemoveAllButton = () => {
  const todos = useTodoStore((state) => state.todos);
  const removeAll = useTodoStore((state) => state.removeAll);

  return (

    <AnimatePresence initial={false}>
      {todos.length > 0 && (
        <motion.button
        whileTap={{scale: 0.90}}
          initial={{ opacity: 0, y: "20%" }}
          animate={{ opacity: 1, y: 0, transition: {delay: 0.5, type: "spring"}}}
          exit={{ opacity: 0, y: "-30%" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
          className="w-52 rounded-lg bg-accent p-4 hover:contrast-125"
          onClick={removeAll}
        >
          Remover todas as tarefas
        </motion.button>
      )}
    </AnimatePresence>

  );
};
