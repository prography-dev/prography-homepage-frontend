'use client';

import React, { useEffect, useState } from 'react';
import { FAQ_DATA, FaqData } from './FAQ_DATA';
import styles from './FaqList.module.scss';
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
    <div className={styles.FaqContainer}>
      {faqList.map((item, idx) => (
        <div
          className={styles.FaqItemContainer}
          key={idx}
          onClick={() => onClickFaqItem(item.question, !item.selected)}
        >
          <p className={styles.FaqTitle}>
            {item.question}

            {item.selected ? <IconArrowUp /> : <IconArrowDown />}
          </p>
          {item.selected && (
            <p
              className={styles.FaqContent}
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqList;
