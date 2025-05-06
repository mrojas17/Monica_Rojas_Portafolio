import { FaGithub, FaLinkedin } from "react-icons/fa"

const GeneralFooter = () => {
    return (
        <footer className='relative flex flex-col items-center gap-2 mt-auto mb-6 text-gray-300 md:flex-row md:justify-evenly'>
            

            <div className='flex gap-x-4 md:order-last'>
            <a
                className='text-4xl hover:text-primary-color hover:animate-bounce'
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/mcrojas/'
                title="LinkedIn"
            >
                <FaLinkedin />
            </a>

            <a
                className='text-4xl hover:text-primary-color hover:animate-bounce'
                target='_blank'
                rel='noreferrer'
                href='https://github.com/mrojas17'
                title="GitHub"
            >
                <FaGithub />
            </a>
            </div>


            <p className='md:order-2'>• Copyright ©2025 </p>
            <p>@mrojas17</p>
        </footer>
    )
}

export default GeneralFooter
