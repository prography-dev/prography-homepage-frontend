import './Modal.scss';

import { IconClose } from '../common/icon';
<<<<<<< HEAD
import ModalContents from './ModalContents';
import ModalCrew from './ModalCrew';
=======
>>>>>>> parent of 5be6d60 (🔨 scss module 추가....)
import ModalTitle from './ModalTitle';

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
          className={`modal-overlay ${isOpen ? 'open' : ''}`}
          onClick={onClose}
        >
          <div className="modal-project" onClick={e => e.stopPropagation()}>
            <div className="close-button-div">
              <button
                type="button"
                aria-label="close button"
                onClick={onClose}
                className="close-button"
              >
                <IconClose />
              </button>
            </div>
            <div className="modal-wrapper">
              <ModalTitle />
<<<<<<< HEAD
              <ModalContents />
              <ModalCrew />
=======
>>>>>>> parent of 5be6d60 (🔨 scss module 추가....)
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
