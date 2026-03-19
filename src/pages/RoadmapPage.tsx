import { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../constants/content';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/sections/CTA';
import {
    CheckCircle2,
    RefreshCcw,
    Clock,
    Search,
    Share2,
    ShoppingCart,
    Lock,
    Code,
    Zap,
    ChevronRight,
    Loader2
} from 'lucide-react';
import { submitToGoogleSheets } from '../utils/formSubmission';
import { SEOHead } from '../components/shared/SEOHead';

const RoadmapPage = () => {
    const { roadmap, seo } = CONTENT;
    const [suggestion, setSuggestion] = useState('');
    const [suggestionStatus, setSuggestionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSuggestionSubmit = async () => {
        if (!suggestion.trim()) return;

        setSuggestionStatus('loading');
        const result = await submitToGoogleSheets({
            type: 'suggestion',
            content: suggestion
        });

        if (result.success) {
            setSuggestionStatus('success');
            setSuggestion('');
        } else {
            setSuggestionStatus('error');
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const phaseVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const getPhaseIcon = (iconName: string) => {
        const props = { size: 18 };
        switch (iconName) {
            case 'checkmark': return <CheckCircle2 {...props} />;
            case 'refresh': return <RefreshCcw {...props} />;
            case 'search': return <Search {...props} />;
            case 'share': return <Share2 {...props} />;
            case 'cart': return <ShoppingCart {...props} />;
            default: return <Clock {...props} />;
        }
    };

    const getPhilosophyIcon = (iconName: string) => {
        const props = { size: 24, className: "text-mint" };
        switch (iconName) {
            case 'lock': return <Lock {...props} />;
            case 'code': return <Code {...props} />;
            case 'zap': return <Zap {...props} />;
            default: return null;
        }
    };

    return (
        <div className="roadmap-page">
            <SEOHead
                title={seo.roadmap.title}
                description={seo.roadmap.description}
                canonicalPath="/roadmap"
            />
            <Navbar />

            <main className="container section-padding roadmap-main" style={{ paddingTop: '160px' }}>
                {/* Header Section */}
                <header className="roadmap-hero">
                    <motion.div
                        className="status-badge status-green"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="pulse-dot dot-green" />
                        {roadmap.activeBadge}
                    </motion.div>

                    <div className="roadmap-hero-content">
                        <div className="roadmap-title-group">
                            <motion.h1
                                className="roadmap-main-title"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                {roadmap.title}
                            </motion.h1>
                            <motion.p
                                className="roadmap-main-subtitle"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {roadmap.subtitle}
                            </motion.p>
                        </div>
                    </div>

                    {/* Progress Summary */}
                    <motion.div
                        className="roadmap-progress"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {(() => {
                            const completed = roadmap.phases.filter(p => p.status === 'Completed').length;
                            const inProgress = roadmap.phases.filter(p => p.status === 'In Progress').length;
                            const planned = roadmap.phases.filter(p => p.status === 'Planned').length;
                            return (
                                <>
                                    <div className="progress-stat">
                                        <span className="progress-count progress-completed">{completed}</span>
                                        <span className="progress-label">Completed</span>
                                    </div>
                                    <div className="progress-divider" />
                                    <div className="progress-stat">
                                        <span className="progress-count progress-active">{inProgress}</span>
                                        <span className="progress-label">In Progress</span>
                                    </div>
                                    <div className="progress-divider" />
                                    <div className="progress-stat">
                                        <span className="progress-count progress-planned">{planned}</span>
                                        <span className="progress-label">Planned</span>
                                    </div>
                                </>
                            );
                        })()}
                    </motion.div>
                </header>

                {/* Timeline Section */}
                <motion.div
                    className="detailed-timeline"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="timeline-center-spine" />

                    {roadmap.phases.map((phase, index) => (
                        <motion.div
                            key={phase.id}
                            className={`timeline-row ${index % 2 === 0 ? 'row-left' : 'row-right'}`}
                            variants={phaseVariants}
                        >
                            <div className="timeline-node">
                                <div className={`node-circle ${phase.status === 'Completed' ? 'node-completed' : phase.status === 'In Progress' ? 'node-active' : ''}`}>
                                    {getPhaseIcon(phase.icon)}
                                </div>
                            </div>

                            <div className="timeline-content-wrapper">
                                <div className={`timeline-card-high-fi ${phase.status === 'Planned' ? 'card-dashed' : ''}`}>
                                    <div className="card-top">
                                        <div className="card-info">
                                            <h3 className="card-title">{phase.title}</h3>
                                            <p className="card-blurb">{phase.blurb}</p>
                                        </div>
                                        <div className={`tag-pill ${phase.status.toLowerCase().replace(' ', '-')}`}>
                                            {phase.tag}
                                        </div>
                                    </div>

                                    <div className="card-description-box">
                                        <p>{phase.description}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Philosophy Section */}
                <section className="philosophy-section">
                    <motion.h2
                        className="philosophy-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Development Philosophy
                    </motion.h2>
                    <div className="philosophy-grid">
                        {roadmap.philosophy.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="philosophy-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="phil-icon-box">
                                    {getPhilosophyIcon(item.icon)}
                                </div>
                                <h3 className="phil-card-title">{item.title}</h3>
                                <p className="phil-card-desc">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="philosophy-footer">
                        <p>Updated March 2026. Version 1.0.0 Beta</p>
                    </div>
                </section>

                {/* Suggestion Section */}
                <section className="suggestion-section">
                    <motion.div
                        className="suggestion-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="suggestion-text">
                            <h2 className="suggestion-title">{roadmap.suggestion.title}</h2>
                            <p className="suggestion-desc">{roadmap.suggestion.description}</p>
                        </div>
                        <div className="suggestion-action">
                            {suggestionStatus === 'success' ? (
                                <motion.div
                                    className="suggestion-success"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <CheckCircle2 className="text-mint" size={32} />
                                    <h3>Proposal Received!</h3>
                                    <p>Thanks for contributing to the Sikka roadmap.</p>
                                    <button
                                        className="suggestion-again-btn"
                                        onClick={() => setSuggestionStatus('idle')}
                                    >
                                        Suggest another
                                    </button>
                                </motion.div>
                            ) : (
                                <>
                                    <textarea
                                        className="suggestion-input"
                                        placeholder="Explain your idea..."
                                        rows={3}
                                        value={suggestion}
                                        onChange={(e) => setSuggestion(e.target.value)}
                                        disabled={suggestionStatus === 'loading'}
                                    />
                                    <button
                                        className="suggestion-cta"
                                        onClick={handleSuggestionSubmit}
                                        disabled={suggestionStatus === 'loading' || !suggestion.trim()}
                                    >
                                        {suggestionStatus === 'loading' ? (
                                            <Loader2 className="spin-icon" size={18} />
                                        ) : (
                                            <>
                                                {roadmap.suggestion.cta}
                                                <ChevronRight size={18} />
                                            </>
                                        )}
                                    </button>
                                </>
                            )}
                        </div>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default RoadmapPage;
