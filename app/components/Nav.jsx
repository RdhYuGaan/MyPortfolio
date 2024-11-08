import { useState } from "react";
import { navLinks } from "../utils/dataBase";
import Image from "next/image"; // Import Image from next/image

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
        <nav
            className={`z-50 p-4 transition duration-500 ease-out bg-white ${className}`}
        >
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
                    <button className="text-white bg-orange-400 p-2 px-4 rounded hover:bg-orange-600">
                        Download CV
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
