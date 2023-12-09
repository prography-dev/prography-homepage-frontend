import styles from './test.module.scss';
import '../../styles/fonts.scss';
import Button from '@/components/common/button/Button';
import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconBehance,
  IconDown,
  IconGithub,
  IconInstagram,
  IconMenu,
  IconRight,
} from '@/components/common/icon';

const Page = () => {
  return (
    <>
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
      </div>

      <div className={styles.ButtonContainer}>
        <Button>80 Primary Button</Button>
        <Button buttonSize="56">56 Primary Button</Button>
        <Button buttonSize="48">48 Primary Button</Button>
      </div>

      <div className={styles.ButtonContainer}>
        <IconArrowDown />
        <IconArrowDown />
        <IconArrowUp />
        <IconArrowRight />
        <IconArrowLeft />
        <IconMenu />
        <IconRight />
        <IconDown />
        <IconInstagram />
        <IconGithub />
        <IconBehance />
      </div>
    </>
  );
};

export default Page;
