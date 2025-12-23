'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';
import { Button } from '../ui/button';

interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  // Images
  {
    id: 1,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1758518729841-308509f69a7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBwbGFubmluZyUyMG1lZXRpbmd8ZW58MXx8fHwxNzY1Mzg1NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Financial Planning Session',
    category: 'Advisory'
  },
  {
    id: 2,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMG9mZmljZXxlbnwxfHx8fDE3NjU0MjMxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Client Partnership',
    category: 'Events'
  },
  {
    id: 3,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1631649387042-f60a0133d3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwc3RvY2slMjBtYXJrZXR8ZW58MXx8fHwxNzY1MzI5NTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Market Analysis',
    category: 'Investment'
  },
  {
    id: 4,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1574884280706-7342ca3d4231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhZHZpc29yJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc2NTQyMzEwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Expert Consultation',
    category: 'Advisory'
  },
  {
    id: 5,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjUzMzk1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Team Collaboration',
    category: 'Culture'
  },
  {
    id: 6,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1758599543110-f9cf3903a2ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1Y2Nlc3MlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjUzNTAzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Success Stories',
    category: 'Events'
  },
  {
    id: 7,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzY1NDA5NDk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Our Office Space',
    category: 'Culture'
  },
  {
    id: 8,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1762427354051-a9bdb181ae3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkb2N1bWVudHMlMjBhbmFseXNpc3xlbnwxfHx8fDE3NjU0MjMxMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Portfolio Review',
    category: 'Investment'
  },
  {
    id: 9,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1764726354739-1222d1ea5b63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBuZXR3b3JraW5nJTIwZXZlbnR8ZW58MXx8fHwxNzY1Mzk0OTA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Networking Event',
    category: 'Events'
  },
  // Videos (using placeholder embed URLs)
  {
    id: 10,
    type: 'video',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1758518729841-308509f69a7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBwbGFubmluZyUyMG1lZXRpbmd8ZW58MXx8fHwxNzY1Mzg1NzY1fDA&ixlib=rb-4.1.0&q=80&w=400',
    title: 'Introduction to Dhanovaa',
    category: 'Videos'
  },
  {
    id: 11,
    type: 'video',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1631649387042-f60a0133d3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwc3RvY2slMjBtYXJrZXR8ZW58MXx8fHwxNzY1MzI5NTY0fDA&ixlib=rb-4.1.0&q=80&w=400',
    title: 'Investment Strategies 2025',
    category: 'Videos'
  },
  {
    id: 12,
    type: 'video',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1574884280706-7342ca3d4231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhZHZpc29yJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc2NTQyMzEwN3ww&ixlib=rb-4.1.0&q=80&w=400',
    title: 'Client Success Story',
    category: 'Videos'
  }
];

export function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Advisory', 'Investment', 'Events', 'Culture', 'Videos'];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--color-surface)] to-white py-12 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-[var(--color-primary)] mb-4">Our Gallery</h1>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Explore moments from our journey, events, and success stories
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? 'default' : 'outline'}
              onClick={() => setActiveFilter(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedItem(item)}
            >
              {/* Image/Video Thumbnail */}
              <div className="absolute inset-0">
                <img
                  src={item.type === 'image' ? item.url : item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Video Play Icon */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-7 h-7 text-[var(--color-primary)] ml-1" fill="currentColor" />
                  </div>
                </div>
              )}

              {/* Overlay with Glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20 shadow-lg">
                    <h3 className="text-white mb-1">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.category}</p>
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-white/20 shadow-md">
                <span className="text-xs text-[var(--color-primary)]">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-[var(--color-text-secondary)]">
              No items found in this category
            </p>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={() => setSelectedItem(null)}
        >
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20"
            onClick={() => setSelectedItem(null)}
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.url}
                alt={selectedItem.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
            ) : (
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={selectedItem.url}
                  title={selectedItem.title}
                  className="absolute inset-0 w-full h-full rounded-2xl shadow-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {/* Title Bar */}
            <div className="mt-6 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h2 className="text-white mb-2">{selectedItem.title}</h2>
              <p className="text-white/70">{selectedItem.category}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}