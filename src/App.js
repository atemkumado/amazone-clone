/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import './Header.css';
function App() {
  return (
    <div className='header'>
      <img className='header__logo' src='http://pngimg.com//uploads/amazon/amazon_PNG11.png'/>
      <div className= 'header__search'>
        <input className="header__searchInput" type="Text" />
      </div>

    
    </div>
  );
}

export default App;
