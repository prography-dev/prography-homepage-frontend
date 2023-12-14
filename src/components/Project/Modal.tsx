import './Modal.scss';

import { IconClose } from '../common/icon';

export interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCard: string;
}

const Modal = ({ isOpen, onClose, selectedCard }: ProjectModalProps) => {
  console.log(selectedCard);
  return (
    <div>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="close-button-div">
              <IconClose onClick={onClose} className="close-button" />
            </div>
            <p className="black">모달모달</p>
            <p className="black">내용입력하기</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
