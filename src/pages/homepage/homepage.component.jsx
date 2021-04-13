import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

export default function Homepage() {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <Directory />
      </div>
    </div>
  );
}
