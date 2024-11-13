
'use client';

import { useEffect, useState } from 'react';
import Nav from './Nav';

function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <Nav
        className={`fixed top-0 left-0 shadow-lg w-full ${
          hasScrolled
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full'
        }`}
      />
      <Nav
        className={`${
          hasScrolled
            ? 'opacity-0 -translate-y-full'
            : 'opacity-100 translate-y-0'
        }`}
      />
    </>
  );
}

export default Navbar;
