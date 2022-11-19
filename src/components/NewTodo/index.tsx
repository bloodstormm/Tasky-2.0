import { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BsArrowReturnRight } from "react-icons/bs";
import { useTodoStore } from "../../store/todoStore";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface ITaskInput {
  task: string;
}

export const NewTodo = () => {
  const { addTodo, removeAll } = useTodoStore();

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
      <form onSubmit={handleSubmit(addTask)} className="w-full mt-16">
        <div className="relative w-1/2 focus:w-[55%] mx-auto">
          <input
            type="text"
            className="p-4 relative focus:p-6 bg-blueGray rounded-lg outline-none w-full transition-all duration-300"
            placeholder="Criar uma tarefa..."
            {...register("task")}
          />
          <button className="flex items-center h-full top-0 absolute right-4">
            <BsArrowReturnRight className="w-5 h-5" />
          </button>
        </div>
        <p className="text-red-400 font-medium mt-2">{errors.task?.message}</p>
      </form>
      <button className="mt-8 bg-accent rounded-lg p-4" onClick={removeAll}>
        Remover tudo
      </button>
    </>
  );
};
