import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Lock, Menu, X } from 'lucide-react';
import { CONTENT } from '../../constants/content';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const { scrollYProgress } = useScroll();
    const location = useLocation();

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(true);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [isMobileMenuOpen]);

    const isActive = (path: string) => {
        if (path === '/' && location.pathname === '/') return true;
        if (path !== '/' && location.pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <AnimatePresence mode="wait">
            <motion.nav
                initial={{ opacity: 1, y: -100, x: "-50%" }}
                animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0, x: "-50%" }}
                transition={{ duration: 0.2 }}
                className="floating-navbar"
            >
                {/* Logo */}
                <Link to="/" className="floating-nav-logo" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="floating-nav-logo-icon">
                        <Lock size={16} className="text-mint" />
                    </div>
                    <span>{CONTENT.navbar.logo}</span>
                </Link>

                {/* Desktop Menu */}
                <div className="floating-nav-links">
                    {CONTENT.navbar.links.map((link) => (
                        <Link
                            key={link.label}
                            to={link.href}
                            className={`floating-nav-link ${isActive(link.href) ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    style={{ background: 'none', border: 'none', color: '#FFF' }}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

            </motion.nav>

            {/* Mobile Menu Overlay - Moved OUTSIDE the nav pill so it covers the full screen cleanly */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                    >
                        {/* Mobile links centered on the screen */}

                        {CONTENT.navbar.links.map((link) => (
                            <Link
                                key={link.label}
                                to={link.href}
                                className={`floating-nav-link ${isActive(link.href) ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </AnimatePresence>
    );
};
