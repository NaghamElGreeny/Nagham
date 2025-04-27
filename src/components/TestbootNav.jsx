import { useState, useEffect } from "react";
import "./TestNav.scss";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize(); // عشان أول ما يحمل يظبط
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className="navbar">
                <div className="logo-container">
                    {isMobile ? (
                        <div className="menu-icon" onClick={() => setIsMenuOpen(true)}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    ) : (
                        <img
                            src="src/assets/logo.svg"
                            alt="logo"
                            className="logo-image"
                        />
                    )}
                </div>
            </nav>

            {/* Overlay لما المينيو تفتح */}
            {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}

            {/* Side Menu */}
            <div className={`side-nav ${isMenuOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={closeMenu}>×</button>
                <ul className="nav-links">
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
