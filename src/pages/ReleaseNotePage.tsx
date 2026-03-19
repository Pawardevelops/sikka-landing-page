import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/sections/CTA';
import { SEOHead } from '../components/shared/SEOHead';
import { useGitHubReleases, formatDate, formatSize } from '../hooks/useGitHubReleases';
import { ChevronLeft, Calendar, Tag, Download, Github, AlertCircle, Loader2 } from 'lucide-react';

export const ReleaseNotePage = () => {
    const { tag } = useParams<{ tag: string }>();
    const { releases, loading, error } = useGitHubReleases();
    
    if (error) {
        return (
            <div className="policy-page">
                <Navbar />
                <div className="container section-padding" style={{ paddingTop: '200px', textAlign: 'center' }}>
                    <AlertCircle size={48} className="text-muted" style={{ margin: '0 auto 20px' }} />
                    <h2>Connection Error</h2>
                    <p>{error}</p>
                </div>
                <Footer />
            </div>
        );
    }
    
    const release = releases.find(r => r.tag_name === tag);
    const apk = release?.assets.find(a => a.name.endsWith('.apk'));

    if (loading) {
        return (
            <div className="policy-page">
                <Navbar />
                <div className="container section-padding" style={{ paddingTop: '200px', textAlign: 'center' }}>
                    <Loader2 size={32} className="spin-icon" style={{ margin: '0 auto 20px' }} />
                    <p>Fetching release details...</p>
                </div>
                <Footer />
            </div>
        );
    }

    if (!release) {
        return (
            <div className="policy-page">
                <Navbar />
                <div className="container section-padding" style={{ paddingTop: '200px', textAlign: 'center' }}>
                    <AlertCircle size={48} className="text-muted" style={{ margin: '0 auto 20px' }} />
                    <h2>Release Not Found</h2>
                    <p>The version "{tag}" could not be found or has been removed.</p>
                    <Link to="/" className="policy-back-btn" style={{ margin: '30px auto 0', justifyContent: 'center' }}>
                        <ChevronLeft size={18} />
                        Back to Home
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="policy-page">
            <SEOHead 
                title={`Release ${release.tag_name} — Sikka`}
                description={`Changelog and download link for Sikka ${release.tag_name}.`}
                canonicalPath={`/release-note-${release.tag_name}`}
            />
            <Navbar />

            <main className="container policy-main" style={{ paddingTop: '160px' }}>
                <Link to="/" className="policy-back-btn">
                    <ChevronLeft size={18} />
                    Back to Home
                </Link>

                <motion.div 
                    className="policy-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="policy-icon-box">
                        <Tag className="text-mint" size={32} />
                    </div>
                    <h1 className="policy-title">Release {release.tag_name}</h1>
                    <div className="release-meta" style={{ marginTop: '12px', fontSize: '1rem' }}>
                        <Calendar size={16} />
                        <span>{formatDate(release.published_at)}</span>
                        {apk && (
                            <>
                                <span className="meta-dot">·</span>
                                <span>{formatSize(apk.size)}</span>
                                <span className="meta-dot">·</span>
                                <span>{apk.download_count} total downloads</span>
                            </>
                        )}
                    </div>
                </motion.div>

                <div className="policy-content" style={{ paddingBottom: '100px' }}>
                    <div className="github-release-card" style={{ padding: '40px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px' }}>
                        <div className="release-notes-content" style={{ maxHeight: 'none', overflow: 'visible', fontSize: '1.125rem' }}>
                            <ReactMarkdown>
                                {release.body}
                            </ReactMarkdown>
                        </div>

                        <div className="release-page-actions" style={{ marginTop: '60px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            {apk && (
                                <a href={apk.browser_download_url} className="github-download-btn" style={{ width: 'auto', padding: '16px 32px' }}>
                                    <Download size={20} />
                                    Download APK ({formatSize(apk.size)})
                                </a>
                            )}
                            <a 
                                href={release.html_url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="github-repo-link"
                                style={{ margin: '0', background: 'rgba(255,255,255,0.05)', padding: '16px 32px' }}
                            >
                                <Github size={20} />
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ReleaseNotePage;
