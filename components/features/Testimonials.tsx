'use client';

import { motion } from 'motion/react';
import { Star, Quote, ChevronRight } from 'lucide-react';
import { Section } from '../ui/section';
import { Container } from '../ui/container';
import { SectionHeader } from '../ui/section-header';
import { googleReviews } from '@/lib/data/google-reviews';

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
          {/* Real Google Reviews Integration */}
          {googleReviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-white border border-[#003448]/10 rounded-2xl xl:rounded-3xl p-8 xl:p-10 relative hover:shadow-xl transition-all"
            >
              <Quote className="w-10 h-10 xl:w-12 xl:h-12 text-[#68c0ae] opacity-20 absolute top-6 xl:top-8 right-6 xl:right-8" />

              {/* Google Logo Badge - Moved to top left to avoid Quote overlap */}
              <div className="absolute top-4 left-4">
                <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full border border-[#003448]/10 shadow-sm">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  <span className="text-[10px] font-medium text-[#003448]/70">Google</span>
                </div>
              </div>

              <div className="flex gap-1 mb-4 xl:mb-5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 xl:w-6 xl:h-6 fill-[#9ece6c] text-[#9ece6c]" />
                ))}
              </div>
              <p className="text-[#003448]/70 mb-6 xl:mb-8 text-sm xl:text-base leading-relaxed">
                {review.content}
              </p>
              <div className="flex items-center gap-3 xl:gap-4">
                <div className="w-12 h-12 xl:w-14 xl:h-14 bg-gradient-to-br from-[#003448] to-[#68c0ae] rounded-full flex items-center justify-center text-white text-lg xl:text-xl font-semibold shadow-lg">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="text-[#003448] font-semibold text-base xl:text-lg">{review.name}</div>
                  <div className="text-[#003448]/60 text-sm xl:text-base">{review.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
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
      </Container >
    </Section >
  );
}