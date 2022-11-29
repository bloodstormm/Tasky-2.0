import { AnimatePresence } from "framer-motion";

import { Routes, Route, useLocation } from "react-router-dom";
import { About } from "../../Pages/About";
import { Todo } from "../../Pages/Todo";

export const RoutesContainer = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Todo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
};
