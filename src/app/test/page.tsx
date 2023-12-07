import '../../styles/fonts.scss';

import Link from 'next/link';
import styles from './test.module.scss';

const Page = () => {
  return (
    <div className={styles.Container}>
      <div>
        <button type="button">gray300</button>
        <button type="button">gray500</button>
        <button type="button">gray700</button>
        <button type="button">gray800</button>
        <button type="button">gray900</button>
        <button type="button">white</button>
        <button type="button">red300</button>
        <button type="button">red500</button>
        <button type="button">red600</button>
        <button type="button">yellow500</button>
        <button type="button">red_gradation_100</button>
        <button type="button">red_gradation_200</button>
        <button type="button" className="red600 red_gradation_100">
          red_gradation_200
        </button>
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
        <span className="pre_badge">안녕하세요</span>
        <span className="pre_heading_3_underline">안녕하세요</span>
        <span className="pre_heading_4_underline">안녕하세요</span>
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
        <span className="sf_badge">hello</span>
        <span className="sf_heading_3_underline">hello</span>
        <span className="sf_heading_4_underline">hello</span>
      </div>
      <Link href="/">홈으로</Link>
    </div>
  );
};

export default Page;
