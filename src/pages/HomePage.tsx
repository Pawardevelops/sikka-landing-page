import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { PrivacyManifesto } from '../components/sections/PrivacyManifesto';
import { TheVault } from '../components/sections/TheVault';
import { FeatureGrid } from '../components/sections/FeatureGrid';
import { AnalyticsSection } from '../components/sections/AnalyticsSection';
import { CTA, Footer } from '../components/sections/CTA';

export const HomePage = () => {
    return (
        <main className="app-container">
            {/* Narrative Arc 1: The Context */}
            <Navbar />
            <Hero />

            {/* Narrative Arc 2: The Manifesto */}
            <PrivacyManifesto />

            {/* Narrative Arc 3: The Solution */}
            <TheVault />

            {/* Narrative Arc 4: The Capability */}
            <FeatureGrid />

            {/* Narrative Arc 5: The Depth */}
            <AnalyticsSection />

            {/* Narrative Arc 6: The Closure */}
            <CTA />
            <Footer />
        </main>
    );
};
