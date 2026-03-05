import { motion } from 'framer-motion';
import { CONTENT } from '../constants/content';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/sections/CTA';
import { Shield, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPage = () => {
    const { privacy } = CONTENT;
    const navigate = useNavigate();

    return (
        <div className="policy-page">
            <Navbar />

            <main className="container section-padding policy-main">
                <motion.button
                    onClick={() => navigate('/')}
                    className="policy-back-btn"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <ArrowLeft size={18} />
                    Back to Home
                </motion.button>

                <header className="policy-header">
                    <motion.div
                        className="policy-icon-box"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <Shield className="text-mint" size={32} />
                    </motion.div>

                    <motion.h1
                        className="policy-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        {privacy.title}
                    </motion.h1>
                    <motion.p
                        className="policy-date"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {privacy.lastUpdated}
                    </motion.p>
                </header>

                <section className="policy-content">
                    {privacy.sections.map((section, index) => (
                        <motion.div
                            key={index}
                            className="policy-section"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h2 className="policy-section-title">
                                {section.title}
                            </h2>
                            <p className="policy-section-content">
                                {section.content}
                            </p>
                        </motion.div>
                    ))}
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPage;
