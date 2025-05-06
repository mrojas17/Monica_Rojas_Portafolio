import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from "react-scroll"
import MobileSocialLinks from './MobileSocialLinks';

const Home = () => {
    return (
      <section name="Home" className='relative w-full md:h-screen h-unset'>

        <div className='flex flex-col items-center justify-center h-full max-w-screen-lg px-4 py-16 mx-auto md:py-0 md:flex-row md:gap-8'>

          <div className='flex flex-col justify-center items-center h-[85%] md:h-full order-2 md:order-1 md:items-start'>
            
            <h1 className='mt-3 mb-2 text-4xl font-bold text-white md:text-6xl md:mt-0 md:mb-4'>Hola soy, Mónica Rojas</h1>
            <h2 className='inline px-6 my-4 text-xl font-semibold text-white rounded-md bg-primary-color/20 max-w-max md:text-3xl lg:text-4xl'>FullStack Developer</h2>
            <p className="max-w-md py-4 text-justify text-gray-300"> ¡Bienvenid@ a mi portafolio!</p>
            <p className="max-w-md text-justify text-gray-300">
            Acá vas a encontrar algunos de los proyectos en los que estuve trabajando, donde mezclo diseño, código y muchas ganas de crear cosas útiles y funcionales.
            Ojalá te guste lo que ves y disfrutes recorriéndolo tanto como yo disfruté desarrollarlo. 
            </p>

            {/* <div className='hidden desktop:flex'>
              <Link to='About' smooth duration={500} className='flex items-center px-6 py-3 mx-auto my-2 font-semibold text-black rounded-md cursor-pointer group w-fit bg-gradient-to-t from-light-lilac to-primary-color md:mx-0'>
                Sobre mí
                <span className='duration-300 group-hover:rotate-90'><MdOutlineKeyboardArrowRight size={25} className='ml-1' /></span>
              </Link>
            </div> */}

            <MobileSocialLinks />
          </div>

          <div className='flex order-1 mt-8 md:order-2 md:mt-0'>
              <img src="/images/monicaperfil.jpg" alt="My profile" className='mb-2 rounded-2xl mx-auto w-2/3 max-w-lg md:max-w-sm object-cover md:w-[70rem] shadow-2xl shadow-primary-color' style={{ filter: 'drop-shadow(0px -4px 4px rgba(155, 89, 182, 0.5))' }} />
            </div>
        </div>
      </section>
    );
}

export default Home
