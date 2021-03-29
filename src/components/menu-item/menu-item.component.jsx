import React from 'react';
import '../menu-item/menu-item.component.scss';

export default function MenuItem({ title, imageUrl, size }) {
  console.log(imageUrl);
  return (
    <div
      className='menu-item'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
}
