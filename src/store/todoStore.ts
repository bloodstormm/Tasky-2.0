import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { TodoStoreType } from "../types/TodoStoreType";
import { createTodoSlice } from "./slices/createTodoSlice";

export const useTodoStore = create<TodoStoreType>()(
  devtools(
    persist((set, get) => ({ ...createTodoSlice(set, get) }), {
      name: "todo",
      getStorage: () => localStorage,
    })
  )
);
