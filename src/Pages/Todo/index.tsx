import React from "react";
import { NewTodo } from "../../components/NewTodo";
import { RemoveAllButton } from "../../components/RemoveAll";
import { TodoList } from "../../components/TodoList";
import { Link } from "react-router-dom";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { motion } from "framer-motion";

type Props = {};

export const Todo = () => (
  <motion.div
    initial={{ opacity: 0, y: "-100%" }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: "-70%" }}
    transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.9] }}
    className="container relative z-10 mx-auto flex flex-col items-center overflow-hidden py-8 sm:p-8"
  >
    <motion.h1
      initial={{ opacity: 0, y: "80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-20%" }}
      transition={{ duration: 1, delay: 0.8, ease: [0.6, 0.01, -0.05, 0.9] }}
      className="text-center text-4xl font-semibold sm:text-left"
    >
      Tasky 2.0
    </motion.h1>
    <NewTodo />
    <RemoveAllButton />
    <TodoList />

    <Link
      to="/about"
      className="absolute right-8 text-3xl brightness-150 transition hover:text-accent sm:right-0"
    >
      <HiOutlineInformationCircle />
    </Link>
  </motion.div>
);
