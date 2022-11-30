import { useTodoStore } from "../../store/todoStore";

import { AnimatePresence } from "framer-motion";

import { TodoContent } from "../TodoContent";
import { EmptyTodo } from "../EmptyTodo";

type Props = {};

export const TodoList = (props: Props) => {
  const todos = useTodoStore((state) => state.todos);

  console.log(todos);
  return (
    <div className="my-8 w-[70%]">
      <div
        className={`relative flex max-h-[25rem] flex-col gap-4 2xl:max-h-[35rem] ${
          todos.length > 0 ? "overflow-y-auto" : "overflow-hidden"
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
