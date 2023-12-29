'use client';

import triggerGtm from './triggerGtm';

const EMAIL_TO = 'prography.contact@gmail.com';

export const handleEmailClick = (title: string) => {
  const mailToLink = `mailto:${EMAIL_TO}`;
  triggerGtm({
    event: 'project.donation',
    title,
  });
  window.location.href = mailToLink;
};
