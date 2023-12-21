import { useEffect, useState } from 'react';

export default function usePc() {
  if (typeof window === 'undefined') return false;

  const [isPc, setIsPc] = useState(window.innerWidth >= 1280);
  useEffect(() => {
    const resizeHandler = (e: UIEvent) => {
      const { innerWidth } = e.target as Window;
      if (innerWidth < 1280) setIsPc(false);
      else setIsPc(true);
    };
    window.addEventListener('resize', resizeHandler);
    () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);
  return isPc;
}
