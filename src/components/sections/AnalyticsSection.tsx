import { motion } from 'framer-motion';
import { PieChart, Frown, Smile } from 'lucide-react';
import { GlassCard } from '../shared/GlassCard';
import { CONTENT } from '../../constants/content';

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
};

export const AnalyticsSection = () => {
    return (
        <section className="container section-padding">
            <div className="analytics-layout">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h2 variants={fadeUp} className="analytics-title">
                        {CONTENT.analytics.title.part1}<br />
                        <span className="text-mint">{CONTENT.analytics.title.part2}</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="analytics-desc">
                        {CONTENT.analytics.description}
                    </motion.p>

                    <div className="analytics-items">
                        {CONTENT.analytics.items.map((item, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + i * 0.1 }}
                                className="analytics-item"
                            >
                                <div className="analytics-item-icon">
                                    {i === 0 ? <PieChart size={24} /> : i === 1 ? <Smile size={24} /> : <Frown size={24} />}
                                </div>
                                <div className="analytics-item-text">
                                    <h4 className="analytics-item-title">{item.title}</h4>
                                    <p className="analytics-item-desc">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div style={{ position: 'relative' }}>
                    {/* Atmospheric Glow */}
                    <motion.div
                        className="glow-orb"
                        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', height: '500px' }}
                        animate={{
                            opacity: [0.05, 0.12, 0.05],
                            scale: [0.8, 1.1, 0.8]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        style={{ position: 'relative', zIndex: 10 }}
                    >
                        <GlassCard className="regret-widget">
                            <div className="regret-widget-header">
                                <h4 className="regret-widget-label">{CONTENT.analytics.regretWidget.title}</h4>
                                <div className="regret-widget-icon">
                                    <PieChart size={24} color="var(--accent-mint)" />
                                </div>
                            </div>

                            <div className="regret-widget-amount-block">
                                <div className="regret-widget-row">
                                    <span className="regret-widget-amount">{CONTENT.analytics.regretWidget.amount}</span>
                                    <span className="regret-widget-period">/mo</span>
                                </div>
                                <p className="regret-widget-stats">{CONTENT.analytics.regretWidget.stats}</p>
                            </div>

                            <div className="regret-widget-bar-container">
                                <div className="regret-widget-bar-track">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '65%' }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                                        className="regret-widget-bar-fill"
                                    />
                                </div>
                                <div className="regret-widget-bar-labels">
                                    <span>Logic</span>
                                    <span>Emotion</span>
                                </div>
                            </div>
                        </GlassCard>

                        {/* Floating Micro-Insight */}
                        <motion.div
                            className="floating-insight"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <GlassCard style={{ padding: '24px 32px' }}>
                                <div className="insight-inner">
                                    <div className="insight-icon">
                                        <Frown size={24} color="#FF5252" />
                                    </div>
                                    <div>
                                        <p className="insight-title">Late Night Spends</p>
                                        <p className="insight-status">Verification Required</p>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
