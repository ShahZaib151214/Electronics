import React, { useState } from 'react';
import styles from './ContactNavbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const ContactNavbar = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState('contact');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (page) => {
        setActive(page);
        setIsMenuOpen(false);
        navigate(page === 'home' ? '/' : `/${page}`);
    };

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link to="/" className={styles.logo} onClick={() => setActive('home')}>
                    <strong>Your Logo</strong>
                </Link>

                <div className={styles.mobileIcon} onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
                    <li className={styles.navItem}>
                        <span
                            className={`${styles.navLink} ${active === 'home' ? styles.activeLink : ''}`}
                            onClick={() => handleLinkClick('home')}
                        >
                            Home
                        </span>
                    </li>
                    <li className={styles.navItem}>
                        <span
                            className={`${styles.navLink} ${active === 'electronics' ? styles.activeLink : ''}`}
                            onClick={() => handleLinkClick('electronics')}
                        >
                            Electronics
                        </span>
                    </li>
                    <li className={styles.navItem}>
                        <span
                            className={`${styles.navLink} ${active === 'contact' ? styles.activeLink : ''}`}
                            onClick={() => handleLinkClick('contact')}
                        >
                            Contact
                        </span>
                    </li>
                    <li className={styles.navItem}>
                        <span
                            className={`${styles.navLink} ${active === 'about' ? styles.activeLink : ''}`}
                            onClick={() => handleLinkClick('about')}
                        >
                            About
                        </span>
                    </li>
                    <li className={styles.navItem}>
                        <span
                            className={`${styles.navLink} ${active === 'login' ? styles.activeLink : ''}`}
                            onClick={() => handleLinkClick('login')}
                        >
                            Login
                        </span>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default ContactNavbar;