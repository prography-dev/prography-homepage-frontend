import { useEffect, useState } from 'react';
import debounce from '@/utils/debounce';

export default function usePc() {
  if (typeof window === 'undefined') return false;

  const [isPc, setIsPc] = useState(window.innerWidth >= 1280);
  useEffect(() => {
    const resizeHandler = (e: UIEvent) => {
      const { innerWidth } = e.target as Window;
      if (innerWidth < 1280) setIsPc(false);
      else setIsPc(true);
    };
    window.addEventListener('resize', debounce(resizeHandler, 100));
    () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);
  return isPc;
}
