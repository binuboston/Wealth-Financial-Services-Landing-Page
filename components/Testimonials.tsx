'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Section } from './ui/section';
import { Container } from './ui/container';
import { SectionHeader } from './ui/section-header';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner, Kochi',
    content: 'Dhanovaa didn\'t just advise me on investments—they designed a complete financial structure. My portfolio is now balanced, tax-efficient, and built to grow over decades. That\'s the difference expertise makes.',
    rating: 5,
  },
  {
    name: 'Priya Menon',
    role: 'NRI Professional, Dubai',
    content: 'As an NRI, managing investments in India felt overwhelming. Dhanovaa made it effortless. Clear guidance, timely updates, and strategies that actually work. My mutual fund SIPs are now growing steadily every year.',
    rating: 5,
  },
  {
    name: 'Anil Varghese',
    role: 'Entrepreneur, Trivandrum',
    content: 'I\'ve worked with multiple advisors before, but Dhanovaa stands apart. They don\'t push products—they build strategies. My PMS portfolio has given me consistent returns, even through market volatility.',
    rating: 5,
  },
  {
    name: 'Deepa Nair',
    role: 'Doctor, Calicut',
    content: 'I wanted financial security without the stress of tracking markets daily. Dhanovaa set up disciplined SIPs and a diversified mutual fund portfolio. Now I focus on my practice while my wealth grows steadily in the background.',
    rating: 5,
  },
  {
    name: 'Sanjay Pillai',
    role: 'IT Professional, Bangalore',
    content: 'What I appreciate most about Dhanovaa is their honesty. They told me when NOT to invest in certain products. That trust is rare. My financial decisions are now backed by clarity and confidence.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials" background="white">
      <Container size="wide">
        <SectionHeader
          badge="Testimonials"
          badgeVariant="accent"
          title="Voices of Enduring Trust"
          description="Real stories from clients who built their financial futures with Dhanovaa."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-white border border-[#003448]/10 rounded-2xl xl:rounded-3xl p-8 xl:p-10 relative hover:shadow-xl transition-all"
            >
              <Quote className="w-10 h-10 xl:w-12 xl:h-12 text-[#68c0ae] opacity-20 absolute top-6 xl:top-8 right-6 xl:right-8" />
              
              <div className="flex gap-1 mb-4 xl:mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 xl:w-6 xl:h-6 fill-[#9ece6c] text-[#9ece6c]" />
                ))}
              </div>

              <p className="text-[#003448]/70 mb-6 xl:mb-8 text-sm xl:text-base">{testimonial.content}</p>

              <div className="flex items-center gap-3 xl:gap-4">
                <div className="w-12 h-12 xl:w-14 xl:h-14 bg-gradient-to-br from-[#003448] to-[#68c0ae] rounded-full flex items-center justify-center text-white shadow-lg text-lg xl:text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-[#003448] text-base xl:text-lg">{testimonial.name}</div>
                  <div className="text-[#003448]/60 text-sm xl:text-base">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}