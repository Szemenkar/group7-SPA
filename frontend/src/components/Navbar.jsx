import React, { useEffect, useState } from 'react';
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [menuStyle, setMenuStyle] = useState({});
  const headerHeight = document.querySelector('header').offsetHeight; // Höjden på headern

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollUp = currentScrollPos - prevScrollPos;

      if (currentScrollPos > headerHeight) {
        // Scrollat förbi headern
        setMenuStyle({
          position: 'fixed',
          top: '0',
          opacity: '0',
        });
        if (scrollUp < 0) {
          // Scrollar uppåt
          setMenuStyle({
            position: 'fixed',
            top: '0',
            opacity: '1',
            /*background: 'linear-gradient(to bottom, #FB7E7E, #ba85e9, rgba(186, 133, 233, 0.7))',*/
            background: 'rgba(247, 57, 162, 0.7)',
            marginTop: '0',
          });
        }
      } else {
        // Om användaren är ovanför headern
        setMenuStyle({
          position: 'fixed',
          top: `${headerHeight}px`,
          opacity: '1',
          background: 'transparent',
          marginTop: '15px',
        });
      }

      setPrevScrollPos(currentScrollPos); // Uppdaterar positionen
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', () => {
      setMenuStyle({
        top: `${headerHeight}px`,
        opacity: '1',
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, headerHeight]);

  return <div className="menu" style={menuStyle}>Menu</div>;
};

export default Navbar;