import { IconClose } from '../common/icon';
import ModalContents from './ModalContents';
import ModalCrew from './ModalCrew';
import ModalTitle from './ModalTitle';
import { ProjectCardData } from '@/apis/project';
import styles from './Modal.module.scss';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ProjectCardData;
}

const Modal = ({ isOpen, onClose, data }: ProjectModalProps) => {
  return (
    <div>
      {isOpen && (
        <div
          className={`${styles.ModalOverlay} ${
            isOpen ? styles.Open : styles.Close
          }`}
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
              <ModalTitle
                generation={data.generation}
                title={data.title}
                stacks={data.stacks}
              />
              <ModalContents
                description={data.description}
                imageUrl={data.imageUrl}
              />
              <ModalCrew users={data.users} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
