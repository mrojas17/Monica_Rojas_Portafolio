import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"

const Navbar = () => {
    
    const links = [
            {
              id: 1,
              name: "Inicio",
              link: "Home"
            },
            {
              id: 2,
              name: "Sobre mí",
              link: "About"
            },
            {
              id: 3,
              name: "Proyectos",
              link: "Projects"
            },
            {
              id: 4,
              name: "Tecnologías",
              link: "Technologies"
            },
            {
              id: 5,
              name: "Educación",
              link: "Education"
            },
            {
              id: 6,
              name: "Contacto",
              link: "Contact"
            }   
    ]

    const [isShowNav, setIsShowNav] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset
            if (scrollTop > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={`fixed top-0 flex bg-neutral-900/60 justify-between h-20 items-center py-4 px-4 md:px-6 text-white mx-auto lg:px-24 md:py-0 w-full z-30 transition-colors duration-700 ${isScrolled ? 'bg-black/90' : ''}`}>
            <div className='flex flex-row items-center gap-4'>
                <h1 className='text-[1.1rem] lg:text-[1.3rem] hover:text-primary-color hover:scale-125 duration-500'>
                    <i className='mr-2 text-base bx bx-code-curly'></i>
                    Mónica Rojas
                </h1>
            </div>

            <ul className='hidden lg:flex'>
                {links.map(({ id, name, link }) => (
                    <Link to={link} smooth duration={500}>
                    <li
                    key={id}
                    className='cursor-pointer hover:scale-105 rounded-lg hover:bg-primary-color p-4 duration-200 hover:text-black text-[1.1rem] lg:text-[1.3rem]'
                    >
                        {name}
                    </li>
                    </Link>
                ))}
                </ul>


            <div onClick={() => setIsShowNav(!isShowNav)} className='z-10 pr-4 text-gray-100 cursor-pointer lg:hidden'>
                {isShowNav ? <FaTimes size={30} /> : <FaBars size={30} /> }
            </div>

            {isShowNav && (
            <ul className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-black via-black to-light-lilac opacity-90'>

                {links.map(({ id, name, link }) => (
                    <li  
                        key={id} 
                        className='px-4 py-6 text-4xl opacity-100 cursor-pointer'>
                        <Link 
                            onClick={() => setIsShowNav(!isShowNav)}
                            to={link} 
                            smooth 
                            duration={500}>
                            {name} 
                        </Link>
                    </li>
                ))}
            </ul> )}

            
        </header>
    )
}

export default Navbar
