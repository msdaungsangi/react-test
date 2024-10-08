import React from 'react';

const Image = ({ src, className, alt }) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Image;
