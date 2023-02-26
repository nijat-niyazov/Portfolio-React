import React from 'react';
import './animated.scss';

const AnimatedLets = ({ className, stringArr, startPoint }) => {
  return (
    <span>
      {stringArr?.map((str, i) => {
        return (
          <span
            key={i}
            className={`${className} _${i + startPoint}`}
            // style={{
            //   animationDelay: `${i / 10}s`,
            // }}
          >
            {str}
          </span>
        );
      })}
    </span>
  );
};

export default AnimatedLets;
