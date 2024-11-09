import { useState } from "react";
import { navLinks } from "../utils/dataBase";
import Image from "next/image"; 
import Button from './Button';
import { MenuIcon, XIcon } from "lucide-react";

function Nav({ className }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: "smooth",
            block: "nearest",
        });
        setIsOpen(false);
    };

    const renderLinks = () => {
        return navLinks.map(({ id, label }) => (
            <li
                key={id}
                className="text-sm font-semibold text-gray-900 transition cursor-pointer hover:text-orange-500"
                onClick={() => handleLinkClick(id)}
            >
                {label}
            </li>
        ));
    };

    return (
        <nav className={`z-50 p-4 transition duration-500 ease-out bg-white ${className}`}>
            <div className="flex items-center justify-between max-w-6xl mx-auto">
                <div className="z-30">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        className="transition-transform duration-300 cursor-pointer hover:-rotate-6"
                        width={150}
                        height={50}
                    />
                </div>

                <div className="items-center hidden gap-6 md:flex">
                    <ul className="flex items-center gap-6">{renderLinks()}</ul>
                    <Button className="text-white bg-orange-400 p-2 px-4 rounded hover:bg-orange-600">
                        Download CV
                    </Button>
                </div>

                <button className="z-30 md:hidden" onClick={handleMenuToggle}>
                    {isOpen ? <XIcon /> : <MenuIcon />}
                </button>    

                <div className={`fixed bg-white md:hidden z-10 left-0 w-full p-4 transition-all duration-500 ease-in-out ${
                    isOpen ? 'top-[4rem] translate-y-0 opacity-100' : '-translate-y-[200%] opacity-0'
                }`}>
                    <ul className="flex flex-col items-center gap-4">
                        {renderLinks()}
                        <Button className="text-white bg-orange-400 hover:bg-orange-600">
                            Download CV
                        </Button>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
