'use client';

import { motion } from 'motion/react';
import { Section } from '../ui/section';
import { Container } from '../ui/container';
import { SectionHeader } from '../ui/section-header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { cn } from '../ui/utils';

const faqs = [
  {
    question: 'How do I start investing with Dhanovaa?',
    answer: 'Book a consultation. We assess your goals and design a plan.',
  },
  {
    question: 'What is the safest way to begin?',
    answer: 'Start with a disciplined SIP or a diversified mutual fund portfolio.',
  },
  {
    question: 'Do equities carry high risk?',
    answer: 'Equities can be volatile in the short term but remain strong long-term with structure and discipline.',
  },
  {
    question: 'Is PMS or AIF suitable for me?',
    answer: 'Only if you meet the eligibility criteria and prefer high-conviction strategies.',
  },
  {
    question: 'Can NRIs invest through Dhanovaa?',
    answer: 'Yes. NRIs can invest in mutual funds, equities, PMS, AIF, GIFT City funds, and more.',
  },
  {
    question: 'How can I track my investments?',
    answer: 'You can track them through our app, statements, and periodic reviews.',
  },
  {
    question: 'Do you promise guaranteed returns?',
    answer: 'No. We promise clarity, discipline, and expert guidance.',
  },
  {
    question: 'What is the minimum amount I need to invest?',
    answer: 'It varies by product. Mutual funds start from ₹500, PMS from ₹50 lakhs, and AIF from ₹1 crore.',
  },
  {
    question: 'How often should I review my portfolio?',
    answer: 'We recommend quarterly reviews or whenever your financial goals change.',
  },
  {
    question: 'Why should I choose Dhanovaa?',
    answer: 'Because growth needs more than products. It needs structure, clarity, and expertise.',
  },
];

export function FAQ() {
  return (
    <Section id="faq" background="light" withPattern patternColor="secondary">
      <Container size="full">
        <SectionHeader
          badge="FAQ"
          badgeVariant="primary"
          title="What Clients Ask Us Most"
          description="Get answers to common questions about investing and wealth management with Dhanovaa."
        />

        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-center">
          {/* Left Side - Organic Blob Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Organic Green Blob Background */}
              <div className="relative aspect-square">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8dd4c0" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="#68C0AE" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#5aad9d" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M80,120 Q60,80 100,60 T180,80 Q220,60 260,80 T340,100 Q360,140 340,180 T300,240 Q280,280 240,300 T160,320 Q120,340 80,320 T40,260 Q20,220 40,180 Z"
                    fill="url(#blobGradient)"
                    className="drop-shadow-lg"
                  />
                </svg>

                {/* Top-left: Teal icon with question mark */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[12%] left-[8%] w-14 h-14 bg-[#5aad9d] rounded-xl flex items-center justify-center shadow-md"
                >
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>

                {/* Top-right: Light green icon with checkmark */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-[15%] right-[10%] w-14 h-14 bg-[#8dd4c0] rounded-xl flex items-center justify-center shadow-md"
                >
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>

                {/* Bottom-left: Dark teal icon with 'i' symbol */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-[18%] left-[10%] w-14 h-14 bg-[#5aad9d] rounded-xl flex items-center justify-center shadow-md"
                >
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>

                {/* Bottom-right: Light green icon with lightbulb */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="absolute bottom-[15%] right-[8%] w-14 h-14 bg-[#8dd4c0] rounded-xl flex items-center justify-center shadow-md"
                >
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </motion.div>

                {/* Center: White card with dark teal chat bubble */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-28 h-28 bg-white rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <svg className="w-12 h-12 text-[#5aad9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - FAQ List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <Accordion 
              type="single" 
              collapsible 
              className="space-y-0 bg-white rounded-2xl overflow-hidden"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className={cn(
                      "border-b last:border-b-0 border-[var(--color-border)]/30",
                      "px-5 xl:px-6",
                      "transition-all duration-200",
                      "hover:bg-[#f0f9f6]/50",
                      "bg-white"
                    )}
                  >
                    <AccordionTrigger className="text-[var(--foreground)] text-left py-4 xl:py-5 text-base xl:text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[var(--foreground)]/70 pb-4 xl:pb-5 text-sm xl:text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}