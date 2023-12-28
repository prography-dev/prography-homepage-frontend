'use client';

import React, { useEffect, useState } from 'react';
import { FAQ_DATA, FaqData } from './FAQ_DATA';
import styles from './FaqList.module.scss';
import { IconArrowDown, IconArrowUp } from '../common/icon';
import usePc from '@/hooks/usePc';

type FaqItem = FaqData & {
  selected: boolean;
};

const FaqList = () => {
  const [faqList, setFaqList] = useState<FaqItem[]>([]);
  const [iconSize, setIconSize] = useState(24);
  const isChangePc = usePc();

  useEffect(() => {
    if (isChangePc) {
      setIconSize(24);
    } else {
      setIconSize(16);
    }
  }, []);

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

            {item.selected ? (
              <IconArrowUp size={iconSize} />
            ) : (
              <IconArrowDown size={iconSize} />
            )}
          </p>
          {item.selected && <p className={styles.FaqContent}>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FaqList;
