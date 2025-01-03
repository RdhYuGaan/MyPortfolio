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
        className="text-sm font-semibold text-gray-900 transition cursor-pointer hover:text-bg-[#0B7474] "
      >
        {label}
      </li>
    ));
  };

  return (
    <footer className="mt-[3rem] flex flex-col items-center justify-center gap-6 md:gap-12 py-12 bg-[#f8f8f8]">
      <Image
        src="/logo.png"
        alt="logo"
        className="transition-transform duration-300 cursor-pointer  hover:-rotate-6"
        width={200}
        height={80}
      />
      
      <ul className="flex gap-4 justify-center">{renderLinks()}</ul>

      <div className="flex gap-4 justify-center">{renderSocialIcons()}</div>

      <p className="text-sm  text-black/60 ">
      Copyright @2024 {''}
      <span className="text-bg-[#10adad] ">yugan wijerathna </span>
      All right reserved. inc.
      </p>
    </footer>
  );
}

export default Footer;
