import Image from 'next/image';
import styles from './ModalContents.module.scss';

const ModalContents = () => {
  return (
    <div className={`${styles.ContentsWrapper}`}>
      <div className="sf_caption_1">ModalContents</div>
      <Image
        src="
      https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjMy/MDAxNjQzMTAyOTg1NzI0.bkW6TJVG82Gi8uG643n5SaSTYOyEcNAq0Y7xsEkOBSUg.rU7SY3uYHJGnigm3WzvBk0LkXt_cO6UOyVsfeKxbEPAg.JPEG.minziminzi128/IMG_7370.JPG?type=w800"
        alt="thumbnail"
        width={100}
        height={100}
        layout="responsive"
      />
    </div>
  );
};

export default ModalContents;
