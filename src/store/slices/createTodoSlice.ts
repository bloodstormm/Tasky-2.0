import { StoreApi } from "zustand";
import { TodoStoreType } from "../../types/TodoStoreType";
import { v4 } from "uuid";

export const createTodoSlice = (
  set: StoreApi<TodoStoreType>["setState"],
  get: StoreApi<TodoStoreType>["getState"]
): TodoStoreType => ({
  todos: [],

  addTodo: (content) =>
    set((state) => ({
      todos: [...state.todos, { id: v4(), content, status_completed: false }],
    })),

  getTodoByID: (todoID) =>
    get().todos.length > 0
      ? get().todos.find((todo) => todo.id === todoID)!
      : {},

  markAsCompleted: (todoID) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === todoID
          ? { ...todo, status_completed: !todo.status_completed }
          : todo
      ),
    })),

  updateTodo: (todoID, newContent) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === todoID ? { ...todo, content: newContent } : todo
      ),
    })),

  removeTodo: (todoID) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id != todoID),
    })),

  removeAll: () => set((state) => ({ todos: [] })),
});
