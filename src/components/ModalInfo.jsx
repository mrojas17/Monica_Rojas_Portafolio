export function ModalInfo({ SelectedProject, closeModal }) {
  const handleClickCloseButton = () => {
    closeModal();
  };

  const handleBackdropClick = () => {
    closeModal();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <section
      onClick={handleBackdropClick}
      className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-70"
    >
      <div
  onClick={handleModalClick}
  className="relative p-2 rounded-lg w-[70%] sm:w-[60%] max-w-[800px] max-h-[80vh] flex flex-col overflow-y-auto lg:text-lg lg:w-[90%]"
>

        <div>
          <img
            className="w-full rounded-tl-lg rounded-tr-lg md:object-cover"
            src={SelectedProject.src}
            alt="Resident image"
          />
        </div>

        <div className="flex flex-col w-full p-8 text-white rounded-bl-lg rounded-br-lg bg-black/80 border-opacity-70 border-primary-color">
          <button
            onClick={handleClickCloseButton}
            className="flex justify-end cursor-pointer top-10 right-2 lg:right-4"
          >
            <span className="flex items-center justify-center w-8 h-8 text-4xl transition-transform duration-300 bg-black rounded-full text-primary-color hover:scale-110">
              ×
            </span>
          </button>

          <h3 className="self-center inline pb-1 mb-6 text-2xl font-semibold border-b-4 border-primary-color/60">
            {SelectedProject.title}
          </h3>

          <ul>
            <li>
              <span className="text-primary-color">Descripción: </span>
              <span>{SelectedProject.description}</span>
            </li>

            <li>
              <span className="text-primary-color">Tecnologías: </span>
              <span>{SelectedProject.technologies}</span>
            </li>

            <li>
              <span className="text-primary-color">Demo: </span>
              <a
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-500 hover:underline hover:underline-offset-4"
                href={SelectedProject.demo}
              >
                Haga clic aquí para ver el proyecto
              </a>
            </li>

            <li>
              <span className="text-primary-color">Código: </span>
              <a
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-500 hover:underline hover:underline-offset-4"
                href={SelectedProject.code}
              >
                Haga clic aquí para ver el repositorio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
