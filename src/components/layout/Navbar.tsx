import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Menu, X } from 'lucide-react';
import { CONTENT } from '../../constants/content';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => {
        if (path === '/' && location.pathname === '/') return true;
        if (path !== '/' && location.pathname.startsWith(path)) return true;
        return false;
    };


    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-inner container">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <div className="navbar-logo-icon">
                        <Lock size={18} />
                    </div>
                    <span>{CONTENT.navbar.logo}</span>
                </Link>

                {/* Desktop Menu */}
                <div className="navbar-links">
                    {CONTENT.navbar.links.map((link) => (
                        <Link
                            key={link.label}
                            to={link.href}
                            className={`navbar-link ${isActive(link.href) ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="navbar-actions">
                    {/* Mobile Toggle */}
                    <button
                        className="mobile-toggle"
                        style={{ background: 'none', border: 'none', color: '#FFF' }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="mobile-links" style={{ display: 'flex', flexDirection: 'column', padding: '20px', gap: '16px' }}>
                            {CONTENT.navbar.links.map((link) => (
                                <Link
                                    key={link.label}
                                    to={link.href}
                                    className={`navbar-link ${isActive(link.href) ? 'active' : ''}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
