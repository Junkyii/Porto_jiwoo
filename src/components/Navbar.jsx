import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        Jiwoo<span className="text-blue-500">Kim.</span>
                    </a>

                    {/* Burger Menu */}
                    <div 
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        ☰
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-white transition-colors"> Home </a>
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors"> About </a>
                        <a href="#project" className="text-gray-300 hover:text-white transition-colors"> Project </a>
                        <a href="#certificate" className="text-gray-300 hover:text-white transition-colors"> Certificate </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
