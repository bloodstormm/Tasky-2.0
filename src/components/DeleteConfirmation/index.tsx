import React from "react";

type DeleteConfirmationProps = {
  todoID: string;
};

export const DeleteConfirmation = ({ todoID }: DeleteConfirmationProps) => {
  return (
    <div className="w-72 rounded-lg bg-grayish p-4">
      <p className="text-end">Você tem certeza que deseja excluir?</p>
      <div className="mt-4 flex justify-end gap-4">
        <button className="rounded-lg bg-gray-200/5 px-4 py-1">Cancelar</button>
        <button className="rounded-lg bg-accent px-8 py-1">Sim</button>
      </div>
    </div>
  );
};
