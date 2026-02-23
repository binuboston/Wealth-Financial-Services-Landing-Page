'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Section } from '../ui/section';
import { Container } from '../ui/container';
import { SectionHeader } from '../ui/section-header';
import { Button } from '../ui/button';

interface GoogleReview {
  name: string;
  rating: number;
  date: string;
  content: string;
  avatar?: string;
}

// Sample Google Reviews - Replace with actual Google Reviews API data
const googleReviews: GoogleReview[] = [
  {
    name: 'Rajesh Kumar',
    rating: 5,
    date: '2 weeks ago',
    content: 'Excellent financial advisory services! Dhanovaa helped me set up a comprehensive investment portfolio. The team is professional, knowledgeable, and always responsive to my queries.',
  },
  {
    name: 'Priya Menon',
    rating: 5,
    date: '1 month ago',
    content: 'Outstanding service! They guided me through SIP investments and mutual funds with clarity. My portfolio has been growing steadily. Highly recommend their expertise.',
  },
  {
    name: 'Anil Varghese',
    rating: 5,
    date: '3 weeks ago',
    content: 'Professional and trustworthy financial advisors. They took time to understand my goals and created a personalized investment strategy. Very satisfied with the results.',
  },
  {
    name: 'Deepa Nair',
    rating: 5,
    date: '1 month ago',
    content: 'Great experience working with Dhanovaa. They explained everything clearly and helped me make informed decisions about my financial future. The team is reliable and transparent.',
  },
  {
    name: 'Sanjay Pillai',
    rating: 5,
    date: '2 months ago',
    content: 'Best financial advisory in Kerala! They helped me diversify my investments and provided excellent guidance on mutual funds. The service is top-notch and results speak for themselves.',
  },
  {
    name: 'Meera Suresh',
    rating: 5,
    date: '3 weeks ago',
    content: 'Very satisfied with Dhanovaa\'s services. They are knowledgeable, patient, and always available to answer questions. My investment journey has been smooth thanks to their expertise.',
  },
];

export function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerView = 3; // Show 3 reviews at a time on desktop
  const totalReviews = googleReviews.length;
  const maxIndex = Math.max(0, totalReviews - reviewsPerView);

  const nextReviews = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevReviews = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleReviews = googleReviews.slice(currentIndex, currentIndex + reviewsPerView);

  // Calculate average rating
  const averageRating = googleReviews.reduce((sum, review) => sum + review.rating, 0) / googleReviews.length;

  return (
    <Section id="google-reviews" background="muted">
      <Container size="wide">
        <SectionHeader
          badge="Google Reviews"
          badgeVariant="primary"
          title="What Our Clients Say"
          description="Real reviews from our valued clients on Google. See why thousands trust Dhanovaa for their financial journey."
        />

        {/* Average Rating Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 xl:mb-16"
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${i < Math.round(averageRating)
                    ? 'fill-[#9ece6c] text-[#9ece6c]'
                    : 'fill-gray-300 text-gray-300'
                    }`}
                />
              ))}
            </div>
            <span className="text-2xl xl:text-3xl font-bold text-[var(--foreground)]">
              {averageRating.toFixed(1)}
            </span>
          </div>
          <div className="text-[var(--foreground)]/70 text-base xl:text-lg">
            Based on {totalReviews} Google reviews
          </div>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
              >
                {visibleReviews.map((review, index) => (
                  <motion.div
                    key={`${review.name}-${currentIndex}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="bg-white border border-[#003448]/10 rounded-2xl xl:rounded-3xl p-6 xl:p-8 hover:shadow-xl transition-all relative"
                  >
                    {/* Google Logo Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full border border-[#003448]/10 shadow-sm">
                        <svg
                          className="w-4 h-4"
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
                        <span className="text-xs font-medium text-[#003448]/70">Google</span>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#9ece6c] text-[#9ece6c]"
                        />
                      ))}
                    </div>

                    {/* Review Content */}
                    <p className="text-[#003448]/70 mb-6 text-sm xl:text-base leading-relaxed line-clamp-4">
                      {review.content}
                    </p>

                    {/* Reviewer Info */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#003448]/10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#003448] to-[#68c0ae] rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-md">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-[#003448] font-semibold text-sm xl:text-base">
                            {review.name}
                          </div>
                          <div className="text-[#003448]/60 text-xs xl:text-sm">
                            {review.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          {totalReviews > reviewsPerView && (
            <>
              <Button
                variant="outline"
                size="icon"
                onClick={prevReviews}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 xl:-translate-x-6 bg-white shadow-lg hover:bg-[#f0f9f6] border-[#003448]/10 z-10"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="w-5 h-5 text-[#003448]" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextReviews}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 xl:translate-x-6 bg-white shadow-lg hover:bg-[#f0f9f6] border-[#003448]/10 z-10"
                aria-label="Next reviews"
              >
                <ChevronRight className="w-5 h-5 text-[#003448]" />
              </Button>
            </>
          )}

          {/* Dots Indicator */}
          {totalReviews > reviewsPerView && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                    ? 'bg-[var(--color-brand-primary)] w-6'
                    : 'bg-[#003448]/20 hover:bg-[#003448]/40'
                    }`}
                  aria-label={`Go to review set ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* View All Reviews Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-12 xl:mt-16"
        >
          <Button
            variant="outline"
            className="group border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white"
            onClick={() => {
              // Replace with your actual Google Reviews URL
              window.open('https://www.google.com/maps/place/Dhanovaa', '_blank');
            }}
          >
            View All Reviews on Google
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}


