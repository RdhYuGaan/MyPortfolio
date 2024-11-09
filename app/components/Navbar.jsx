'use client';

import { useEffect, useState } from "react";

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
      <nav
         className={`fixed top-0 left-0 shadow-lg w-full transition-transform duration-300 ${
            hasScrolled
               ? 'opacity-100 translate-y-0'
               : 'opacity-0 -translate-y-full'
         }`}
      >
         {/* Navbar content goes here */}
      </nav>
   );
}

export default Navbar;
