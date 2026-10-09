"use client";

import React from 'react';
import Link from 'next/link';
import { MessageSquare, Calendar, User } from 'lucide-react';
import type { ContentPost } from '@/lib/content';

interface BigGridHeroProps {
  posts: ContentPost[];
}

export default function BigGridHero({ posts }: BigGridHeroProps) {
  const heroPosts = posts.slice(0, 5);
  const mainPost = heroPosts[0];
  const sidePosts = heroPosts.slice(1, 5);

  if (!mainPost) {
    return null;
  }

  // Category badge color helper for Mining Magazine
  const getCategoryColor = (categorySlug: string) => {
    switch (categorySlug?.toLowerCase()) {
      case 'equipment':
      case 'heavy-equipment':
        return 'bg-[#e29c04] text-black';
      case 'minerals':
      case 'minerals-metals':
        return 'bg-[#008d7f] text-white';
      case 'green-mining':
      case 'sustainability':
        return 'bg-[#2e7d32] text-white';
      case 'mining-tech':
      case 'tech':
        return 'bg-[#0288d1] text-white';
      case 'exploration':
        return 'bg-[#516ecb] text-white';
      case 'video':
      case 'field-videos':
        return 'bg-[#e53935] text-white';
      case 'reviews':
        return 'bg-[#8e44ad] text-white';
      case 'markets':
      case 'commodities':
        return 'bg-[#333333] text-white';
      default:
        return 'bg-[#e29c04] text-black';
    }
  };

  return (
    <section className="max-w-[1240px] mx-auto px-4 mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-1.5">
        
        {/* LEFT BIG FEATURED POST (Col span 7 on large screens) */}
        <div className="lg:col-span-7 relative h-[360px] sm:h-[420px] lg:h-[460px] overflow-hidden group bg-[#111111] rounded-sm">
          <Link href={`/news/${mainPost.slug}`} className="block w-full h-full">
            <img
              src={mainPost.image || '/images/mining/haul_truck.jpg'}
              alt={mainPost.title}
              onError={(e) => {
                e.currentTarget.src = '/images/mining/haul_truck.jpg';
              }}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent"></div>

            {/* Category Tag */}
            <div className="absolute top-4 left-4 z-10">
              <span className={`text-[10px] font-heading font-black uppercase tracking-wider px-3 py-1 ${getCategoryColor(mainPost.categorySlug)}`}>
                {mainPost.category}
              </span>
            </div>

            {/* Comment Counter Bubble */}
            <div className="absolute top-4 right-4 z-10">
              <div className="td-comment-bubble">
                {Math.max(1, Math.round(mainPost.views / 500))}
              </div>
            </div>

            {/* Post Meta & Title */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 z-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-white leading-tight mb-3 group-hover:text-[#e29c04] transition-colors drop-shadow-sm">
                {mainPost.title}
              </h2>
              <div className="flex items-center gap-3 text-xs text-gray-300 font-sans">
                <span className="font-semibold text-white">{mainPost.author}</span>
                <span>-</span>
                <span>{mainPost.date}</span>
                <span>-</span>
                <span className="text-[#e29c04] font-medium">Verified Field Report</span>
              </div>
            </div>
          </Link>
        </div>

        {/* RIGHT 2x2 MINI GRID (Col span 5 on large screens) */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {sidePosts.map((post, idx) => (
            <div
              key={post.slug || idx}
              className="relative h-[200px] sm:h-[207px] lg:h-[227px] overflow-hidden group bg-[#111111] rounded-sm"
            >
              <Link href={`/news/${post.slug}`} className="block w-full h-full">
                <img
                  src={post.image || '/images/mining/open_pit.jpg'}
                  alt={post.title}
                  onError={(e) => {
                    e.currentTarget.src = '/images/mining/open_pit.jpg';
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent"></div>

                {/* Category Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={`text-[9px] font-heading font-black uppercase tracking-wider px-2 py-0.5 ${getCategoryColor(post.categorySlug)}`}>
                    {post.category}
                  </span>
                </div>

                {/* Comment Counter Bubble */}
                <div className="absolute top-3 right-3 z-10">
                  <div className="td-comment-bubble">
                    {Math.max(0, Math.round(post.views / 700))}
                  </div>
                </div>

                {/* Meta & Title */}
                <div className="absolute bottom-0 left-0 right-0 p-3.5 z-10">
                  <h3 className="text-xs sm:text-sm font-heading font-bold text-white leading-snug line-clamp-2 group-hover:text-[#e29c04] transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] text-gray-300 font-sans mt-1.5">
                    <span className="font-medium text-white">{post.author}</span>
                    <span>-</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
