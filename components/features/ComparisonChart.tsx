'use client';

import { motion } from 'motion/react';
import { Section } from '../ui/section';
import { Container } from '../ui/container';
import { SectionHeader } from '../ui/section-header';

const comparisonData = [
  {
    feature: 'Risk Level',
    equities: 'Medium–High',
    mutualFunds: 'Medium',
    pms: 'High',
    aif: 'High',
  },
  {
    feature: 'Investor Type',
    equities: 'Beginner–Advanced',
    mutualFunds: 'Beginner–Advanced',
    pms: 'HNI',
    aif: 'Accredited Investors',
  },
  {
    feature: 'Minimum Investment',
    equities: 'No minimum',
    mutualFunds: '₹500–₹1000',
    pms: '₹50 Lakhs',
    aif: '₹1 Crore',
  },
  {
    feature: 'Professional Management',
    equities: 'Optional',
    mutualFunds: 'Yes',
    pms: 'Yes',
    aif: 'Yes',
  },
  {
    feature: 'Customization',
    equities: 'High',
    mutualFunds: 'Medium',
    pms: 'Very High',
    aif: 'High',
  },
  {
    feature: 'Diversification',
    equities: 'Low–Medium',
    mutualFunds: 'High',
    pms: 'Medium',
    aif: 'Medium',
  },
  {
    feature: 'Return Potential',
    equities: 'High',
    mutualFunds: 'Moderate–High',
    pms: 'High',
    aif: 'High',
  },
  {
    feature: 'Regulated By',
    equities: 'SEBI',
    mutualFunds: 'SEBI',
    pms: 'SEBI',
    aif: 'SEBI',
  },
  {
    feature: 'Suitability',
    equities: 'Long-term growth',
    mutualFunds: 'Beginner & SIP investors',
    pms: 'Serious wealth builders',
    aif: 'Sophisticated investors',
  },
];

export function ComparisonChart() {
  return (
    <Section id="comparison" background="white" withPattern patternColor="accent">
      <Container size="full">
        <SectionHeader
          badge="Compare"
          badgeVariant="accent"
          title="Equities vs Mutual Funds vs PMS vs AIF"
          description="Understanding the differences to make informed investment decisions."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto rounded-3xl"
        >
          <div className="min-w-[800px] bg-[#1a2332] p-6 xl:p-10 rounded-3xl">
            {/* Header Row */}
            <div className="grid grid-cols-5 gap-3 xl:gap-4 mb-4">
              <motion.div 
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-[#0d3d4a] text-white rounded-2xl p-4 xl:p-6 flex items-center justify-center"
              >
                <h3 className="text-base xl:text-lg">Feature</h3>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-[#0d3d4a] text-white rounded-2xl p-4 xl:p-6 text-center"
              >
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-base xl:text-lg">Equities</h3>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-[#68c0ae] text-white rounded-2xl p-4 xl:p-6 text-center"
              >
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-base xl:text-lg">Mutual Funds</h3>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-[#9ece6c] text-white rounded-2xl p-4 xl:p-6 text-center"
              >
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-base xl:text-lg">PMS</h3>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-[#0d3d4a] text-white rounded-2xl p-4 xl:p-6 text-center"
              >
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-base xl:text-lg">AIF</h3>
              </motion.div>
            </div>

            {/* Data Rows */}
            <div className="space-y-2">
              {comparisonData.map((row, index) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.005,
                    boxShadow: "0 8px 20px -5px rgba(104, 192, 174, 0.2)",
                    transition: { duration: 0.2 }
                  }}
                  className="grid grid-cols-5 gap-3 xl:gap-4 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <div className="bg-[#0d3d4a] p-3 xl:p-4 flex items-center rounded-xl">
                    <span className="text-[#68c0ae] text-sm xl:text-base">{row.feature}</span>
                  </div>
                  <motion.div 
                    whileHover={{ backgroundColor: "#1a3d47" }}
                    className="bg-[#0f2935] p-3 xl:p-4 flex items-center justify-center text-center rounded-xl transition-colors duration-200"
                  >
                    <span className="text-white text-sm xl:text-base">{row.equities}</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ backgroundColor: "#1a3d47" }}
                    className="bg-[#0f2935] p-3 xl:p-4 flex items-center justify-center text-center rounded-xl transition-colors duration-200"
                  >
                    <span className="text-white text-sm xl:text-base">{row.mutualFunds}</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ backgroundColor: "#1a3d47" }}
                    className="bg-[#0f2935] p-3 xl:p-4 flex items-center justify-center text-center rounded-xl transition-colors duration-200"
                  >
                    <span className="text-white text-sm xl:text-base">{row.pms}</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ backgroundColor: "#1a3d47" }}
                    className="bg-[#0f2935] p-3 xl:p-4 flex items-center justify-center text-center rounded-xl transition-colors duration-200"
                  >
                    <span className="text-white text-sm xl:text-base">{row.aif}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 p-4 xl:p-5 bg-[#0d3d4a]/50 rounded-xl border border-[#68c0ae]/20 flex items-start gap-3"
            >
              <svg className="w-5 h-5 text-[#68c0ae] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <p className="text-white/90 text-sm xl:text-base">
                <span className="text-[#68c0ae]">Expert Tip:</span> Our advisors help you choose the right investment vehicle based on your financial goals, risk appetite, and investment horizon.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}