import { motion } from 'framer-motion';
import { HardDriveUpload } from 'lucide-react';
import { CONTENT } from '../../constants/content';

export const TheVault = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <section className="container section-padding section-center">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-200px" }}
                style={{ zIndex: 10 }}
            >
                <motion.div variants={fadeUp} className="badge-label">
                    {CONTENT.vault.badge}
                </motion.div>

                <motion.h2 variants={fadeUp} className="vault-title max-w-lg">
                    {CONTENT.vault.title}
                </motion.h2>

                <motion.p variants={fadeUp} className="vault-desc max-w-md">
                    {CONTENT.vault.description}
                </motion.p>

                <motion.div
                    variants={fadeUp}
                    className="vault-highlight"
                >
                    <HardDriveUpload size={20} /> {CONTENT.vault.highlight}
                </motion.div>
            </motion.div>

            {/* Abstract Visual Arc */}
            <motion.div className="vault-line" />
        </section>
    );
};
