import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

export default function Homepage() {
  return (
    <div className='homepage'>
      <h1>Welcome to my homepage</h1>
      <div className='directory-menu'>
        <Directory />
      </div>
    </div>
  );
}
