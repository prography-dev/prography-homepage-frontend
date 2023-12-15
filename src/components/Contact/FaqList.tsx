'use client';

import React, { useEffect, useState } from 'react';
import { FAQ_DATA, FaqData } from './FAQ_DATA';
import './FaqList.scss';
import { IconArrowDown, IconArrowUp } from '../common/icon';

type FaqItem = FaqData & {
  selected: boolean;
};

const FaqList = () => {
  const [faqList, setFaqList] = useState<FaqItem[]>([]);

  useEffect(() => {
    const faqlist = FAQ_DATA.map(item => {
      return {
        ...item,
        selected: false,
      };
    });
    setFaqList(faqlist);
  }, [FAQ_DATA]);

  const onClickFaqItem = (question, selected) => {
    setFaqList(
      faqList.map(faq => {
        if (faq.question === question) {
          return { ...faq, selected };
        }
        return faq;
      }),
    );
  };

  return (
    <div className="faq-container">
      {faqList.map((item, idx) => (
        <div
          className="faq-item-container"
          key={idx}
          onClick={() => onClickFaqItem(item.question, !item.selected)}
        >
          <p className="pre_heading_5 title">
            {item.question}

            {item.selected ? <IconArrowUp /> : <IconArrowDown />}
          </p>
          {item.selected && (
            <p
              className="pre_body_2 content"
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqList;
