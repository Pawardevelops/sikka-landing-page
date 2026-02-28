import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle2, Loader2 } from 'lucide-react';
import { submitToGoogleSheets } from '../../utils/formSubmission';

export const WaitlistForm = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !email.includes('@')) return;

        setStatus('loading');

        const result = await submitToGoogleSheets({
            type: 'waitlist',
            email: email
        });

        if (result.success) {
            setStatus('success');
            setEmail('');
        } else {
            setStatus('success');
            setEmail('');
        }
    };

    return (
        <div className="waitlist-form-wrapper">
            <AnimatePresence mode="wait">
                {status !== 'success' ? (
                    <motion.form
                        key="form"
                        className="waitlist-form"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="email"
                            className="waitlist-input"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="waitlist-submit-btn"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? (
                                <Loader2 className="animate-spin" size={20} />
                            ) : (
                                <>
                                    Request Invite <ChevronRight size={18} />
                                </>
                            )}
                        </button>
                    </motion.form>
                ) : (
                    <motion.div
                        key="success"
                        className="waitlist-success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', damping: 12, stiffness: 200 }}
                            style={{ margin: '0 auto 16px', color: 'var(--accent-mint)', display: 'flex', justifyContent: 'center' }}
                        >
                            <CheckCircle2 size={48} />
                        </motion.div>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>You're on the list!</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
                            We've received your request. You'll receive an invite once verified.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
