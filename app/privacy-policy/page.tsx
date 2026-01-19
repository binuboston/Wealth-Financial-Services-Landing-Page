'use client';

import { motion } from 'motion/react';
import { ArrowLeft, Shield, Lock, Eye, FileText, Mail } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { HeroNavigation } from '@/components/layout/HeroNavigation';
import { Footer } from '@/components/layout/Footer';
import { useRouter } from 'next/navigation';
import { siteConfig } from '@/lib/config';

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
              At {siteConfig.name}, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
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
            {/* Information We Collect */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[var(--color-brand-primary)]/10 rounded-lg">
                  <Eye className="w-6 h-6 text-[var(--color-brand-primary)]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 m-0">Information We Collect</h2>
              </div>
              
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p className="text-lg font-semibold text-gray-900">Personal Information</p>
                <p>We may collect personal information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, email address, phone number, and postal address</li>
                  <li>Financial information necessary for providing our services</li>
                  <li>Government-issued identification documents (as required by regulations)</li>
                  <li>Bank account details and investment preferences</li>
                  <li>Information you provide when contacting us or using our services</li>
                </ul>

                <p className="text-lg font-semibold text-gray-900 mt-6">Automatically Collected Information</p>
                <p>When you visit our website, we may automatically collect certain information, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[var(--color-brand-primary)]/10 rounded-lg">
                  <Shield className="w-6 h-6 text-[var(--color-brand-primary)]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 m-0">How We Use Your Information</h2>
              </div>
              
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide, maintain, and improve our financial services</li>
                  <li>To process transactions and manage your investment accounts</li>
                  <li>To comply with legal and regulatory requirements (SEBI, AMFI, etc.)</li>
                  <li>To communicate with you about your account, services, and updates</li>
                  <li>To send you marketing communications (with your consent)</li>
                  <li>To detect, prevent, and address technical issues and security threats</li>
                  <li>To personalize your experience and provide customer support</li>
                </ul>
              </div>
            </div>

            {/* Information Sharing and Disclosure */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[var(--color-brand-primary)]/10 rounded-lg">
                  <Lock className="w-6 h-6 text-[var(--color-brand-primary)]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 m-0">Information Sharing and Disclosure</h2>
              </div>
              
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our business, subject to confidentiality agreements</li>
                  <li><strong>Regulatory Compliance:</strong> When required by law, regulation, or legal process, including SEBI, AMFI, and other financial regulatory authorities</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of assets, with notice to you</li>
                  <li><strong>With Your Consent:</strong> When you have explicitly given us permission to share your information</li>
                  <li><strong>Protection of Rights:</strong> To protect our rights, privacy, safety, or property, and that of our clients</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[var(--color-brand-primary)]/10 rounded-lg">
                  <Shield className="w-6 h-6 text-[var(--color-brand-primary)]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 m-0">Data Security</h2>
              </div>
              
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and audits</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Employee training on data protection and privacy</li>
                  <li>Compliance with industry standards and regulations</li>
                </ul>
                <p className="mt-4">However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[var(--color-brand-primary)]/10 rounded-lg">
                  <FileText className="w-6 h-6 text-[var(--color-brand-primary)]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 m-0">Your Rights</h2>
              </div>
              
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request access to your personal information we hold</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal and regulatory requirements)</li>
                  <li><strong>Objection:</strong> Object to processing of your personal information for certain purposes</li>
                  <li><strong>Data Portability:</strong> Request transfer of your data to another service provider</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw your consent for data processing where applicable</li>
                </ul>
                <p className="mt-4">To exercise these rights, please contact us using the information provided in the "Contact Us" section below.</p>
              </div>
            </div>

            {/* Cookies and Tracking Technologies */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[var(--color-brand-primary)]/10 rounded-lg">
                  <Eye className="w-6 h-6 text-[var(--color-brand-primary)]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 m-0">Cookies and Tracking Technologies</h2>
              </div>
              
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Improve website functionality and performance</li>
                  <li>Provide personalized content and advertisements</li>
                </ul>
                <p className="mt-4">You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.</p>
              </div>
            </div>

            {/* Retention of Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[var(--color-brand-primary)]/10 rounded-lg">
                  <FileText className="w-6 h-6 text-[var(--color-brand-primary)]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 m-0">Retention of Information</h2>
              </div>
              
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Financial records may be retained for extended periods as required by regulatory authorities such as SEBI and AMFI.</p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[var(--color-brand-primary)]/10 rounded-lg">
                  <Shield className="w-6 h-6 text-[var(--color-brand-primary)]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 m-0">Children's Privacy</h2>
              </div>
              
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.</p>
              </div>
            </div>

            {/* Changes to This Privacy Policy */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[var(--color-brand-primary)]/10 rounded-lg">
                  <FileText className="w-6 h-6 text-[var(--color-brand-primary)]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 m-0">Changes to This Privacy Policy</h2>
              </div>
              
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.</p>
              </div>
            </div>

            {/* Contact Us */}
            <div className="space-y-4 bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[var(--color-brand-primary)]/10 rounded-lg">
                  <Mail className="w-6 h-6 text-[var(--color-brand-primary)]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 m-0">Contact Us</h2>
              </div>
              
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
                <div className="space-y-2 mt-4">
                  <p><strong>Email:</strong> <a href={`mailto:${siteConfig.contact.email}`} className="text-[var(--color-brand-primary)] hover:underline">{siteConfig.contact.email}</a></p>
                  <p><strong>Address:</strong> {siteConfig.contact.address}</p>
                </div>
                <p className="mt-4">We will respond to your inquiry within a reasonable timeframe and in accordance with applicable laws.</p>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}


