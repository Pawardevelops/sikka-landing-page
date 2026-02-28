import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ShieldCheck, Users, ArrowRightLeft, Fingerprint, Cloud } from 'lucide-react';
import { CONTENT } from '../../constants/content';

const StoryNode = ({
    icon: Icon,
    title,
    description,
    benefits,
    index,
    isReverse
}: {
    icon: any,
    title: string,
    description: string,
    benefits?: string[],
    index: number,
    isReverse?: boolean
}) => {
    return (
        <motion.div
            className={`story-node ${isReverse ? 'reverse' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
        >
            <div className="node-dot" />

            <div className="story-content">
                <div style={{
                    display: 'inline-flex',
                    padding: '12px',
                    background: 'var(--accent-mint-muted)',
                    borderRadius: '12px',
                    marginBottom: '20px',
                    border: '1px solid var(--accent-mint-glow)'
                }}>
                    <Icon size={24} color="var(--accent-mint)" />
                </div>
                <h3 className="text-h3" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</h3>
                <p className="text-body" style={{ marginBottom: '20px' }}>{description}</p>

                {benefits && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {benefits.map((benefit, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent-mint)' }}></div>
                                {benefit}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="story-visual">
                <motion.div
                    style={{
                        width: '100%',
                        height: '240px',
                        background: 'var(--bg-card)',
                        borderRadius: 'var(--radius-lg)',
                        border: 'var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                    whileHover={{ borderColor: 'var(--accent-mint-glow)', scale: 1.02 }}
                >
                    <div className="glow-orb" style={{ width: '150px', height: '150px', filter: 'blur(60px)' }} />
                    <Icon size={80} color="var(--accent-mint)" strokeWidth={1} style={{ opacity: 0.4 }} />

                    {/* Subtle scanning effect */}
                    <motion.div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '1px',
                            background: 'var(--accent-mint)',
                            boxShadow: '0 0 10px var(--accent-mint)'
                        }}
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export const FeatureGrid = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section className="container section-padding" style={{ position: 'relative' }}>
            <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-mint"
                    style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.875rem', fontWeight: 600 }}
                >
                    The Secure Path
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-h2"
                    style={{ textTransform: 'uppercase', marginTop: '12px' }}
                >
                    {CONTENT.features.title}
                </motion.h2>
            </div>

            <div ref={containerRef} className="secure-path-container">
                <div className="timeline-line" />
                <motion.div className="timeline-progress" style={{ scaleY, originY: 0, height: '100%' }} />

                <StoryNode
                    index={0}
                    icon={Fingerprint}
                    title="The Gateway"
                    description="Your security starts before you even see a number. Protected by OS-level biometric encryption."
                    benefits={["FaceID / TouchID Integration", "Zero Knowledge Architecture", "Instant Kill-Switch"]}
                />

                <StoryNode
                    index={1}
                    isReverse
                    icon={ShieldCheck}
                    title={CONTENT.features.list[0].title}
                    description={CONTENT.features.list[0].description}
                    benefits={CONTENT.features.list[0].benefits}
                />

                <StoryNode
                    index={2}
                    icon={Users}
                    title={CONTENT.features.list[1].title}
                    description={CONTENT.features.list[1].description}
                    benefits={["Track Bank & Crypto", "Manage Cash Wallets", "Visual Balance Overviews"]}
                />

                <StoryNode
                    index={3}
                    isReverse
                    icon={ArrowRightLeft}
                    title={CONTENT.features.list[2].title}
                    description={CONTENT.features.list[2].description}
                    benefits={["IOU Tracking", "Group Expense Splitting", "Settlement Reminders"]}
                />

                <StoryNode
                    index={4}
                    icon={Cloud}
                    title="Encrypted Vault"
                    description="Your data needs a home. Securely backup your entire financial history to your own Google Drive, fully encrypted."
                    benefits={["End-to-End Encryption", "Private Drive Storage", "One-Tap Restore"]}
                />
            </div>
        </section>
    );
};

