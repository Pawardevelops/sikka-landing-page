import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Code2, Users, GitFork } from 'lucide-react';
import { CONTENT } from '../../constants/content';
import { GlassCard } from '../shared/GlassCard';

// Generate particles for explosion effect
const generateParticles = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 600,
        y: (Math.random() - 0.5) * 600,
        rotation: Math.random() * 720 - 360,
        scale: Math.random() * 0.6 + 0.4,
        delay: Math.random() * 0.3,
        size: Math.random() * 8 + 4,
        color: ['#00E676', '#00C853', '#69F0AE', '#B9F6CA', '#FFFFFF'][Math.floor(Math.random() * 5)]
    }));
};

const particles = generateParticles(40);

const highlightIcons = [
    <Code2 size={20} />,
    <Users size={20} />,
    <GitFork size={20} />
];

export const OpenSourceReveal = () => {
    const [isRevealed, setIsRevealed] = useState(false);

    const handleReveal = useCallback(() => {
        if (!isRevealed) setIsRevealed(true);
    }, [isRevealed]);

    return (
        <section className="container section-padding opensource-section">
            <div className="opensource-stage">
                <AnimatePresence mode="wait">
                    {!isRevealed ? (
                        /* ── Pre-Reveal: Gift Box ── */
                        <motion.div
                            key="gift"
                            className="gift-container"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.3 }}
                            transition={{ exit: { duration: 0.4 } }}
                            onClick={handleReveal}
                            style={{ cursor: 'pointer' }}
                        >
                            {/* Background Glow */}
                            <motion.div
                                className="gift-glow"
                                animate={{
                                    opacity: [0.2, 0.5, 0.2],
                                    scale: [0.9, 1.1, 0.9]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            />

                            {/* The Box */}
                            <motion.div
                                className="gift-box"
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                {/* Lid */}
                                <div className="gift-lid">
                                    <div className="gift-ribbon-top" />
                                </div>
                                {/* Body */}
                                <div className="gift-body">
                                    <div className="gift-ribbon-v" />
                                    <div className="gift-ribbon-h" />
                                    {/* Shimmer */}
                                    <motion.div
                                        className="gift-shimmer"
                                        animate={{ x: ['-100%', '200%'] }}
                                        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
                                    />
                                </div>
                            </motion.div>

                            {/* Hint text */}
                            <motion.p
                                className="gift-hint"
                                animate={{ opacity: [0.4, 0.8, 0.4] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                {CONTENT.openSource.preReveal}
                            </motion.p>
                        </motion.div>
                    ) : (
                        /* ── Post-Reveal: Open Source Message ── */
                        <motion.div
                            key="reveal"
                            className="reveal-container"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {/* Explosion Particles */}
                            {particles.map((p) => (
                                <motion.div
                                    key={p.id}
                                    className="particle"
                                    style={{
                                        width: p.size,
                                        height: p.size,
                                        background: p.color,
                                        borderRadius: p.size > 8 ? '2px' : '50%',
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                    }}
                                    initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                                    animate={{
                                        x: p.x,
                                        y: p.y,
                                        scale: 0,
                                        opacity: 0,
                                        rotate: p.rotation
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        delay: p.delay,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                />
                            ))}

                            {/* Radial Flash */}
                            <motion.div
                                className="reveal-flash"
                                initial={{ scale: 0, opacity: 0.8 }}
                                animate={{ scale: 4, opacity: 0 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                            />

                            {/* Title */}
                            <motion.h2
                                className="reveal-title"
                                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            >
                                {CONTENT.openSource.title}
                            </motion.h2>

                            {/* Subtitle */}
                            <motion.p
                                className="reveal-subtitle"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                            >
                                {CONTENT.openSource.subtitle}
                            </motion.p>

                            {/* GitHub Button */}
                            <motion.a
                                href={CONTENT.openSource.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="reveal-github-btn"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 230, 118, 0.3)' }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <Github size={20} />
                                {CONTENT.openSource.cta}
                            </motion.a>

                            {/* Highlight Cards */}
                            <motion.div
                                className="reveal-highlights"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                            >
                                {CONTENT.openSource.highlights.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.3 + i * 0.15, duration: 0.6 }}
                                    >
                                        <GlassCard style={{ padding: '28px', textAlign: 'left' }}>
                                            <div className="reveal-highlight-icon">
                                                {highlightIcons[i]}
                                            </div>
                                            <h4 className="reveal-highlight-title">{item.title}</h4>
                                            <p className="reveal-highlight-desc">{item.desc}</p>
                                        </GlassCard>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
