import { motion } from "framer-motion";
import imgAbout from "../../assets/imgAbout.jpg";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { VscArrowLeft } from "react-icons/vsc";

type Props = {};

export const About = (props: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "50%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "50%" }}
      transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.9] }}
      className="container mx-auto h-screen w-screen px-8 xl:px-0 "
    >
      <div
        className="relative mx-auto flex h-full flex-col items-center gap-x-10 text-center
        lg:flex-row lg:pt-16 lg:text-left 2xl:gap-x-24"
      >
        <motion.div
          initial={{ opacity: 0, y: "-30%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-30%" }}
          transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.9] }}
          className="order-2 flex-1 lg:order-none"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.9] }}
            src={imgAbout}
            alt=""
            className="mx-auto mb-10 w-full rounded-3xl p-4 sm:mb-0 md:w-3/5 lg:w-full xl:w-4/5"
          />
        </motion.div>
        <div className="z-10 mt-20 flex flex-1 flex-col items-center justify-center p-8 pb-14 sm:pt-36 lg:w-auto lg:items-start lg:pt-0 xl:p-0">
          <h1
            className="font-primary mb-8 text-[40px] font-bold uppercase leading-[120%] tracking-wider lg:text-[52px]
           xl:mb-12 xl:text-[66px] 2xl:text-[82px]"
          >
            Sobre o Tasky
          </h1>
          <p className="mb-8">
            Olá! me chamo Nícolas e desenvolvi essa aplicação para por o que
            aprendi usando Zustand e Framer Motion nesses ultimos meses.
          </p>
          <p className="mb-8">
            Esse Webapp se trata de uma segunda versão mais sofisticada de um
            ToDo que havia feito em 2021, usando Vue.JS e Composition API,
            chamado:
            <a
              href="https://github.com/bloodstormm/tasky"
              target="_blank"
              className="pl-1 font-semibold text-accent underline decoration-wavy brightness-150"
            >
              Tasky
            </a>
          </p>
          <p>
            Dessa vez, adicionei algumas funcionalidades ao mesmo como a
            possibilidade de editar a tarefa, além delas ficarem salvas no
            LocalStorage, graças ao Zustand. Ah, e também que algumas animações
            pra deixar tudo mais flúido 😊.
          </p>
          <p className="mt-14 mb-2 text-lg">Me encontre também em:</p>
          <div className="mt-2 mb-6 flex justify-center space-x-5">
            <a
              href="https://github.com/bloodstormm/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg transform cursor-pointer rounded-xl bg-accent py-2 
              px-5 transition duration-300 hover:scale-110"
            >
              <AiFillGithub className="text-3xl" />
            </a>
            <a
              href="https://www.instagram.com/_nicolasantoss/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform cursor-pointer rounded-xl bg-accent py-2 px-5 
              transition duration-300 hover:scale-110"
            >
              <AiOutlineInstagram className="text-3xl" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5512988770308"
              target="_blank"
              rel="noopener noreferrer"
              className="transform cursor-pointer rounded-xl bg-accent py-2 px-5 
              transition duration-300 hover:scale-110"
            >
              <AiOutlineWhatsApp className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-malachias/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform cursor-pointer rounded-xl bg-accent py-2 px-5 
              transition duration-300 hover:scale-110"
            >
              <AiFillLinkedin className="text-3xl" />
            </a>
          </div>

          <Link
            to="/"
            className="absolute top-0 right-8 mt-10 flex items-center gap-3 rounded-lg bg-accent/20 
            px-3 py-3 brightness-150 transition hover:bg-accent/50 xl:right-0"
          >
            <VscArrowLeft />
            <p>Voltar</p>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};
