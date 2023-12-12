'use client';

import './Modal.scss';

export interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ProjectModalProps) => {
  return (
    <div>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button type="button" className="close-button" onClick={onClose}>
              Close
            </button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
