"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import type { ContentPost } from '@/lib/content';

interface TrendingTickerProps {
  posts: ContentPost[];
}

export default function TrendingTicker({ posts }: TrendingTickerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = posts.length > 0 ? posts : [
    {
      id: 't1',
      slug: 'discover-the-10-best-hairstyles-according-to-your-face-shape',
      title: 'Apple Claims It Uses Conflict-Free Metals in Its Products',
      excerpt: '',
      content: '',
      image: '',
      images: [],
      category: 'Tech',
      categorySlug: 'tech',
      author: 'Admin',
      status: 'published' as const,
      date: 'May 20, 2026',
      views: 1200,
      tags: [],
    },
    {
      id: 't2',
      slug: 'wonderful-outdoors-experience-eagle-spotting-in-alaska',
      title: 'Wonderful Outdoors Experience: Eagle Spotting in Alaska',
      excerpt: '',
      content: '',
      image: '',
      images: [],
      category: 'Lifestyle',
      categorySlug: 'lifestyle',
      author: 'Admin',
      status: 'published' as const,
      date: 'May 19, 2026',
      views: 1400,
      tags: [],
    },
    {
      id: 't3',
      slug: 'kevin-smith-shows-his-love-for-natural-inspired-outfits',
      title: 'Kevin Smith Shows his Love for Natural Inspired Outfits',
      excerpt: '',
      content: '',
      image: '',
      images: [],
      category: 'Fashion',
      categorySlug: 'fashion',
      author: 'Admin',
      status: 'published' as const,
      date: 'May 17, 2026',
      views: 1800,
      tags: [],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [items.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const currentPost = items[currentIndex];

  return (
    <div className="w-full bg-[#f9f9f9] border-y border-[#e6e6e6] mb-6">
      <div className="max-w-[1240px] mx-auto px-4 h-11 flex items-center justify-between">
        <div className="flex items-center gap-3 overflow-hidden flex-1">
          {/* Ticker Badge */}
          <div className="bg-[#222222] text-white text-[11px] font-heading font-black uppercase tracking-wider px-3 py-1 flex items-center gap-1.5 shrink-0">
            <Zap size={12} className="text-[#e29c04] fill-[#e29c04]" />
            Trending Now
          </div>

          {/* Current Headline */}
          <div className="overflow-hidden whitespace-nowrap text-ellipsis flex-1">
            <Link
              href={`/news/${currentPost.slug}`}
              className="text-xs sm:text-[13px] font-sans font-semibold text-[#222222] hover:text-[#e29c04] transition-colors"
            >
              {currentPost.title}
            </Link>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-1 pl-3 shrink-0">
          <button
            onClick={handlePrev}
            aria-label="Previous trending article"
            className="w-6 h-6 border border-gray-300 hover:border-[#e29c04] bg-white hover:bg-[#e29c04] text-gray-600 hover:text-black flex items-center justify-center transition-colors text-xs"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next trending article"
            className="w-6 h-6 border border-gray-300 hover:border-[#e29c04] bg-white hover:bg-[#e29c04] text-gray-600 hover:text-black flex items-center justify-center transition-colors text-xs"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
