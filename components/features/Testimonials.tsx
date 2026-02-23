'use client';

import { motion } from 'motion/react';
import { Star, Quote, ChevronRight } from 'lucide-react';
import { Section } from '../ui/section';
import { Container } from '../ui/container';
import { SectionHeader } from '../ui/section-header';
import { googleReviews } from '@/lib/data/google-reviews';

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
          badgeVariant="primary"
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

        {/* Real Google Reviews Integration */}
        <div className="mt-20 pt-20 border-t border-[#003448]/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <h3 className="text-xl font-semibold text-[#003448]">Recent Google Reviews</h3>
            </div>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#9ece6c] text-[#9ece6c]" />
              ))}
              <span className="ml-2 text-[#003448]/70 font-medium">5.0 Average Rating</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {googleReviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/50 backdrop-blur-sm border border-[#003448]/5 rounded-2xl p-6 xl:p-8 hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#9ece6c] text-[#9ece6c]" />
                  ))}
                </div>
                <p className="text-[#003448]/70 mb-6 text-sm italic">&ldquo;{review.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#003448]/5 flex items-center justify-center text-[#003448] text-xs font-bold ring-1 ring-[#003448]/10">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-[#003448] text-sm font-semibold">{review.name}</div>
                    <div className="text-[#003448]/40 text-xs">{review.date}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="https://maps.app.goo.gl/qSoSGfnNh2nUjLMi6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-white border border-[#003448]/10 text-[#003448] rounded-2xl hover:bg-gray-50 transition-all shadow-sm hover:shadow-md font-medium group"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span>View More on Google</span>
            <Star className="w-4 h-4 fill-[#9ece6c] text-[#9ece6c] group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>
      </Container>
    </Section>
  );
}