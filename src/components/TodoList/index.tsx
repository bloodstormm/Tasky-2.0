import { useTodoStore } from "../../store/todoStore";

import { AnimatePresence } from "framer-motion";

import { TodoContent } from "../TodoContent";

type Props = {};

export const TodoList = (props: Props) => {
  const todos = useTodoStore((state) => state.todos);

  console.log(todos);
  return (
    <div className="my-8 w-[70%]">
      <div className="relative flex max-h-[32rem] flex-col items-center justify-center gap-4 p-4">
        <AnimatePresence>
          {todos.map((todo) => (
            <TodoContent todo={todo} key={todo.id} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
