'use client';

import { motion } from 'motion/react';
import { ArrowLeft, Cookie, Shield, Eye, FileText, Settings, Info } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { HeroNavigation } from '@/components/layout/HeroNavigation';
import { Footer } from '@/components/layout/Footer';
import { useRouter } from 'next/navigation';
import { siteConfig } from '@/lib/config';

export default function CookiePolicyPage() {
    const router = useRouter();

    const handleBack = () => {
        router.push('/');
    };

    const lastUpdated = 'January 2026';

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <Section background="gradient" className="relative overflow-hidden pt-32 pb-20 xl:pt-40 xl:pb-32">
                {/* Hero Navigation */}
                <div className="absolute top-0 left-0 right-0 z-50 pt-4 sm:pt-6">
                    <HeroNavigation isVisible={true} />
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-[var(--color-brand-secondary)] rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-[var(--color-brand-accent)] rounded-full blur-3xl" />
                </div>

                <Container size="default" className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Back Button */}
                        <Button
                            variant="ghost"
                            onClick={handleBack}
                            className="mb-8 text-white hover:text-white/80 hover:bg-white/10"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Button>

                        {/* Badge */}
                        <div className="mb-6">
                            <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30 text-white">
                                Legal Document
                            </Badge>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-6 leading-tight">
                            Cookie Policy
                        </h1>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-6 text-white/90 mb-8">
                            <div className="flex items-center gap-2">
                                <FileText className="w-5 h-5" />
                                <span className="text-lg">Last Updated: {lastUpdated}</span>
                            </div>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl xl:text-2xl text-white/90 leading-relaxed max-w-3xl">
                            This Cookie Policy explains how {siteConfig.name} uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them.
                        </p>
                    </motion.div>
                </Container>
            </Section>

            {/* Content Section */}
            <Section background="white" className="py-16 xl:py-24">
                <Container size="narrow" className="prose prose-lg max-w-none">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-12"
                    >
                        {/* What are Cookies? */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-[var(--color-brand-primary)]/10 rounded-lg">
                                    <Cookie className="w-6 h-6 text-[var(--color-brand-primary)]" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 m-0">What are Cookies?</h2>
                            </div>

                            <div className="space-y-3 text-gray-700 leading-relaxed">
                                <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
                                <p>Cookies set by the website owner (in this case, {siteConfig.name}) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies."</p>
                            </div>
                        </div>

                        {/* Why do we use Cookies? */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-[var(--color-brand-primary)]/10 rounded-lg">
                                    <Info className="w-6 h-6 text-[var(--color-brand-primary)]" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 m-0">Why do we use Cookies?</h2>
                            </div>

                            <div className="space-y-3 text-gray-700 leading-relaxed">
                                <p>We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.</p>
                            </div>
                        </div>

                        {/* Types of Cookies We Use */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-[var(--color-brand-primary)]/10 rounded-lg">
                                    <Shield className="w-6 h-6 text-[var(--color-brand-primary)]" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 m-0">Types of Cookies We Use</h2>
                            </div>

                            <div className="space-y-6 text-gray-700 leading-relaxed">
                                <div>
                                    <p className="text-lg font-semibold text-gray-900">Essential Website Cookies</p>
                                    <p>These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.</p>
                                    <ul className="list-disc pl-6 space-y-2 mt-2">
                                        <li>Session variables for our SIP and Wealth calculators</li>
                                        <li>Authentication and security for client dashboard access</li>
                                        <li>Load balancing to ensure site stability</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="text-lg font-semibold text-gray-900">Performance and Functionality Cookies</p>
                                    <p>These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality (like videos or specialized calculators) may become unavailable.</p>
                                    <ul className="list-disc pl-6 space-y-2 mt-2">
                                        <li>Remembering your calculation inputs across sessions</li>
                                        <li>Storing language or region preferences</li>
                                        <li>Enabling video playback for our gallery and educational content</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="text-lg font-semibold text-gray-900">Analytics and Customization Cookies</p>
                                    <p>These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.</p>
                                    <ul className="list-disc pl-6 space-y-2 mt-2">
                                        <li>Google Analytics to track user interaction and traffic</li>
                                        <li>Heatmaps to identify which financial resources are most valuable to our clients</li>
                                        <li>Internal statistics on service page engagement</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* How can I control Cookies? */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-[var(--color-brand-primary)]/10 rounded-lg">
                                    <Settings className="w-6 h-6 text-[var(--color-brand-primary)]" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 m-0">How can I control Cookies?</h2>
                            </div>

                            <div className="space-y-3 text-gray-700 leading-relaxed">
                                <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager or your web browser.</p>
                                <p>Most browsers allow you to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>See what cookies you've got and delete them on an individual basis</li>
                                    <li>Block third-party cookies</li>
                                    <li>Block cookies from particular sites</li>
                                    <li>Block all cookies from being set</li>
                                    <li>Delete all cookies when you close your browser</li>
                                </ul>
                                <p className="mt-4">Please note that if you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.</p>
                            </div>
                        </div>

                        {/* Contact Us Section */}
                        <div className="space-y-4 bg-gray-50 p-8 rounded-xl border border-gray-200">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-[var(--color-brand-primary)]/10 rounded-lg">
                                    <Eye className="w-6 h-6 text-[var(--color-brand-primary)]" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 m-0">Contact for Policy Inquiries</h2>
                            </div>

                            <div className="space-y-3 text-gray-700 leading-relaxed">
                                <p>If you have any questions about our use of cookies or other technologies, please email us at:</p>
                                <div className="space-y-2 mt-4">
                                    <p><strong>Email:</strong> <a href={`mailto:${siteConfig.contact.email}`} className="text-[var(--color-brand-primary)] hover:underline">{siteConfig.contact.email}</a></p>
                                    <p><strong>Address:</strong> {siteConfig.contact.address}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </Section>

            <Footer />
        </div>
    );
}
