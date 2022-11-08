import React, { useState, useEffect } from 'react';
import './navBar.css';

function NavBar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll",() => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

   return (
    <div className={`navBar ${show && "navBar_black"}`}>
      <img
        className='navBar_logo'
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        alt='Netflix Logo'
      />
      <img
        className='navBar_avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='Netflix avatar'
      />
    </div>
  )
}

export default NavBar