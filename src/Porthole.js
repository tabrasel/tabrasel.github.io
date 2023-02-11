import styles from './Porthole.module.css';

import { useState, useEffect, useRef } from 'react';

export function Porthole(imageSrc) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => { window.removeEventListener('scroll', handleScroll); };
  }, []);

  return(
    <div className="d-flex justify-content-center">
      <div className={`${styles.porthole} mb-5`}>
      <img
        src={imageSrc} alt="Profile"
        style={{ width: '200px', position: 'relative', 'top': (scrollPosition * 0 - 0) + 'px', }} />
      </div>
    </div>
  );
}
