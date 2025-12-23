'use client';

import Logo from './Logo';
import { Linkedin, Twitter, Facebook, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#003448] text-white py-12 relative overflow-hidden">
      {/* Organic Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <svg className="absolute bottom-0 left-0 w-[800px] h-[400px]" viewBox="0 0 800 400">
          <path d="M0,200 Q200,100 400,180 T800,200 L800,400 L0,400 Z" fill="#9ece6c" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo className="h-10" variant="light" />
            </div>
            <p className="text-white/80 mb-4">
              Dhanovaa — Your Growth Architect. Building enduring prosperity through disciplined financial strategies and generational insight.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#68c0ae] rounded-xl flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#68c0ae] rounded-xl flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#68c0ae] rounded-xl flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#68c0ae] rounded-xl flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/70 hover:text-[#9ece6c] transition-colors">About</a></li>
              <li><a href="#services" className="text-white/70 hover:text-[#9ece6c] transition-colors">Services</a></li>
              <li><a href="#blog" className="text-white/70 hover:text-[#9ece6c] transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-[#9ece6c] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-white/70">Equities</span></li>
              <li><span className="text-white/70">Mutual Funds</span></li>
              <li><span className="text-white/70">PMS & AIF</span></li>
              <li><span className="text-white/70">GIFT City Funds</span></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-white">Newsletter</h3>
            <p className="text-white/70 mb-4">Subscribe for financial tips and market insights</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#68c0ae] text-white placeholder-white/50"
              />
              <button className="px-4 py-2 bg-[#68c0ae] hover:bg-[#9ece6c] rounded-lg transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-center md:text-left">
              &copy; 2025 Dhanovaa. All rights reserved.
            </p>
            <div className="flex gap-6 text-white/70">
              <a href="#" className="hover:text-[#9ece6c] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#9ece6c] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#9ece6c] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}