import { button } from "framer-motion/client"

function Button({ children, className }) {
    return (
        <button 
            className={`px-2 py-2 transition duration-300 rounded-md lg:px-4 ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;
