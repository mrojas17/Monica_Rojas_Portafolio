
import PropTypes from 'prop-types';

const CertificateModal = ({ selectedImage, setSelectedImage }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black/60 duration-300 ${
        selectedImage ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className=" bg-white/20 p-2 rounded-lg w-[80%] max-w-[800px] relative shadow-md shadow-gray-600 miniModal">
        <span
          onClick={() => setSelectedImage(null)}
          className="absolute z-50 flex items-center justify-center w-8 h-8 text-2xl text-white transition duration-200 rounded-full cursor-pointer top-3 right-3 bg-black/60 hover:bg-primary-color hover:text-white"
        >
          ×
        </span>


        <img
          className="object-contain w-full h-full rounded-md miniModal"
          src={selectedImage}
          alt="Selected Certificate"
        />
      </div>
    </div>
  );
}
CertificateModal.propTypes = {
  selectedImage: PropTypes.string,
  setSelectedImage: PropTypes.func.isRequired,
};
  
export default CertificateModal;
