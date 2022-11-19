import { Dialog } from "@headlessui/react";
import { useTodoStore } from "../../store/todoStore";
import { ITaskInput } from "../NewTodo";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

type EditTodoModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  todoContent: string;
  todoID: string;
};

export const EditTodoModal = ({
  isOpen,
  setIsOpen,
  todoContent,
  todoID,
}: EditTodoModalProps) => {
  const { updateTodo } = useTodoStore();

  // Não permitir adicionar se estiver vazio
  const validationTask = yup.object().shape({
    task: yup.string().required("Preencha esse campo!"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ITaskInput>({ resolver: yupResolver(validationTask) });

  const updateTask = ({ task }: ITaskInput) => {
    // Atualizando task via Zustand
    updateTodo(todoID, task);
    reset();
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="z-50 fixed inset-0 flex items-center justify-center"
    >
      <Dialog.Overlay className="fixed inset-0  bg-gray-900/40 " />
      <Dialog.Panel className="z-50 items-center justify-center h-full flex flex-col">
        <div className="bg-darkBlue h-1/2 p-8 min-w-[800px] rounded-xl">
          <Dialog.Title className="text-4xl font-semibold">
            Editar Tarefa: ✏️
          </Dialog.Title>

          <form onSubmit={handleSubmit(updateTask)} className="mt-10">
            <label htmlFor="task" className="text-lg">
              Conteúdo da tarefa:
            </label>
            <input
              type="text"
              defaultValue={todoContent}
              {...register("task")}
              className="p-4 relative my-2 bg-blueGray rounded-lg outline-none w-full transition-all duration-300"
            />
            <p className="text-red-400 font-medium mt-2">
              {errors.task?.message}
            </p>

            <div className="flex gap-4 mt-12">
              <button type="submit" className="w-28 h-12 bg-accent rounded-lg">
                Atualizar
              </button>
              <button
                type="reset"
                className="w-28 h-12 bg-gray-200/5 rounded-lg"
                onClick={() => {
                  setIsOpen(false), reset();
                }}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};
