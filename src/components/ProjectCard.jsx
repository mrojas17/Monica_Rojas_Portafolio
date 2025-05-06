
import PropTypes from "prop-types";

const ProjectCard = ({ project, handleModalInfo }) => {
  const handleClickDemo = (demoUrl) => {
    const newWindow = window.open(demoUrl, "_blank");
    newWindow.opener = null;
    newWindow.rel = "noopener noreferrer";
  };

  const handleClickCode = (codeUrl) => {
    const newWindow = window.open(codeUrl, "_blank");
    newWindow.opener = null;
    newWindow.rel = "noopener noreferrer";
  };

  return (
    <div className="max-w-md mx-auto rounded-lg shadow-md shadow-gray-600">
      <img
        onClick={() => handleModalInfo(project)}
        src={project.src}
        alt="project card"
        className="duration-200 rounded-md cursor-pointer h-36 hover:scale-105"
      />
      <div className="flex items-center justify-center">
        <button
          onClick={() => handleClickDemo(project.demo)}
          className="w-1/2 px-6 m-1 duration-200 hover:scale-125"
        >
          Demo
        </button>
        <button
          onClick={() => handleClickCode(project.code)}
          className="w-1/2 px-6 m-1 duration-200 hover:scale-125"
        >
          Code
        </button>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    src: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,
  handleModalInfo: PropTypes.func.isRequired,
};


export default ProjectCard;
