import './ModalTitle.scss';

import { IconBehance, IconInstagram } from '../common/icon';

import StackTag from '../common/stackTag/StackTag';

const ModalTitle = () => {
  return (
    <div className="title-wrapper">
      <div className="contents">
        <div className="text-div">
          <div className="sf_c1_to_b1 gray400">9th</div>
          <div className="sf_h3_to_h1">FREITAG</div>
        </div>
        <div className="icons">
          <IconInstagram />
          <IconBehance />
        </div>
      </div>
      <div className="tag-div">
        <StackTag label="JAVA" font="sf_bd_to_c1" />
        <StackTag label="JAVA" font="sf_bd_to_c1" />
        <StackTag label="JAVA" font="sf_bd_to_c1" />
      </div>
    </div>
  );
};

export default ModalTitle;
