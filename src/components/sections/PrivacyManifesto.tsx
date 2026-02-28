import { motion } from 'framer-motion';
import { CONTENT } from '../../constants/content';
import { AlertTriangle, Eye, Database, Shield, Zap, Globe } from 'lucide-react';

export const PrivacyManifesto = () => {
    const { manifesto } = CONTENT;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const iconMap: Record<string, React.ReactNode> = {
        surveillance: <Eye size={20} />,
        brokerage: <AlertTriangle size={20} />,
        breaches: <Database size={20} />,
        offline_manifesto: <Zap size={20} />,
        no_apis: <Globe size={20} />,
        local_storage: <Shield size={20} />
    };

    return (
        <section className="manifesto-section">
            <div className="container">
                {/* Header */}
                <div className="manifesto-header">
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {manifesto.badge}
                    </motion.div>
                    <motion.h2
                        className="manifesto-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {manifesto.title} <span className="text-mint">{manifesto.titleHighlight}</span>
                    </motion.h2>
                    <motion.p
                        className="manifesto-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        {manifesto.subtitle}
                    </motion.p>
                </div>

                {/* Manifesto Card */}
                <motion.div
                    className="manifesto-card"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Left Column: Tension */}
                    <div className="manifesto-col tension-col">
                        <div className="col-header">
                            <div className="status-badge status-red">
                                <span className="pulse-dot dot-red" />
                                {manifesto.tension.badge}
                            </div>
                            <h3 className="col-title">{manifesto.tension.title}</h3>
                        </div>
                        <div className="manifesto-items">
                            {manifesto.tension.items.map((item) => (
                                <motion.div key={item.id} className="manifesto-item" variants={itemVariants}>
                                    <div className="item-icon icon-red">
                                        {iconMap[item.id]}
                                    </div>
                                    <div className="item-text">
                                        <h4 className="item-title">{item.title}</h4>
                                        <p className="item-desc">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Solution */}
                    <div className="manifesto-col solution-col">
                        <div className="col-header">
                            <div className="status-badge status-green">
                                <span className="pulse-dot dot-green" />
                                {manifesto.solution.badge}
                            </div>
                            <h3 className="col-title">{manifesto.solution.title}</h3>
                        </div>
                        <div className="manifesto-items">
                            {manifesto.solution.items.map((item) => (
                                <motion.div
                                    key={item.id}
                                    className="manifesto-item-glass"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(0, 230, 118, 0.05)' }}
                                >
                                    <div className="item-icon icon-green">
                                        {iconMap[item.id]}
                                    </div>
                                    <div className="item-text">
                                        <h4 className="item-title">{item.title}</h4>
                                        <p className="item-desc">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
