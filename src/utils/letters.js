import { useEffect, useState } from 'react';

export const useLetterAnimations = array => {
  const [className, setClassName] = useState('text-animate');

  const arr = [...array];

  useEffect(() => {
    setTimeout(() => {
      setClassName('text-animate-hover');
    }, 3000);
  }, [array]);

  return { className, arr };
};
