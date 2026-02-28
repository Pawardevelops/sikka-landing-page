import { motion } from 'framer-motion';
import { WifiOff } from 'lucide-react';
import { CONTENT } from '../../constants/content';

export const ProblemSection = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.1 } }
    };

    return (
        <section className="container section-padding" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-200px" }}
                variants={stagger}
                style={{ textAlign: 'center' }}
            >
                <motion.div variants={fadeUp} style={{ color: 'var(--accent-mint)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '24px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                    {CONTENT.problem.badge}
                </motion.div>

                <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: 800, lineHeight: 0.95, marginBottom: '32px', maxWidth: '900px', margin: '0 auto 32px', textTransform: 'uppercase' }}>
                    {CONTENT.problem.title}
                </motion.h2>

                <motion.p variants={fadeUp} style={{ color: 'var(--text-muted)', fontSize: '1.5rem', maxWidth: '700px', margin: '0 auto 60px', lineHeight: 1.4 }}>
                    {CONTENT.problem.description}
                </motion.p>

                <motion.div
                    variants={stagger}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}
                >
                    {CONTENT.problem.stats.map((stat, index) => (
                        <motion.div key={index} variants={fadeUp} style={{ borderLeft: '1px solid var(--accent-mint-glow)', paddingLeft: '24px', textAlign: 'left' }}>
                            <div style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--accent-mint)', lineHeight: 1, marginBottom: '8px' }}>{stat.value}</div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                transition={{ delay: 1 }}
                style={{ marginTop: '100px', textAlign: 'center', fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                    <WifiOff size={16} /> Stop the bleeding. Go offline.
                </div>
            </motion.div>
        </section>
    );
};
