import React, { useState, useEffect } from 'react';
import '../styles/Navbar.scss';

const TestbootNav = () => {
    const [expanded, setExpanded] = useState(false);
    const [toggled, setToggled] = useState(false);
    const [mobileView, setMobileView] = useState(window.innerWidth < 768);
    const [hovered, setHovered] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setExpanded(true);
        }, 500);

        const handleResize = () => {
            setMobileView(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleNavbar = () => {
        setToggled(!toggled);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    return (
        <nav className={`navbar navbar-custom ${expanded ? 'expanded' : ''} ${mobileView ? 'mobile' : ''}`}>
            <div className="logo-container">
                {mobileView ? (
                    <div className="menu-icon" onClick={toggleNavbar}>
                        <span className="bar">|</span>
                        <span className="bar">|</span>
                        <span className="bar">|</span>
                    </div>
                ) : (
                    <>
                        <img src="src/assets/logo.svg" alt="logo" className="logo-image"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)} />
                        <div className={`line ${hovered ? 'expand' : ''}`}></div>
                        <div className={`name ${hovered ? 'show' : ''}`}>Nagham Elgreeny</div>
                    </>
                )}
            </div>

            {/* سايد مينيو لما الموبايل والتوجل مفتوح */}
            {(mobileView && toggled) && (
                <div className="side-nav-mobile">
                    <ul className={`nav-links ${toggled ? 'show' : ''}`}>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className={`dark-mode-toggle ${darkMode ? 'active' : ''}`} onClick={toggleDarkMode}>
                        <div className="circle"></div>
                    </div>
                </div>
            )}

            {/* العادي على الديسكتوب */}
            {!mobileView && (
                <div className="side-nav">
                    <ul className="nav-links">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className={`dark-mode-toggle ${darkMode ? 'active' : ''}`} onClick={toggleDarkMode}>
                        <div className="circle"></div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default TestbootNav;
