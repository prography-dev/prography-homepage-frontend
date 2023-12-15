import { IconClose } from '../common/icon';
import ModalContents from './ModalContents';
import ModalTitle from './ModalTitle';
import styles from './Modal.module.scss';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCard: string;
}

const Modal = ({ isOpen, onClose, selectedCard }: ProjectModalProps) => {
  console.log(selectedCard);
  return (
    <div>
      {isOpen && (
        <div
          className={`${styles.ModalOverlay} ${isOpen ? 'Open' : 'Close'}`}
          onClick={onClose}
        >
          <div
            className={styles.ModalProject}
            onClick={e => e.stopPropagation()}
          >
            <div className={styles.CloseButtonDiv}>
              <button
                type="button"
                aria-label="close button"
                onClick={onClose}
                className={styles.CloseButton}
              >
                <IconClose />
              </button>
            </div>
            <div className={styles.ModalWrapper}>
              <ModalTitle />
              <ModalContents />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
