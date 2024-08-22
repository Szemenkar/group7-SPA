import React, { useEffect, useState } from 'react';
import '../components/Filterbar.css';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [menuStyle, setMenuStyle] = useState({});
  const isIndexPage = window.location.pathname === '/';

  useEffect(() => {
    const headerHeight = document.querySelector('header').offsetHeight;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollUp = currentScrollPos - prevScrollPos;

      if (currentScrollPos > headerHeight) {
        setMenuStyle({
          position: 'fixed',
          top: '0',
          opacity: '0',
        });
        if (scrollUp < 0) {
          setMenuStyle({
            position: 'fixed',
            top: '0',
            opacity: '1',
            background: 'rgba(247, 57, 162, 0.7)',
            marginTop: '0',
          });
        }
      } else {
        setMenuStyle({
          position: 'fixed',
          top: `${headerHeight}px`,
          opacity: '1',
          background: 'transparent',
          marginTop: '20px',
        });
      }

      setPrevScrollPos(currentScrollPos);
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
  }, [prevScrollPos]);

  return (
    <div>
      {isIndexPage && (
        <div className="menu-wrapper">
          <div className="menu" style={menuStyle}>
            <ul className="menu-list">
              <li>Ekonomi</li>
              <li>Hälsa</li>
              <li>Idrott</li>
              <li>Livsstil och Fritid</li>
              <li>Miljö</li>
              <li>Religion</li>
              <li>Samhälle och Konflikter</li>
              <li>Vetenskap och Teknik</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;