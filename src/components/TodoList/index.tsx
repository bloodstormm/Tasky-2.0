import { useTodoStore } from "../../store/todoStore";

import { AnimatePresence } from "framer-motion";

import { TodoContent } from "../TodoContent";
import { EmptyTodo } from "../EmptyTodo";

export const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  return (
    <div className="my-8 w-[70%]">
      <div
        className={`relative flex h-[35rem] flex-col items-center gap-4 ${
          todos.length > 0 && "overflow-y-auto"
        } p-4`}
      >
        <AnimatePresence>
          {todos.length > 0 ? (
            todos.map((todo) => <TodoContent todo={todo} key={todo.id} />)
          ) : (
            <EmptyTodo />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
