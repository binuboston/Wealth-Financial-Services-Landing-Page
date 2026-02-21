'use client';

import { useState, useMemo, useCallback, memo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
  category: string;
}

const FALLBACK_GALLERY_ITEMS: GalleryItem[] = [
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
  }
];

export const Gallery = memo(function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/gallery')
      .then(res => res.json())
      .then(data => {
        setItems(Array.isArray(data) && data.length > 0 ? data : FALLBACK_GALLERY_ITEMS);
        setLoading(false);
      })
      .catch(() => {
        setItems(FALLBACK_GALLERY_ITEMS);
        setLoading(false);
      });
  }, []);

  const categories = useMemo(() => {
    const base = ['All'];
    const dynamicCats = Array.from(new Set(items.map(item => item.category)));
    return [...base, ...dynamicCats];
  }, [items]);

  const filteredItems = useMemo(() => {
    return activeFilter === 'All'
      ? items
      : items.filter(item => item.category === activeFilter);
  }, [activeFilter, items]);

  const handleFilterChange = useCallback((category: string) => {
    setActiveFilter(category);
  }, []);

  const handleItemClick = useCallback((item: GalleryItem) => {
    setSelectedItem(item);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedItem(null);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--color-surface)] to-white py-12 lg:py-20">
      <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-[var(--color-primary)] mb-4">Our Gallery</h1>
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-12 h-12 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <>
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Explore moments from our journey, events, and success stories
              </p>
            </>
          )}
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
              onClick={() => handleFilterChange(category)}
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
              onClick={() => handleItemClick(item)}
            >
              {/* Image/Video Thumbnail */}
              <div className="absolute inset-0">
                <Image
                  src={item.type === 'image' ? item.url : (item.thumbnail || item.url)}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  quality={85}
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
          onClick={handleCloseModal}
        >
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20"
            onClick={handleCloseModal}
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
});