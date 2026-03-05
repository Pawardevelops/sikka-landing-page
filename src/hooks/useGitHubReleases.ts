import { useState, useEffect } from 'react';

export interface GitHubAsset {
    name: string;
    browser_download_url: string;
    size: number;
    download_count: number;
}

export interface GitHubRelease {
    id: number;
    tag_name: string;
    name: string;
    body: string;
    published_at: string;
    html_url: string;
    prerelease: boolean;
    draft: boolean;
    assets: GitHubAsset[];
}

const GITHUB_API = 'https://api.github.com/repos/Pawardevelops/Sikka/releases';

export function useGitHubReleases() {
    const [releases, setReleases] = useState<GitHubRelease[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchReleases() {
            try {
                const res = await fetch(GITHUB_API, {
                    signal: controller.signal,
                    headers: {
                        'Accept': 'application/vnd.github.v3+json'
                    }
                });

                if (!res.ok) {
                    throw new Error(`GitHub API responded with ${res.status}`);
                }

                const data: GitHubRelease[] = await res.json();
                // Filter out drafts
                setReleases(data.filter(r => !r.draft));
            } catch (err: any) {
                if (err.name !== 'AbortError') {
                    setError(err.message || 'Failed to fetch releases');
                }
            } finally {
                setLoading(false);
            }
        }

        fetchReleases();

        return () => controller.abort();
    }, []);

    const latestRelease = releases[0] || null;
    const latestApk = latestRelease?.assets.find(a => a.name.endsWith('.apk')) || null;

    return { releases, latestRelease, latestApk, loading, error };
}

/**
 * Format bytes to human-readable size
 */
export function formatSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * Format a GitHub date string to a short readable format
 */
export function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}
