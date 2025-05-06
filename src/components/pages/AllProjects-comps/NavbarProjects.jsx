import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const NavbarProjects = () => {
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
        <header className={`fixed top-0 flex bg-neutral-900/60 justify-between h-20 items-center py-4 px-2 text-white mx-auto md:px-24 md:py-0 w-full z-30 transition-colors duration-700 ${isScrolled ? 'bg-black/90' : ''}`}>
            <div className='flex flex-row items-center gap-4'>
                <NavLink to='/' className='text-[1.1rem] lg:text-[1.3rem] hover:text-primary-color hover:scale-125 duration-500'>
                    <i className='mr-2 bx bx-home-heart'></i>
                    Inicio
                </NavLink>
            </div>
        </header>
    )
}

export default NavbarProjects
