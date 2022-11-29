import { useTodoStore } from "../../store/todoStore";
export const RemoveAllButton = () => {
  const todos = useTodoStore((state) => state.todos);
  const removeAll = useTodoStore((state) => state.removeAll);

  return (
    <>
      {todos.length > 0 && (
        <button
          className="mt-8 rounded-lg bg-accent p-4 hover:contrast-125"
          onClick={removeAll}
        >
          Remover tudo
        </button>
      )}
    </>
  );
};
