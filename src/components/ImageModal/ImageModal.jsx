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
        <img src={image} alt="hru hru" width="640" />
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  image: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
