
// eslint-disable-next-line react/prop-types
export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
       <div 
         className={`fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center 
         transition-all duration-300 ease-in-out ${menuOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-0 pointer-events-none"}`}
       >
        {/* Tombol Close */}
        <button 
            onClick={() => setMenuOpen(false)} 
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
            aria-label="Close Menu"
        >
            &times;
        </button>

        {/* Link Menu */}
        <div className="flex flex-col items-center space-y-4">
            <a href="#home" onClick={() => setMenuOpen(false)} className="text-2xl font-semibold text-white transition-transform duration-300"> Home </a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-2xl font-semibold text-white transition-transform duration-300"> About </a>
            <a href="#project" onClick={() => setMenuOpen(false)} className="text-2xl font-semibold text-white transition-transform duration-300"> Project </a>
            <a href="#certificate" onClick={() => setMenuOpen(false)} className="text-2xl font-semibold text-white transition-transform duration-300"> Certificate </a>
        </div>
       </div>
    );
};
