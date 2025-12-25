'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState, FormEvent, useCallback, useMemo } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className = '' }: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Memoize validation regex
  const emailRegex = useMemo(() => /\S+@\S+\.\S+/, []);
  const phoneRegex = useMemo(() => /^\+?[\d\s-()]+$/, []);

  const validateField = useCallback((name: string, value: string) => {
    switch (name) {
      case 'email':
        if (value && !emailRegex.test(value)) {
          return 'Invalid email address';
        }
        break;
      case 'phone':
        if (value && !phoneRegex.test(value)) {
          return 'Invalid phone number';
        }
        break;
      case 'message':
        if (value && value.length > 500) {
          return 'Message must be 500 characters or less';
        }
        break;
    }
    return '';
  }, [emailRegex, phoneRegex]);

  const handleChange = useCallback((name: string, value: string) => {
    setFormState(prev => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
    setSubmitError(null); // Clear submit error on field change
  }, [validateField]);

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Validate all fields
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formState.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formState.message.length > 500) {
      newErrors.message = 'Message must be 500 characters or less';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name.trim(),
          email: formState.email.trim(),
          phone: formState.phone.trim() || undefined,
          message: formState.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
      setErrors({});
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : 'Failed to send message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  }, [formState, emailRegex]);

  return (
    <div className={`bg-[var(--color-brand-primary-light)]/30 border border-[#003448]/10 rounded-3xl p-8 ${className}`}>
      <div className="mb-6">
        <h3 className="text-[#003448] mb-2">Send us a message</h3>
        <p className="text-[#003448]/70">We'll get back to you within 24 hours</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Input */}
        <motion.div
          animate={{ scale: focusedField === 'name' ? 1.02 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <Label htmlFor="name">Full Name *</Label>
          <div className="relative">
            <Input
              type="text"
              id="name"
              value={formState.name}
              onChange={(e) => handleChange('name', e.target.value)}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              required
              placeholder="John Doe"
              className={`transition-all ${focusedField === 'name' ? 'ring-2 ring-[#68c0ae]' : ''} ${errors.name ? 'border-red-500' : ''}`}
            />
            <AnimatePresence>
              {formState.name && !errors.name && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1"
            >
              {errors.name}
            </motion.p>
          )}
        </motion.div>

        {/* Email Input */}
        <motion.div
          animate={{ scale: focusedField === 'email' ? 1.02 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <Label htmlFor="email">Email Address *</Label>
          <div className="relative">
            <Input
              type="email"
              id="email"
              value={formState.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              required
              placeholder="john@example.com"
              className={`transition-all ${
                focusedField === 'email' ? 'ring-2 ring-[#68c0ae]' : ''
              } ${errors.email ? 'border-red-500' : ''}`}
            />
            <AnimatePresence>
              {formState.email && !errors.email && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </motion.div>
              )}
              {errors.email && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <AlertCircle className="w-5 h-5 text-red-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1"
            >
              {errors.email}
            </motion.p>
          )}
        </motion.div>

        {/* Phone Input */}
        <motion.div
          animate={{ scale: focusedField === 'phone' ? 1.02 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <Label htmlFor="phone">Phone Number</Label>
          <div className="relative">
            <Input
              type="tel"
              id="phone"
              value={formState.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField(null)}
              placeholder="+1 (555) 123-4567"
              className={`transition-all ${
                focusedField === 'phone' ? 'ring-2 ring-[#68c0ae]' : ''
              } ${errors.phone ? 'border-red-500' : ''}`}
            />
            <AnimatePresence>
              {formState.phone && !errors.phone && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {errors.phone && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1"
            >
              {errors.phone}
            </motion.p>
          )}
        </motion.div>

        {/* Message Input */}
        <motion.div
          animate={{ scale: focusedField === 'message' ? 1.02 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <Label htmlFor="message">Message *</Label>
          <textarea
            id="message"
            value={formState.message}
            onChange={(e) => handleChange('message', e.target.value)}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            required
            rows={4}
            maxLength={500}
            className={`w-full px-4 py-3 bg-[#f0f9f6] border border-[#003448]/20 rounded-xl focus:outline-none focus:border-transparent transition-all resize-none ${
              focusedField === 'message' ? 'ring-2 ring-[#68c0ae]' : ''
            } ${errors.message ? 'border-red-500' : ''}`}
            placeholder="Tell us about your financial goals..."
          />
          <div className="flex justify-between mt-1">
            <span className={`text-xs ${formState.message.length > 450 ? 'text-red-500' : 'text-[#003448]/60'}`}>
              {formState.message.length}/500
            </span>
            {errors.message && (
              <span className="text-red-500 text-xs">{errors.message}</span>
            )}
          </div>
        </motion.div>

        {/* Submit Error */}
        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-red-50 border border-red-200 rounded-lg"
          >
            <p className="text-red-600 text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              {submitError}
            </p>
          </motion.div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full relative overflow-hidden"
          disabled={isSubmitted || isSubmitting}
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Message Sent Successfully!</span>
              </motion.div>
            ) : isSubmitting ? (
              <motion.div
                key="submitting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...</span>
              </motion.div>
            ) : (
              <motion.div
                key="send"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center gap-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </form>

      {/* Contact Info */}
      <div className="mt-8 pt-8 border-t border-[#003448]/10 flex flex-row gap-2 sm:gap-4">
        <motion.a
          href="tel:+15551234567"
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center gap-2 p-2 sm:p-3 rounded-xl hover:bg-[#f0f9f6] transition-colors flex-1"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#003448] rounded-lg flex items-center justify-center shadow-lg">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <span className="text-[#003448]/70 text-xs sm:text-sm text-center">Call Us</span>
        </motion.a>

        <motion.a
          href="mailto:info@dhanovaa.com"
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center gap-2 p-2 sm:p-3 rounded-xl hover:bg-[#f0f9f6] transition-colors flex-1"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#68c0ae] rounded-lg flex items-center justify-center shadow-lg">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <span className="text-[#003448]/70 text-xs sm:text-sm text-center">Email</span>
        </motion.a>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center gap-2 p-2 sm:p-3 rounded-xl hover:bg-[#f0f9f6] transition-colors flex-1"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#9ece6c] rounded-lg flex items-center justify-center shadow-lg">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <span className="text-[#003448]/70 text-xs sm:text-sm text-center">Visit</span>
        </motion.div>
      </div>
    </div>
  );
}

