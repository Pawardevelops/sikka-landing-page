import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTENT } from '../../constants/content';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Download, Github, Check, Tag, ChevronDown, Loader2, Package, Calendar, AlertCircle } from 'lucide-react';
import { useGitHubReleases, formatSize, formatDate } from '../../hooks/useGitHubReleases';
import type { GitHubRelease } from '../../hooks/useGitHubReleases';

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
};

export const CTA = () => {
    const { releases, latestRelease, latestApk, loading, error } = useGitHubReleases();
    const [showAll, setShowAll] = useState(false);

    return (
        <section id="download" className="container section-padding" style={{ textAlign: 'center' }}>
            <motion.div
                className="cta-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="noir-grid" style={{ position: 'absolute', opacity: 0.2 }} />
                <motion.div
                    className="glow-orb"
                    style={{ top: '0', left: '50%', transform: 'translateX(-50%)', opacity: 0.1, width: '600px', height: '300px' }}
                    animate={{ opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />

                <motion.h2 className="cta-title" variants={fadeUp}>
                    {CONTENT.cta.title}
                </motion.h2>
                <motion.p className="cta-subtitle" variants={fadeUp}>
                    {CONTENT.cta.subtitle}
                </motion.p>

                <motion.div variants={fadeUp} style={{ position: 'relative', zIndex: 10 }}>
                    {/* Latest Version Badge */}
                    <motion.div
                        className="github-version-badge"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Tag size={14} />
                        <span>{loading ? 'Loading...' : latestRelease ? latestRelease.tag_name : CONTENT.cta.version}</span>
                        {latestRelease?.prerelease && <span className="prerelease-tag">PRE</span>}
                    </motion.div>

                    {/* Release Note Link */}
                    {latestRelease && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            style={{ marginBottom: '16px' }}
                        >
                            <Link 
                                to={`/release-notes/${latestRelease.tag_name}`}
                                className="release-note-link"
                            >
                                View Release Notes
                            </Link>
                        </motion.div>
                    )}

                    {/* Download Card */}
                    <div className="github-download-card">
                        {/* Primary Download Button */}
                        {latestApk ? (
                            <a
                                href={latestApk.browser_download_url}
                                className="github-download-btn"
                            >
                                <Download size={20} />
                                Download APK
                                <span className="download-size">({formatSize(latestApk.size)})</span>
                            </a>
                        ) : (
                            <a
                                href={CONTENT.cta.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-download-btn"
                            >
                                <Download size={20} />
                                {CONTENT.cta.button}
                            </a>
                        )}

                        <a
                            href="https://github.com/Pawardevelops/Sikka/releases"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-repo-link"
                        >
                            <Github size={16} />
                            View all releases on GitHub
                        </a>

                        {/* Feature List */}
                        <div className="github-features">
                            {CONTENT.cta.features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    className="github-feature-item"
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + i * 0.15 }}
                                >
                                    <Check size={16} className="github-check-icon" />
                                    <span>{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Latest Release Notes */}
                        {latestRelease?.body && (
                            <motion.div
                                className="github-release-notes"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                            >
                                <div className="release-notes-header">
                                    <AlertCircle size={14} />
                                    <span>Latest Release Notes</span>
                                </div>
                                <div className="release-notes-content">
                                    <ReactMarkdown>
                                        {latestRelease.body.split('**Full Changelog**')[0].trim()}
                                    </ReactMarkdown>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* All Releases Section */}
                    {!loading && releases.length > 1 && (
                        <motion.div
                            className="releases-section"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                        >
                            <button
                                className="releases-toggle"
                                onClick={() => setShowAll(!showAll)}
                            >
                                <Package size={16} />
                                All Versions ({releases.length})
                                <ChevronDown
                                    size={16}
                                    style={{
                                        transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s ease'
                                    }}
                                />
                            </button>

                            <AnimatePresence>
                                {showAll && (
                                    <motion.div
                                        className="releases-list"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        {releases.map((release, i) => (
                                            <ReleaseRow key={release.id} release={release} isLatest={i === 0} />
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )}

                    {/* Loading State */}
                    {loading && (
                        <div className="releases-loading">
                            <Loader2 size={16} className="spin-icon" />
                            <span>Fetching releases...</span>
                        </div>
                    )}

                    {/* Error State */}
                    {error && (
                        <div className="releases-error">
                            <AlertCircle size={16} />
                            <span>Couldn't load releases — <a href="https://github.com/Pawardevelops/Sikka/releases" target="_blank" rel="noopener noreferrer">view on GitHub</a></span>
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </section>
    );
};

const ReleaseRow = ({ release, isLatest }: { release: GitHubRelease; isLatest: boolean }) => {
    const apk = release.assets.find(a => a.name.endsWith('.apk'));

    return (
        <motion.div
            className="release-row"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="release-info">
                <div className="release-tag-row">
                    <Tag size={14} className="text-mint" />
                    <span className="release-tag-name">{release.tag_name}</span>
                    {isLatest && <span className="latest-badge">LATEST</span>}
                    {release.prerelease && <span className="prerelease-tag">PRE</span>}
                </div>
                <div className="release-meta">
                    <Calendar size={12} />
                    <span>{formatDate(release.published_at)}</span>
                    {apk && (
                        <>
                            <span className="meta-dot">·</span>
                            <span>{formatSize(apk.size)}</span>
                            <span className="meta-dot">·</span>
                            <span>{apk.download_count} downloads</span>
                        </>
                    )}
                </div>
            </div>
            <div className="release-actions">
                {apk ? (
                    <a href={apk.browser_download_url} className="release-download-btn">
                        <Download size={14} />
                        APK
                    </a>
                ) : (
                    <a href={release.html_url} target="_blank" rel="noopener noreferrer" className="release-download-btn">
                        <Github size={14} />
                        View
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export const Footer = () => {
    return (
        <footer className="container footer-section" aria-label="Site footer">
            <div className="footer-inner">
                <p style={{ fontSize: '0.875rem' }}>{CONTENT.footer.copy}</p>
                <div className="footer-links">
                    {CONTENT.footer.links.map((link: any, i: number) => (
                        link.href.startsWith('http') ? (
                            <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.875rem', color: 'inherit', textDecoration: 'none' }}>
                                {link.label}
                            </a>
                        ) : (
                            <Link key={i} to={link.href} style={{ fontSize: '0.875rem', color: 'inherit', textDecoration: 'none' }}>
                                {link.label}
                            </Link>
                        )
                    ))}
                </div>
            </div>
        </footer>
    );
};
