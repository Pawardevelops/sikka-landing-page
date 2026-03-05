export const CONTENT = {
    navbar: {
        logo: "SIKKA",
        links: [
            { label: "Home", href: "/" },
            { label: "Roadmap", href: "/roadmap" }
        ],
        cta: "Beta Access"
    },
    hero: {
        badge: "BETA PROGRAM LIVE",
        titleLine1: "Your Money.",
        titleHighlight: "Your Control.",
        titleLine2: "100% Offline.",
        subtitle: "Meet Sikka. The strictly offline personal finance tracker. We are currently inviting users to our private beta. Join the waitlist for early access.",
        cta: "Be a part of Beta Testing",
        watchDemoCta: "Watch Demo",
        stats: [
            { icon: "🔐", value: "100%", label: "ENCRYPTED" },
            { icon: "📡", value: "Offline", label: "FIRST ARCHITECTURE" },
            { icon: "⚡", value: "0ms", label: "LATENCY" }
        ]
    },
    manifesto: {
        badge: "PRIVACY FIRST",
        title: "Your money is",
        titleHighlight: "your business.",
        subtitle: "Sikka operates entirely in your browser with zero server-side storage. We built the privacy manifesto to protect your financial data.",
        tension: {
            badge: "SURVEILLANCE DETECTED",
            title: "Your bank knows too much. Your apps sell your habits.",
            items: [
                { id: "surveillance", title: "Total Surveillance", desc: "Every swipe, transfer, and purchase is logged and analyzed by third-party aggregators." },
                { id: "brokerage", title: "Data Brokerage", desc: "Your financial profile is packaged and sold to advertisers without your explicit consent." },
                { id: "breaches", title: "Server Breaches", desc: "Centralized databases are honey pots for hackers. Your data is only as safe as their weakest server." }
            ]
        },
        solution: {
            badge: "SIKKA SOLUTION",
            title: "Privacy by design. Not by policy.",
            items: [
                { id: "offline_manifesto", title: "100% Offline", desc: "No cloud servers. We literally cannot see your data because it never leaves your device." },
                { id: "no_apis", title: "No APIs", desc: "Manual control for maximum security. No fragile connections that break or spy on you." },
                { id: "local_storage", title: "Local Storage", desc: "Data lives in your pocket, encrypted in your browser using industrial-strength IndexedDB." }
            ]
        }
    },
    problem: {
        badge: "The Tension",
        title: "The Cloud is Loud. Your Data shouldn't be.",
        description: "Every tap, every swipe, every cent recorded on a server somewhere. In an age of constant connectivity, your financial life is an open book for trackers, algorithms, and breaches. Is your privacy the price of convenience?",
        stats: [
            { label: "Data Breaches", value: "Every 39s" },
            { label: "Trackers", value: "30+ per app" }
        ]
    },
    vault: {
        badge: "Local By Design",
        title: "Zero Cloud Lock-In",
        description: "No server pings. No cloud syncing. Your financial data lives entirely on your device, locked behind OS-level biometric encryption. Your data, your phone, your decision.",
        highlight: "Your own Google Drive, encrypted safely."
    },
    features: {
        title: "Uncompromising Tools.",
        list: [
            {
                id: "offline",
                title: "100% Offline with Encrypted Backups",
                description: "Track every cent without exposing your habits to servers. We rely entirely on local storage—no servers, ever. Backup your data securely to Google Drive, completely encrypted—just like WhatsApp.",
                benefits: [
                    "Fingerprint / FaceID Gateway Built-in",
                    "Your own Google Drive, encrypted safely",
                    'Erase everything instantly with our "Delete All Data" kill-switch'
                ]
            },
            {
                id: "accounts",
                title: "Unlimited Accounts",
                description: "Add as many accounts as you have. Bank, Credit Card, Cash, Wallet, or Crypto—manage them all in one view. Log transfers instantly to keep balances in perfect sync."
            },
            {
                id: "subs",
                title: "Advanced Subs Management",
                description: "Whether you pay and others use it, someone else pays and you owe them, or you own the entire thing—Sikka splits the math seamlessly and reminds you who owes what."
            }
        ]
    },
    analytics: {
        title: {
            part1: "Transcend Logic.",
            part2: "Sentimental Analytics."
        },
        description: "Numbers don't tell the whole story. Sikka lets you assign emotions and sentiments to your historical transactions. Tag a late-night purchase with 'Regret' and view exactly how much your emotional spending costs you every month.",
        items: [
            {
                title: 'Category Tracking',
                desc: 'Break down spending by food, transit, and more per account.'
            },
            {
                title: 'Emotion Tags',
                desc: 'Select multiple sentiments for any transaction.'
            },
            {
                title: 'Regret Stats',
                desc: "Powerful analytics that reveal exactly what you wish you didn't buy."
            }
        ],
        regretWidget: {
            title: "Regret Analytics",
            stats: "spent on regrets this month",
            amount: "₹4,320"
        }
    },
    cta: {
        title: "Take Back Control.",
        subtitle: "Download directly from GitHub. No app store. No tracking.",
        button: "Download APK",
        version: "v1.0.0-beta",
        githubUrl: "https://github.com/Pawardevelops/Sikka/releases",
        features: [
            "Direct from GitHub — no middleman",
            "Every version archived & auditable",
            "Sideload in seconds, own your install"
        ]
    },
    openSource: {
        preReveal: "Tap to unveil",
        title: "It's Open Source.",
        subtitle: "Sikka's entire codebase is public. Audit it, fork it, own it. Privacy you can verify, not just trust.",
        githubUrl: "https://github.com/Pawardevelops/Sikka",
        cta: "View on GitHub",
        highlights: [
            { title: "Full Transparency", desc: "Every line of code is public and auditable." },
            { title: "Community Driven", desc: "Built in the open, shaped by contributors." },
            { title: "Fork & Self-Host", desc: "Take the code and run it your way." }
        ]
    },
    footer: {
        copy: "© 2026 Sikka App. All rights reserved.",
        links: [
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
            { label: "Twitter", href: "https://twitter.com/sikka" }
        ]
    },
    roadmap: {
        activeBadge: "ACTIVE DEVELOPMENT",
        title: "Product Roadmap",
        subtitle: "A transparent look at the future of privacy-first financial management. Every feature is designed to run 100% locally on your machine.",
        phases: [
            {
                id: "p1",
                tag: "COMPLETED",
                title: "Privacy Manifesto",
                blurb: "Our core foundation for data sovereignty",
                status: "Completed",
                icon: "checkmark",
                description: "Established the technical architecture for local-first encryption and offline-only data persistence."
            },
            {
                id: "p2",
                tag: "COMPLETED",
                title: "Manual Multi-Account",
                blurb: "Consolidated view of all balances",
                status: "Completed",
                icon: "checkmark",
                description: "Users can now track unlimited accounts including bank, cash, and digital wallets manually."
            },
            {
                id: "p3",
                tag: "COMPLETED",
                title: "Sentiment Engine",
                blurb: "Emotional tracking for spending",
                status: "Completed",
                icon: "checkmark",
                description: "Integrated emotional tagging for transactions to help users understand why they spend, not just where."
            },
            {
                id: "p4",
                tag: "IN PROGRESS",
                title: "Notification Listener",
                blurb: "Instant transaction detection",
                status: "In Progress",
                icon: "refresh",
                description: "Real-time reading of bank SMS notifications to automatically prompt for transaction entry without data leaving the device."
            },
            {
                id: "p5",
                tag: "PLANNED",
                title: "SMS History Onboarding",
                blurb: "Retroactive expense parsing",
                status: "Planned",
                icon: "clock",
                description: "Bulk local parsing of historical SMS messages to build an instant transaction history from day one."
            },
            {
                id: "p6",
                tag: "PLANNED",
                title: "Smart Expense Search",
                blurb: "Natural language querying",
                status: "Planned",
                icon: "search",
                description: "Search with queries like \"How much did I spend on coffee last month?\" using local lightweight NLP models."
            },
            {
                id: "p7",
                tag: "PLANNED",
                title: "Direct UPI Share",
                blurb: "Seamless P2P settlements",
                status: "Planned",
                icon: "share",
                description: "Instantly generate and share dynamic UPI QR codes for splitting bills with friends without switching apps."
            },
            {
                id: "p8",
                tag: "PLANNED",
                title: "Auto-Fetch Ecosystem",
                blurb: "Merchant-specific deep parsing",
                status: "Planned",
                icon: "cart",
                description: "Deep local scraping for Swiggy, Zomato, and Zepto to automatically categorize food and grocery itemized spending."
            }
        ],
        philosophy: [
            {
                id: "local",
                title: "Local-First",
                desc: "Your data never touches our servers. All parsing and AI inference happens in your browser.",
                icon: "lock"
            },
            {
                id: "open",
                title: "Open Source",
                desc: "Our roadmap and parsing engines are community-audited to ensure total transparency.",
                icon: "code"
            },
            {
                id: "native",
                title: "Native Speed",
                desc: "Engineered for performance. Sikka Web stays fast even with 10+ years of transaction data.",
                icon: "zap"
            }
        ],
        suggestion: {
            title: "Suggest a Feature",
            description: "Anyone can suggest a feature and we will take the best ones.",
            cta: "Submit Proposal"
        }
    },
    privacy: {
        title: "Privacy Policy",
        lastUpdated: "Last Updated: March 1, 2026",
        sections: [
            {
                title: "100% Offline by Design",
                content: "Sikka is built as a local-first application. Your financial data, transaction history, and account balances are stored exclusively on your device. We do not operate any database servers that store your personal financial information."
            },
            {
                title: "No Data Collection",
                content: "We do not collect, sell, or trade your personal information. Since your data lives on your device, we literally cannot see it. We do not use third-party trackers or analytics that profile your financial behavior."
            },
            {
                title: "Encrypted Backups",
                content: "If you choose to use the backup feature, your data is encrypted locally on your device before being uploaded to your own personal Google Drive. We do not have access to your encryption keys or your Google Drive data."
            },
            {
                title: "Manual Control",
                content: "You have full control over your data. You can delete all locally stored data instantly using the 'Delete All Data' kill-switch within the app settings."
            }
        ]
    },
    terms: {
        title: "Terms of Service",
        lastUpdated: "Last Updated: March 1, 2026",
        sections: [
            {
                title: "Acceptance of Terms",
                content: "By using Sikka, you agree to these terms. Sikka is provided as-is, with no warranties regarding data accuracy or availability."
            },
            {
                title: "Local Responsibility",
                content: "As a local-first application, you are solely responsible for the security of your device and the maintenance of your backups. We cannot recover data that is lost due to device failure or forgotten encryption keys."
            },
            {
                title: "Personal Use",
                content: "Sikka is intended for personal financial tracking. Commercial use or redistribution of the software is prohibited without prior authorization."
            },
            {
                title: "Updates",
                content: "We may update the software to improve features or security. These updates will be delivered through standard app distribution channels."
            }
        ]
    }
};
