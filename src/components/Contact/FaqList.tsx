'use client';

import React, { useEffect, useState } from 'react';
import styles from './FaqList.module.scss';
import { IconArrowDown, IconArrowUp } from '../common/icon';
import { getFaqs, FaqType } from '@/apis/faq';
import usePc from '@/hooks/usePc';
import triggerGtm from '@/utils/triggerGtm';

type FaqItem = FaqType & {
  selected?: boolean;
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
    const fetchData = async () => {
      const data = await getFaqs();
      setFaqList([...data]);
    };
    fetchData();
  }, []);

  const onClickFaqItem = (question, selected) => {
    setFaqList(
      faqList.map(faq => {
        if (faq.question === question) {
          return { ...faq, selected };
        }
        return faq;
      }),
    );
    triggerGtm({
      event: 'Contact.faq',
      question,
      isOpen: selected,
    });
  };

  return (
    <div className={styles.FaqContainer}>
      {faqList.map((item, idx) => (
        <div className={styles.FaqItemContainer} key={idx}>
          <p
            className={styles.FaqTitle}
            onClick={() => onClickFaqItem(item.question, !item.selected)}
          >
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
