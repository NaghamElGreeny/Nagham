import React, { useState, useEffect } from 'react';
import '../styles/Navbar.scss'

const Navbar = () => {
    const [expanded, setExpanded] = useState(false); //nav animation expand
    const [toggled, settoggled] = useState(false); //nav toggle/ expand
    const [mobileView, setMobileView] = useState(window.innerWidth < 768);
    const [hovered, setHovered] = useState(false);
    useEffect(() => {

        const timer = setTimeout(() => {
            setExpanded(true);
        }, 500);

        const handleResize = () => {
            setMobileView(window.innerWidth < 768);
        };
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, []);

    const toggleNavbar = () => {
        settoggled(!toggled);
    };

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    return (
        <nav className={`navbar navbar-custom ${expanded ? 'expanded' : ''} ${mobileView ? 'mobile' : ''}`}>
            <div className="logo-container">
                <img src="src\assets\logo.svg" alt="logo" className="logo-image" onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} />
                <div className={`line ${hovered ? 'expand' : ''}`}></div>
                <div className={`name ${hovered ? 'show' : ''}`}>Nagham Elgreeny</div>
            </div >
            <div className="side-nav">
                <ul className="nav-links">
                    <li><a href="">About</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <div className={`dark-mode-toggle ${darkMode ? 'active' : ''}`} onClick={toggleDarkMode}>
                    <div className="circle"></div>
                    {/* {darkMode ? 'dark' : 'light'} */}
                </div>
            </div >
        </nav >
    );

}

export default Navbar