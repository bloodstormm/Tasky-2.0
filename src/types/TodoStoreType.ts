import { TodoType } from "./TodoType";

export type TodoStoreType = {
  todos: TodoType[];

  addTodo: (content: string) => void;
  getTodoByID: (todoID: string) => TodoType | {};
  markAsCompleted: (todoID: string) => void;
  updateTodo: (todoID: string, newContent: string) => void;
  removeTodo: (todoID: string) => void;
  removeAll: () => void;
};
