/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import './Modal.scss';

const Modal = ({ isOpen, onClose, children }) => {
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
