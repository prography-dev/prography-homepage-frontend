import styles from './test.module.scss';
import '../../styles/fonts.scss';

const Page: React.FC = () => {
  return (
    <div className={styles.Container}>
      <div>
        <button>gray300</button>
        <button>gray500</button>
        <button>gray700</button>
        <button>gray800</button>
        <button>gray900</button>
        <button>white</button>
        <button>red300</button>
        <button>red500</button>
        <button>red600</button>
        <button>yellow500</button>
        <button>red-gradation-100</button>
        <button>red-gradation-200</button>
      </div>
      <div>
        <span>Pretendard</span>
        <span className="pre_display_1">안녕하세요</span>
        <span className="pre_display_2">안녕하세요</span>
        <span className="pre_heading_1">안녕하세요</span>
        <span className="pre_heading_2">안녕하세요</span>
        <span className="pre_heading_3">안녕하세요</span>
        <span className="pre_heading_4">안녕하세요</span>
        <span className="pre_heading_5">안녕하세요</span>
        <span className="pre_body_1">안녕하세요</span>
        <span className="pre_body_2">안녕하세요</span>
        <span className="pre_caption_1">안녕하세요</span>
        <span className="pre_caption_2">안녕하세요</span>
      </div>
      <div>
        <span>SF Pro</span>
        <span className="sf_display_1">hello</span>
        <span className="sf_display_2">hello</span>
        <span className="sf_heading_1">hello</span>
        <span className="sf_heading_2">hello</span>
        <span className="sf_heading_3">hello</span>
        <span className="sf_heading_4">hello</span>
        <span className="sf_heading_5">hello</span>
        <span className="sf_body_1">hello</span>
        <span className="sf_body_2">hello</span>
        <span className="sf_caption_1">hello</span>
        <span className="sf_caption_2">hello</span>
      </div>
    </div>
  );
};

export default Page;
