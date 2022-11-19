import React from "react";

type DeleteConfirmationProps = {
  todoID: string;
};

export const DeleteConfirmation = ({ todoID }: DeleteConfirmationProps) => {
  return (
    <div className="bg-blueGray p-4 rounded-lg w-72">
      <p className="text-end">Você tem certeza que deseja excluir?</p>
      <div className="flex gap-4 justify-end mt-4">
        <button className="px-4 py-1 bg-gray-200/5 rounded-lg">Cancelar</button>
        <button className="px-8 py-1 bg-accent rounded-lg">Sim</button>
      </div>
    </div>
  );
};
