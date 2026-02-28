import { motion } from 'framer-motion';
import { HardDriveUpload } from 'lucide-react';
import { CONTENT } from '../../constants/content';

export const TheVault = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <section className="container section-padding" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-200px" }}
                style={{ zIndex: 10 }}
            >
                <motion.div variants={fadeUp} style={{ color: 'var(--accent-mint)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '24px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                    {CONTENT.vault.badge}
                </motion.div>

                <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 800, lineHeight: 0.9, marginBottom: '32px', maxWidth: '1000px', margin: '0 auto 32px', textTransform: 'uppercase' }}>
                    {CONTENT.vault.title}
                </motion.h2>

                <motion.p variants={fadeUp} style={{ color: 'var(--text-muted)', fontSize: '1.5rem', maxWidth: '750px', margin: '0 auto 60px', lineHeight: 1.4 }}>
                    {CONTENT.vault.description}
                </motion.p>

                <motion.div
                    variants={fadeUp}
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '16px', color: 'var(--accent-mint)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}
                >
                    <HardDriveUpload size={20} /> {CONTENT.vault.highlight}
                </motion.div>
            </motion.div>

            {/* Abstract Visual Arc */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '120%',
                    height: '1px',
                    background: 'linear-gradient(to right, transparent, var(--accent-mint-glow), transparent)',
                    opacity: 0.3,
                    zIndex: 0
                }}
            />
        </section>
    );
};
