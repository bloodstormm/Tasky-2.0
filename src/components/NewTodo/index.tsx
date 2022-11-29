import { useForm } from "react-hook-form";
import { BsArrowReturnRight } from "react-icons/bs";
import { useTodoStore } from "../../store/todoStore";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface ITaskInput {
  task: string;
}

export const NewTodo = () => {
  const addTodo = useTodoStore((state) => state.addTodo);

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
    console.log(task);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(addTask)}
        className="mt-8 w-full text-center sm:mt-16"
      >
        <div className="relative mx-auto w-3/4 focus:w-[55%] sm:w-1/2">
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
        </div>
        <p className="mt-2 font-medium text-red-400">{errors.task?.message}</p>
      </form>
    </>
  );
};
