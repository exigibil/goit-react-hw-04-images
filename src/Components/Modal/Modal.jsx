import basicLightbox from 'basiclightbox';
import styles from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';
import { useToggle } from '../usetoggle/useToggle.js';

function Modal({ imageUrl, onClose }) {
  const { isOpen, toggle } = useToggle();

  const openModal = () => {
    toggle(); 
    const instance = basicLightbox.create(`
      <img src="${imageUrl}" width="800" height="600">
    `);
    instance.show();
  };

  const handleClose = () => {
    onClose(); 
    toggle(); 
  };

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.show : ''}`} onClick={handleClose}>
      <div className={styles.imgContainer} onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} onClick={openModal} alt="Click to open" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
