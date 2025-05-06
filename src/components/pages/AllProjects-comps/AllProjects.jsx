import { Link } from 'react-router-dom'
import EcommerceTech from '/images/projectsImages/EcommerceTech.png'
import GeStocker from '/images/projectsImages/Gestocker.png'

const AllProjects = () => {

    const projects = [
        {
            id: 1,
            src: GeStocker,
            demo: "https://ge-stocker.vercel.app/",  
            code: 'https://github.com/GeStocker'
        },
        {
            id: 2,
            src: EcommerceTech,
            demo: 'https://proyect-e-commerce.vercel.app/',
            code: 'https://github.com/mrojas17/proyect_E-commerce'
        },
        {
            id: 3,
            // src: dogsblog,
            demo: 'https://dogs-blog-diegotellezdev.netlify.app/',
            code: 'https://github.com/diegotellezc/dogsBlog'
        }
    ]

    const handleClickDemo = (demoUrl) => {
        const newWindow = window.open(demoUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    }

    const handleClickCode = (codeUrl) => {
        const newWindow = window.open(codeUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    }
    

    return (
        <section name="Projects" className='relative w-full mt-24 mb-10 text-white md:min-h-screen'>
        
            <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>
                <div className='pb-8'>
                    <h2 className='inline text-4xl font-bold border-b-4 border-primary-color/40 sm:text-5xl'>Projects</h2>
                    <p className='py-6'>Check out my best web applications here.</p>
                </div>

                <div  className='grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
                    {
                        projects.map(({ id, src, demo, code }) => (
                                <div key={id} className='max-w-md mx-auto rounded-lg shadow-md shadow-gray-600'>
                                    <img loading='lazy' src={src} alt="project card" className='duration-200 rounded-md hover:scale-105' />
                                    <div className='flex items-center justify-center'>
                                        <button onClick={() => handleClickDemo(demo)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Demo</button>
                                        <button onClick={() => handleClickCode(code)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Code</button>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex justify-center'>
                <Link to='/' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-light-lilac to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300'>
                    <span className=''><i className='mr-2 bx bx-home-heart'></i></span>
                    Go back
                </Link>
            </div>
        </section>
    )
}

export default AllProjects
