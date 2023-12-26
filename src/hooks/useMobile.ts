import { useEffect, useState } from 'react';
import debounce from '@/utils/debounce';

export default function useMobile() {
  if (typeof window === 'undefined') return false;

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const resizeHandler = (e: UIEvent) => {
      const { innerWidth } = e.target as Window;
      if (innerWidth >= 768) setIsMobile(false);
      else setIsMobile(true);
    };
    window.addEventListener('resize', debounce(resizeHandler, 100));
    () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);
  return isMobile;
}
