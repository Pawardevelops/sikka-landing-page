import { motion } from 'framer-motion';
import { CONTENT } from '../../constants/content';
import { Button } from '../shared/Button';
import { DashboardMockup } from '../mockups/DashboardMockup';

export const Hero = () => {
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

                    {/* Title — Single h1 for SEO, spans for styling */}
                    <div className="hero-title-block">
                        <motion.h1
                            className="hero-title-wrapper"
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.span
                                custom={0}
                                variants={titleVariants}
                                className="hero-title hero-title-line"
                            >
                                {CONTENT.hero.titleLine1}
                            </motion.span>
                            <motion.span
                                custom={1}
                                variants={titleVariants}
                                className="hero-title hero-title-accent hero-title-line"
                            >
                                {CONTENT.hero.titleHighlight}
                            </motion.span>
                            <motion.span
                                custom={2}
                                variants={titleVariants}
                                className="hero-title hero-title-line"
                            >
                                {CONTENT.hero.titleLine2}
                            </motion.span>
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

                    <motion.div
                        className="hero-ctas"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <Button variant="secondary" className="hero-secondary-btn" onClick={() => window.scrollTo({ top: document.getElementById('download')?.offsetTop, behavior: 'smooth' })} >
                            <span style={{ marginRight: '8px' }}>▶</span>
                            {CONTENT.hero.getApp}
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
