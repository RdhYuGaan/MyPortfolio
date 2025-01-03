'use client';
import { Link } from 'lucide-react';
import Image from "next/image";
import { navLinks, socialLinks } from "../utils/dataBase";

function Footer() {
  
  const renderSocialIcons = () =>
    socialLinks.map(({ href, icon, label }) => (
      <Link
        key={label}
        href={href}
        aria-label={label}
        target="_blank"
        className="text-black transition hover:text-[#0B7474] duration-300"
      >
        {icon}
      </Link>
    ));

  const renderLinks = () => {
    return navLinks.map(({ id, label }) => (
      <li
        key={id}
        className="text-sm font-semibold text-black transition cursor-pointer hover:text-[#0B7474] "
      >
        {label}
      </li>
    ));
  };

  return (
    <footer className="mt-[3rem] flex flex-col items-center justify-center gap-6 md:gap-12 py-0 bg-[#f8f8f8]">
      <Image
        src="/logo-h.png"
        alt="logo"
        className="transition-transform mt-8 duration-300 cursor-pointer hover:-rotate-6"
        width={200}
        height={100}
      />
      
      {/* <ul className="flex gap-4 justify-center ">{renderLinks()}</ul> */}

      {/* <div className="flex gap-4 justify-center h-1">{renderSocialIcons()}</div> */}

      <p className="text-sm  text-black/60 relative -top-8">
      Copyright @2025 {''}
      <span className="text-[#10adad] ">yugan wijerathna </span>
      All right reserved. inc.
      </p>
    </footer>
  );
}

export default Footer;
