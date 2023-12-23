import Footer from '../Layout/footer/Footer';
import { IconClose } from '../common/icon';
import ModalContents from './ModalContents';
import ModalCrew from './ModalCrew';
import ModalTitle from './ModalTitle';
import OtherProjects from './OtherProjects';
import { ProjectCardData } from '@/apis/project';
import styles from './Modal.module.scss';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ProjectCardData;
  onClickPjtInModal: (target: string) => void;
  otherProjects: ProjectCardData[];
}

const Modal = ({
  isOpen,
  onClose,
  data,
  onClickPjtInModal,
  otherProjects,
}: ProjectModalProps) => {
  const onSelectOtherPjt = (target: string) => {
    onClickPjtInModal(target);
  };
  return (
    <div>
      {isOpen && (
        <>
          <div
            className={`${styles.ModalOverlay} ${
              isOpen ? styles.Open : styles.Close
            }`}
            onClick={onClose}
          />
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
                socials={data.socials}
              />
              <ModalContents
                description={data.description}
                imageUrl={data.imageUrl}
              />
              <ModalCrew users={data.users} />
              <OtherProjects
                currentTitle={data.title}
                onSelectOtherPjt={onSelectOtherPjt}
                onClick={onClose}
                otherProjects={otherProjects}
              />
            </div>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Modal;
