import { motion } from 'framer-motion';

export const DashboardMockup = () => {
    return (
        <motion.div
            className="dashboard-wrapper"
            initial={{ opacity: 0, x: 60, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Floating Bitcoin Icon */}
            <motion.div
                className="floating-bitcoin"
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
                <div className="bitcoin-icon">₿</div>
            </motion.div>

            {/* Main Browser Window */}
            <div className="dashboard-browser">
                {/* Browser Chrome */}
                <div className="browser-chrome">
                    <div className="browser-dots">
                        <span className="dot dot-red" />
                        <span className="dot dot-yellow" />
                        <span className="dot dot-green" />
                    </div>
                    <div className="browser-url">
                        <span className="lock-icon">🔒</span>
                        <span>vault://secure-local</span>
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="dashboard-content">
                    <p className="vault-label">Total Vault Value</p>
                    <h2 className="vault-amount">
                        ₹124,592<span className="vault-cents">.00</span>
                    </h2>

                    {/* Bar Chart */}
                    <div className="chart-container">
                        <div className="chart-bars">
                            {[45, 65, 35, 55, 40, 70, 50, 80, 60].map((h, i) => (
                                <motion.div
                                    key={i}
                                    className={`chart-bar ${i >= 7 ? 'bar-accent' : ''}`}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 0.6, delay: 0.8 + i * 0.05 }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Transaction Rows */}
                    <div className="transaction-row">
                        <div className="transaction-icon tx-travel">↗</div>
                        <div className="transaction-info">
                            <span className="transaction-name">Travel Fund</span>
                            <span className="transaction-type">Manual Entry</span>
                        </div>
                        <span className="transaction-amount negative">₹450.00</span>
                    </div>

                    <div className="transaction-row">
                        <div className="transaction-icon tx-savings">💰</div>
                        <div className="transaction-info">
                            <span className="transaction-name">Monthly Savings</span>
                            <span className="transaction-type">Auto-allocated</span>
                        </div>
                        <span className="transaction-amount positive">₹2,000.00</span>
                    </div>
                </div>
            </div>

            {/* Floating AES Badge */}
            <motion.div
                className="floating-aes-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
            >
                <div className="aes-icon">🛡️</div>
                <div>
                    <div className="aes-title">AES-256</div>
                    <div className="aes-subtitle">Military Grade</div>
                </div>
            </motion.div>

            {/* Floating Dollar Button */}
            <motion.div
                className="floating-dollar"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
                $
            </motion.div>
        </motion.div>
    );
};
