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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', alignItems: 'center' }}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: 800, lineHeight: 0.9, marginBottom: '32px', textTransform: 'uppercase' }}>
                        {CONTENT.analytics.title.part1}<br />
                        <span style={{ color: 'var(--accent-mint)' }}>{CONTENT.analytics.title.part2}</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{ color: 'var(--text-muted)', fontSize: '1.5rem', marginBottom: '48px', lineHeight: 1.6 }}>
                        {CONTENT.analytics.description}
                    </motion.p>

                    <div style={{ display: 'grid', gap: '32px' }}>
                        {CONTENT.analytics.items.map((item, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + i * 0.1 }}
                                style={{ display: 'flex', gap: '20px' }}
                            >
                                <div style={{ marginTop: '4px', color: 'var(--accent-mint)' }}>
                                    {i === 0 ? <PieChart size={24} /> : i === 1 ? <Smile size={24} /> : <Frown size={24} />}
                                </div>
                                <div style={{ borderLeft: '1px solid var(--accent-mint-glow)', paddingLeft: '20px' }}>
                                    <h4 style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '1.25rem', marginBottom: '8px' }}>{item.title}</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div style={{ position: 'relative', overflow: 'hidden' }}>
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
                        <GlassCard style={{ padding: '60px', border: 'var(--border-mint)', boxShadow: '0 40px 80px rgba(0,0,0,0.5)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                                <h4 style={{ fontWeight: 800, fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.6 }}>{CONTENT.analytics.regretWidget.title}</h4>
                                <div style={{ padding: '12px', background: 'var(--accent-mint-muted)', borderRadius: '12px', border: '1px solid var(--accent-mint-glow)' }}>
                                    <PieChart size={24} color="var(--accent-mint)" />
                                </div>
                            </div>

                            <div style={{ marginBottom: '40px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '12px' }}>
                                    <span style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--accent-mint)' }}>{CONTENT.analytics.regretWidget.amount}</span>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '1rem', paddingBottom: '12px' }}>/mo</span>
                                </div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{CONTENT.analytics.regretWidget.stats}</p>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '65%' }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                                        style={{ height: '100%', background: 'var(--accent-mint)', boxShadow: '0 0 15px var(--accent-mint)' }}
                                    />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    <span>Logic</span>
                                    <span>Emotion</span>
                                </div>
                            </div>
                        </GlassCard>

                        {/* Floating Micro-Insight */}
                        <motion.div
                            style={{ position: 'absolute', top: '-60px', right: '-40px', zIndex: 11 }}
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <GlassCard style={{ padding: '24px 32px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <div style={{ width: 48, height: 48, background: '#FF525222', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #FF525244' }}>
                                        <Frown size={24} color="#FF5252" />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.875rem', fontWeight: 800, textTransform: 'uppercase' }}>Late Night Spends</p>
                                        <p style={{ fontSize: '0.75rem', color: '#FF5252', letterSpacing: '0.05em' }}>Verification Required</p>
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
