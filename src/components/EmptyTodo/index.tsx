import { motion, useIsPresent } from "framer-motion";
import emtyTodo from "../../assets/empty.svg";

export const EmptyTodo = () => {
  const isPresent = useIsPresent();
  return (
    <motion.div
      initial={{ opacity: 0, y: "20%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "20%" }}
      style={{
        position: isPresent ? "relative" : "absolute",
      }}
      transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] }}
      className=" mx-auto text-center"
    >
      <img src={emtyTodo} alt="" className="mx-auto w-1/2 2xl:w-full" />
      <h1 className="mt-12 text-4xl font-semibold ">
        Parece que está tudo calmo por aqui.
      </h1>
      <p className="mt-2">Adicione uma nova tarefa!</p>
    </motion.div>
  );
};
