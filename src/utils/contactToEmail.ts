'use client';

const EMAIL_TO = 'prography.contact@gmail.com';

export const handleEmailClick = () => {
  const mailToLink = `mailto:${EMAIL_TO}`;

  window.location.href = mailToLink;
};
