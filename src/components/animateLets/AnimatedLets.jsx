import React from 'react';
import './animated.scss';

const AnimatedLets = ({ className, stringArr, startPoint }) => {
  return (
    <span>
      {stringArr?.map((str, i) => {
        return (
          <span key={i} className={`${className} _${i + startPoint}`}>
            {str}
          </span>
        );
      })}
    </span>
  );
};

export default AnimatedLets;
