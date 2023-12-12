import './Modal.scss';

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
            <button type="button" className="close-button" onClick={onClose}>
              Close
            </button>
            <p className="black">모달모달</p>
            <p className="black">내용입력하기</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
