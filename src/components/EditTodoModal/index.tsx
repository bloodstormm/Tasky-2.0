import { Dialog } from "@headlessui/react";
import { useTodoStore } from "../../store/todoStore";
import { ITaskInput } from "../NewTodo";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { FiTrash } from "react-icons/fi";

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
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  // Botão de remover dentro do modal
  const removeTask = () => {
    setIsOpen(false);
    removeTodo(todoID);
  };

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

  // Animacoes do Framer Motion
  const showAnimation = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", ease: "easeInOut", duration: 0.7 },
  };
  const fadeAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { ease: "easeInOut", duration: 0.3 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <Dialog.Overlay
            as={motion.div}
            {...fadeAnimation}
            className="fixed inset-0 bg-[#221012]/40"
          />
          <Dialog.Panel
            {...showAnimation}
            as={motion.div}
            className="z-50 flex h-full flex-col items-center justify-center"
          >
            <div className="relative h-1/2 min-w-[800px] rounded-xl bg-darkGray p-8">
              <Dialog.Title className="text-3xl font-semibold">
                Editar Tarefa: ✏️
              </Dialog.Title>

              <div className="mt-8 border-t border-gray-600"></div>
              <form
                onSubmit={handleSubmit(updateTask)}
                className=" flex items-center gap-4 pt-8"
              >
                <label htmlFor="task" className="min-w-[180px] text-lg">
                  Conteúdo da tarefa:
                </label>
                <input
                  type="text"
                  defaultValue={todoContent}
                  {...register("task")}
                  className=" relative my-2 w-full rounded-lg border-gray-700 bg-grayish p-4 outline-none duration-300 hover:border-accent focus:border-accent focus:ring-0"
                />
                <p className="mt-2 font-medium text-red-400">
                  {errors.task?.message}
                </p>
              </form>
              <div className="absolute inset-x-0 bottom-0 flex w-full items-center justify-between rounded-b-xl bg-grayish p-4">
                <button
                  className="flex items-center gap-3 p-4 outline-none hover:text-red-400"
                  onClick={removeTask}
                >
                  <FiTrash className="h-5 w-5" />
                  <p>Excluir</p>
                </button>

                <div className="flex gap-4">
                  <button
                    type="reset"
                    className="h-12 w-28 rounded-lg bg-gray-200/5 transition hover:bg-gray-700/20"
                    onClick={() => {
                      setIsOpen(false), reset();
                    }}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="hover:bg-accent/ h-12 w-28 rounded-lg bg-accent transition hover:contrast-125"
                    onClick={handleSubmit(updateTask)}
                  >
                    Atualizar
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
