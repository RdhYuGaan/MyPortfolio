'use client';
import { Link } from "next/link";
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
        className="text-black transition hover:text-orange-500 duration-300"
      >
        {icon}
      </Link>
    ));

  const renderLinks = () => {
    return navLinks.map(({ id, label }) => (
      <li
        key={id}
        className="text-sm font-semibold text-gray-900 transition cursor-pointer hover:text-orange-500"
      >
        <Link href={`#${id}`}>{label}</Link>
      </li>
    ));
  };

  return (
    <footer className="mt-[3rem] flex flex-col justify-center gap-6 md:gap-12 py-12 bg-[#f8f8f8]">
      <Image
        src="/logo.svg"
        alt="logo"
        className="transition-transform duration-300 cursor-pointer hover:-rotate-6"
        width={150}
        height={50}
      />
      
      <ul className="flex gap-4 justify-center">{renderLinks()}</ul>

      <div className="flex gap-4 justify-center">{renderSocialIcons()}</div>

      <p className="text-sm text-black/60 ">
      copyright @2024 {''}
      <span className="text-orange-400">yugan wijerathna</span>
      all right reserved. inc.
      </p>
    </footer>
  );
}

export default Footer;
