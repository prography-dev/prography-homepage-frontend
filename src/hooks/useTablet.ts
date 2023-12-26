import { useEffect, useState } from 'react';
import debounce from '@/utils/debounce';

export default function useTablet() {
  if (typeof window === 'undefined') return false;

  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 && window.innerWidth < 1280,
  );
  useEffect(() => {
    const resizeHandler = (e: UIEvent) => {
      const { innerWidth } = e.target as Window;
      if (innerWidth < 768 || innerWidth > 1280) setIsTablet(false);
      else setIsTablet(true);
    };
    window.addEventListener('resize', debounce(resizeHandler, 100));
    () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);
  return isTablet;
}
