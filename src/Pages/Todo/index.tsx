import { NewTodo } from "../../components/NewTodo";
import { TodoList } from "../../components/TodoList";
import { Link } from "react-router-dom";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { motion } from "framer-motion";

export const Todo = () => (
  <motion.div
    initial={{ opacity: 0, y: "10%" }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: "-10%"}}
    transition={{ duration: 1.5, type: 'spring', bounce: 0.3 }}
    className="container relative z-10 mx-auto flex flex-col items-center py-8 sm:p-8 lg:overflow-hidden"
  >
    <motion.h1
      initial={{ opacity: 0, y: "20%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-20%" }}
      transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
      className="text-center text-4xl font-semibold sm:text-left"
    >
      Tasky 2
    </motion.h1>
    <NewTodo />
    <TodoList />

    <Link
      to="/about"
      className="absolute right-8 text-3xl brightness-150 transition hover:text-accent 2xl:right-0"
    >
      <HiOutlineInformationCircle />
    </Link>
  </motion.div>
);
