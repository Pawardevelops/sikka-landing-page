import { useEffect } from 'react';

interface SEOHeadProps {
    title: string;
    description: string;
    canonicalPath?: string;
    jsonLd?: Record<string, unknown>;
}

const BASE_URL = 'https://www.sikka.pawarsachin.dev';

/**
 * SEOHead — Dynamically sets page-level SEO metadata.
 * 
 * Updates <title>, <meta name="description">, <link rel="canonical">,
 * Open Graph tags, Twitter Card tags, and injects optional JSON-LD
 * structured data on mount. Cleans up on unmount.
 */
export const SEOHead = ({ title, description, canonicalPath = '/', jsonLd }: SEOHeadProps) => {
    useEffect(() => {
        // Title
        const prevTitle = document.title;
        document.title = title;

        // Helper to set or create a meta tag
        const setMeta = (attr: string, key: string, content: string) => {
            let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute(attr, key);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };

        // Description
        setMeta('name', 'description', description);

        // Open Graph
        setMeta('property', 'og:title', title);
        setMeta('property', 'og:description', description);
        setMeta('property', 'og:url', `${BASE_URL}${canonicalPath}`);

        // Twitter Card
        setMeta('name', 'twitter:title', title);
        setMeta('name', 'twitter:description', description);

        // Canonical
        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', `${BASE_URL}${canonicalPath}`);

        // JSON-LD Structured Data
        let scriptEl: HTMLScriptElement | null = null;
        if (jsonLd) {
            scriptEl = document.createElement('script');
            scriptEl.setAttribute('type', 'application/ld+json');
            scriptEl.textContent = JSON.stringify(jsonLd);
            document.head.appendChild(scriptEl);
        }

        // Cleanup
        return () => {
            document.title = prevTitle;
            if (scriptEl && scriptEl.parentNode) {
                scriptEl.parentNode.removeChild(scriptEl);
            }
        };
    }, [title, description, canonicalPath, jsonLd]);

    return null;
};
