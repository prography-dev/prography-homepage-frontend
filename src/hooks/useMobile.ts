import { useEffect, useState } from 'react';

export default function useMobile() {
  if (typeof window === 'undefined') return false;

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const resizeHandler = (e: UIEvent) => {
      const { innerWidth } = e.target as Window;
      if (innerWidth >= 768) setIsMobile(false);
      else setIsMobile(true);
    };
    window.addEventListener('resize', resizeHandler);
    () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);
  return isMobile;
}
