
import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import javascript from "../../../assets/javascript.png";
import typeScript from "../../../assets/typeScript.png";
import react from "../../../assets/react.png";
import git from "../../../assets/git.png";
import github from "../../../assets/github.png";
import node from "../../../assets/node.png";
import nextjs from "../../../assets/nextjs.png";
// import reactNative from "../../../assets/reactNative.png";
import postgres from "../../../assets/postgres.png";
import tailwind from "../../../assets/tailwind.png";
import { Link as ScrollLink } from "react-scroll";

const Techs = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-400",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-400",
    },
    {
      id: 4,
      src: typeScript,
      title: "TypeScript",
      style: "shadow-blue-700",
    },
    {
      id: 5,
      src: react,
      title: "React",
      style: "shadow-cyan-400",
    },
    // {
    //   id: 6,
    //   src: reactNative,
    //   title: "React Native",
    //   style: "shadow-blue-400",
    // },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-cyan-700",
    },
    {
      id: 8,
      src: node,
      title: "Node JS",
      style: "shadow-lime-400",
    },
    {
      id: 9,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 10,
      src: git,
      title: "Git",
      style: "shadow-orange-600",
    },
    {
      id: 11,
      src: github,
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: 12,
      src: postgres,
      title: "PostgreSQL",
      style: "shadow-blue-300",
    }
  ];

  return (
    <section
      name="Technologies"
      className="relative w-full md:h-screen h-unset"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto text-white">
        <div>
          <h2 className="inline pb-1 text-4xl font-bold border-b-4 border-primary-color/40 sm:text-5xl">
          Tecnologías
          </h2>
          <p className="py-6">Estas son las tecnologías con las que he trabajado</p>
        </div>

        <div className="grid w-full grid-cols-2 gap-8 py-8 text-center sm:grid-cols-4 lg:grid-cols-6 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img className="w-20 py-2 mx-auto md:py-4" src={src} alt="" />
              <p className="mt-4 md:mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <ScrollLink
        to="Education"
        smooth
        duration={500}
        className="absolute cursor-pointer bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 hover:text-primary-color"
      >
        <i className="text-gray-400 bx bx-chevron-down text-7xl animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>
    </section>
  );
};

export default Techs;
