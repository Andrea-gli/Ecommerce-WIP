import React from 'react';
import './custom-button.styles.scss';

export default function CustomButton({ children, ...otherProps }) {
  //   console.log('children=>', children);
  //   console.log('otherProps==>', otherProps);
  return (
    <button className='custom-button' {...otherProps}>
      {children}
    </button>
  );
}
