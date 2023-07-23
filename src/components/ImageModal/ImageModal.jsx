import PropTypes from 'prop-types';
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, image, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image modal"
    >
      <div>
        <img
          src={image}
          alt="hru hru"
          width="450"
          style={{ position: 'relative' }}
        />
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '8px', right: ' 8px' }}
        >
          X
        </button>
      </div>
    </Modal>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
