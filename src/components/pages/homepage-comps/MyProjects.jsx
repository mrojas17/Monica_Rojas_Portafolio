import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
// import { Link } from "react-router-dom";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ModalInfo } from "../../ModalInfo";
import ProjectCard from "../../ProjectCard";
import projects from "../../../utils/constants";

const MyProjects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [SelectedProject, setSelectedProject] = useState({});

  const handleModalInfo = (project) => {
    setModalIsOpen(true);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section
      name="Projects"
      className="relative w-full text-white md:h-screen h-unset"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="mb-4">
          <h2 className="inline pb-1 text-4xl font-bold border-b-4 border-primary-color/40 sm:text-5xl">
            Proyectos
          </h2>
          <p className="py-6">Echa un vistazo a algunos de mis trabajos aquí</p>
        </div>

        <div className="grid gap-8 mb-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              setSelectedProject={setSelectedProject}
              handleModalInfo={handleModalInfo}
            />
          ))}
        </div>
        
        {/* <div className="flex justify-end mr-4">
          <Link
            to="projects"
            className="flex items-center text-gray-300 cursor-pointer hover:underline hover:underline-offset-4 hover:text-primary-color/60"
          >
            Ver más proyectos
            <MdOutlineKeyboardArrowRight size={20} />
          </Link>
        </div> */}
      </div>

      <ScrollLink
        to="Technologies"
        smooth
        duration={500}
        className="absolute cursor-pointer bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 hover:text-primary-color"
      >
        <i className="text-gray-400 bx bx-chevron-down text-7xl animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>

      {modalIsOpen && (
        <ModalInfo SelectedProject={SelectedProject} closeModal={closeModal} />
      )}
    </section>
  );
};

export default MyProjects;
