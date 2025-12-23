'use client';

import { motion } from 'motion/react';
import { Section } from './ui/section';
import { Container } from './ui/container';
import { SectionHeader } from './ui/section-header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

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
    <Section id="faq" background="muted" withPattern patternColor="secondary">
      <Container size="full">
        <SectionHeader
          badge="FAQ"
          badgeVariant="primary"
          title="What Clients Ask Us Most"
          description="Get answers to common questions about investing and wealth management with Dhanovaa."
        />

        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-start">
          {/* Left Side - Vector Graphics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Main Illustration Container */}
              <div className="relative aspect-square">
                {/* Background Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-secondary)]/20 to-[var(--color-brand-accent)]/20 rounded-full" />
                
                {/* Floating Icons */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[15%] left-[10%] w-16 h-16 bg-[var(--color-brand-secondary)] rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-[20%] right-[15%] w-14 h-14 bg-[var(--color-brand-accent)] rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-[20%] left-[15%] w-12 h-12 bg-[var(--color-brand-primary)] rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="absolute bottom-[15%] right-[10%] w-16 h-16 bg-gradient-to-br from-[var(--color-brand-secondary)] to-[var(--color-brand-accent)] rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </motion.div>

                {/* Center Large Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center shadow-xl">
                    <svg className="w-16 h-16 text-[var(--color-brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
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
          >
            <Accordion type="single" collapsible className="space-y-0 border border-[var(--color-border)] rounded-2xl overflow-hidden bg-white">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className={`border-b last:border-b-0 border-[var(--color-border)] px-5 xl:px-6 hover:bg-[var(--color-brand-secondary)]/5 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-[#f0f9f6]/30'
                    }`}
                  >
                    <AccordionTrigger className="text-[var(--color-brand-primary)] hover:text-[var(--color-brand-secondary)] text-left py-3 xl:py-4 text-sm xl:text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[var(--color-brand-primary)]/70 pb-3 xl:pb-4 text-sm">
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