import { useForm } from "react-hook-form";
import { BsArrowReturnRight } from "react-icons/bs";
import { useTodoStore } from "../../store/todoStore";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RemoveAllButton } from "../../components/RemoveAll";
import { motion } from "framer-motion";

export interface ITaskInput {
  task: string;
}

export const NewTodo = () => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const todos = useTodoStore((state) => state.todos);

  // Não permitir adicionar se estiver vazio
  const validationTask = yup.object().shape({
    task: yup.string().required("Preencha esse campo!"),
  });

  // Hook do useForm()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ITaskInput>({ resolver: yupResolver(validationTask) });

  // Lógica ao enviar o formulário
  const addTask = ({ task }: ITaskInput) => {
    // Adicionando task via Zustand
    addTodo(task);
    reset();
  };

  return (
      <div
        className="flex relative w-3/5 items-center justify-center gap-4 mt-8 xl:mt-12 2xl:mt-16"
      >
        <form
          onSubmit={handleSubmit(addTask)}
          className="text-center w-full"
        >
          <motion.div
            animate={{ width: todos.length > 0 ? "calc(100% - 14rem)" : "100%" }}
            transition={{ duration: 1, type: "spring", bounce: 0 }}
            className="relative z-30 focus:w-[55%]"
          >
            <input
             
              type="text"
              className="relative w-full rounded-lg border-gray-700 bg-grayish/40
            p-4 outline-none backdrop-blur-sm backdrop-brightness-125 duration-300 focus:border-accent focus:p-6 focus:ring-0"
              placeholder="Criar uma tarefa..."
              {...register("task")}
            />
            <button className="absolute top-0 right-4 flex h-full items-center">
              <BsArrowReturnRight className="h-5 w-5" />
            </button>
          </motion.div>
          {errors.task && (
            <p className="mt-2 font-medium text-red-400">
              {errors.task?.message}
            </p>
          )}
        </form>
        <div className="absolute right-0">
        <RemoveAllButton />
        </div>
      </div>
  );
};
