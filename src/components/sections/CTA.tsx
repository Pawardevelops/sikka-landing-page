import { motion } from 'framer-motion';
import { WaitlistForm } from '../shared/WaitlistForm';
import { CONTENT } from '../../constants/content';

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
};

export const CTA = () => {
    return (
        <section id="waitlist" className="container section-padding" style={{ textAlign: 'center' }}>
            <motion.div
                className="cta-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="noir-grid" style={{ position: 'absolute', opacity: 0.2 }} />
                <motion.div
                    className="glow-orb"
                    style={{ top: '0', left: '50%', transform: 'translateX(-50%)', opacity: 0.1, width: '600px', height: '300px' }}
                    animate={{ opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />

                <motion.h2 className="cta-title" variants={fadeUp}>
                    {CONTENT.cta.title}
                </motion.h2>
                <motion.p className="cta-subtitle" variants={fadeUp}>
                    {CONTENT.cta.subtitle}
                </motion.p>

                <motion.div variants={fadeUp} style={{ position: 'relative', zIndex: 10 }}>
                    <WaitlistForm />
                </motion.div>
            </motion.div>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer className="container footer-section">
            <div className="footer-inner">
                <p style={{ fontSize: '0.875rem' }}>{CONTENT.footer.copy}</p>
                <div className="footer-links">
                    {CONTENT.footer.links.map((link, i) => (
                        <a key={i} href="#" style={{ fontSize: '0.875rem', color: 'inherit', textDecoration: 'none' }}>{link}</a>
                    ))}
                </div>
            </div>
        </footer>
    );
};
