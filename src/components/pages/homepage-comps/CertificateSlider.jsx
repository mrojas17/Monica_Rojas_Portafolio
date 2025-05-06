import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link as ScrollLink } from 'react-scroll';
import CertificateModal from './CertificateModal';

const CertificateSlider = ({ certificates }) => {
    const [selectedImage, setSelectedImage] = React.useState(null);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        draggable: true,
        // rows: 2,
        responsive: [{
            breakpoint: 3000,
            settings: {
                slidesToShow: 3,
                infinite: true
                }
        
            }, {
        
                breakpoint: 800,
                settings: {
                slidesToShow: 2,
                dots: true
                }
        
            },{
        
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                dots: true
                }
        
            }, {
        
                breakpoint: 280,
                settings: "unslick" // destroys slick
        
            }]
    };

    const openCertificateModal = (image) => {
        setSelectedImage(image);
    };
    

    return (
        <section name='Education' className='relative w-full text-white h-unset md:h-screen'>
            <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>

                <div className='mb-2'>
                    <h2 className='inline pb-1 text-4xl font-bold border-b-4 border-primary-color/40 sm:text-5xl'>Educación</h2>
                    <p className='py-6'>Te invito a conocer algunos de mis logros académicos</p>
                </div>

                <Slider {...settings} className="grid w-[90%] lg:w-full mx-auto">
                    {certificates.map((certificate, index) => (
                    <div onClick={() => openCertificateModal(certificate.image)} key={index} className="p-4 cursor-zoom-in">
                        <img src={certificate.image} alt="Certificate}" className="mx-auto w-full h-[200px] lg:h-[220px] rounded-md object-contain" />
                    </div>
                ))}
                </Slider>
            </div>

            <ScrollLink to="Contact" smooth duration={500} className='absolute cursor-pointer bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 hover:text-primary-color'>
                <i className='text-gray-400 bx bx-chevron-down text-7xl animate-bounce font hover:text-primary-color'></i>
            </ScrollLink>

            <CertificateModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        </section>
        
    );
};
CertificateSlider.propTypes = {
    certificates: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default CertificateSlider;
