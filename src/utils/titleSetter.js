import { useEffect } from 'react';

export const useTitleSetter = page => {
  useEffect(() => {
    document.title = page;

    return () => {
      document.title = "Nijat's portfolio";
    };
  }, [page]);
};
