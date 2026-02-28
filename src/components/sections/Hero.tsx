import { motion } from 'framer-motion';
import { CONTENT } from '../../constants/content';
import { Button } from '../shared/Button';
import { DashboardMockup } from '../mockups/DashboardMockup';
import { Send } from 'lucide-react';

export const Hero = () => {
    const handleWaitlistScroll = () => {
        const element = document.getElementById('waitlist');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.15 + i * 0.1,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    return (
        <section className="hero-section">
            {/* Ambient glow */}
            <div className="hero-glow" />

            <div className="hero-container container">
                {/* Left Column — Text Content */}
                <div className="hero-left">
                    {/* Badge */}
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="badge-dot" />
                        {CONTENT.hero.badge}
                    </motion.div>

                    {/* Title */}
                    <div className="hero-title-block">
                        <motion.h1
                            custom={0}
                            variants={titleVariants}
                            initial="hidden"
                            animate="visible"
                            className="hero-title"
                        >
                            {CONTENT.hero.titleLine1}
                        </motion.h1>
                        <motion.h1
                            custom={1}
                            variants={titleVariants}
                            initial="hidden"
                            animate="visible"
                            className="hero-title hero-title-accent"
                        >
                            {CONTENT.hero.titleHighlight}
                        </motion.h1>
                        <motion.h1
                            custom={2}
                            variants={titleVariants}
                            initial="hidden"
                            animate="visible"
                            className="hero-title"
                        >
                            {CONTENT.hero.titleLine2}
                        </motion.h1>
                    </div>

                    {/* Subtitle */}
                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        {CONTENT.hero.subtitle}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        className="hero-ctas"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <button
                            className="button button-primary"
                            style={{ padding: '1rem 2rem', borderRadius: '12px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}
                            onClick={handleWaitlistScroll}
                        >
                            {CONTENT.hero.cta}
                            <Send size={18} />
                        </button>
                        <Button variant="secondary" style={{ padding: '1rem 2rem', borderRadius: '12px', fontSize: '1rem', border: '1px solid rgba(255,255,255,0.15)' }}>
                            <span style={{ marginRight: '8px' }}>▶</span>
                            {CONTENT.hero.watchDemoCta}
                        </Button>
                    </motion.div>
                </div>

                {/* Right Column — Dashboard Mockup */}
                <div className="hero-right">
                    <DashboardMockup />
                </div>
            </div>

            {/* Stats Bar */}
            <motion.div
                className="hero-stats container"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
            >
                {CONTENT.hero.stats.map((stat, i) => (
                    <div key={i} className="hero-stat-item">
                        <span className="stat-icon">{stat.icon}</span>
                        <span className="stat-value">{stat.value}</span>
                        <span className="stat-label">{stat.label}</span>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};
