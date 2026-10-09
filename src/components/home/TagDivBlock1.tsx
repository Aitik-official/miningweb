"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MessageSquare, Clock } from 'lucide-react';
import type { ContentPost } from '@/lib/content';

interface TagDivBlock1Props {
  title: string;
  categorySlug?: string;
  headerColor?: string; // e.g. '#e29c04' or '#4db2ec' or '#008d7f'
  subCategories?: string[];
  posts: ContentPost[];
}

export default function TagDivBlock1({
  title,
  categorySlug = 'fashion',
  headerColor = '#e29c04',
  subCategories = ['All', 'Style', 'Runway', 'Trends', 'Interviews'],
  posts,
}: TagDivBlock1Props) {
  const [activeTab, setActiveTab] = useState('All');
  const [page, setPage] = useState(0);

  const filteredPosts = posts.length > 0 ? posts : [];
  const pageSize = 5;
  const totalPages = Math.ceil(filteredPosts.length / pageSize) || 1;
  const currentPosts = filteredPosts.slice(page * pageSize, (page + 1) * pageSize);

  const mainPost = currentPosts[0];
  const listPosts = currentPosts.slice(1, 5);

  const handlePrev = () => {
    setPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  if (!mainPost) {
    return null;
  }

  return (
    <div className="w-full mb-10">
      {/* 1. TAGDIV BLOCK HEADER */}
      <div
        className="flex items-center justify-between border-b-2 pb-0 mb-5"
        style={{ borderColor: headerColor }}
      >
        <div className="flex items-center">
          <span
            className="text-white text-xs sm:text-[13px] font-heading font-black uppercase tracking-wider px-3.5 py-1.5 inline-block"
            style={{ backgroundColor: headerColor }}
          >
            {title}
          </span>
        </div>

        {/* Sub-Category Filter Tabs & Pagination Arrows */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-3 text-xs font-semibold text-gray-500">
            {subCategories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`transition-colors uppercase text-[11px] tracking-tight ${
                  activeTab === tab ? 'text-[#222222] font-bold border-b-2 border-[#e29c04]' : 'hover:text-[#e29c04]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-0.5 ml-2">
            <button
              onClick={handlePrev}
              aria-label="Previous posts"
              className="w-5 h-5 border border-gray-300 hover:border-[#e29c04] bg-white hover:bg-[#e29c04] text-gray-600 hover:text-black flex items-center justify-center transition-colors text-xs"
            >
              <ChevronLeft size={12} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next posts"
              className="w-5 h-5 border border-gray-300 hover:border-[#e29c04] bg-white hover:bg-[#e29c04] text-gray-600 hover:text-black flex items-center justify-center transition-colors text-xs"
            >
              <ChevronRight size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. BLOCK CONTENT: 1 BIG POST (LEFT) + 4 COMPACT POSTS (RIGHT) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Column: Big Lead Post */}
        <div className="group flex flex-col">
          <Link href={`/news/${mainPost.slug}`} className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 rounded-sm mb-3">
            <img
              src={mainPost.image || '/images/mining/haul_truck.jpg'}
              alt={mainPost.title}
              onError={(e) => {
                e.currentTarget.src = '/images/mining/haul_truck.jpg';
              }}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span
              className="absolute bottom-2 left-2 text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded-sm"
              style={{ backgroundColor: headerColor }}
            >
              {mainPost.category}
            </span>
          </Link>

          <h3 className="text-base sm:text-lg font-heading font-bold text-[#111111] group-hover:text-[#e29c04] leading-snug transition-colors mb-2">
            <Link href={`/news/${mainPost.slug}`}>
              {mainPost.title}
            </Link>
          </h3>

          <div className="flex items-center gap-2 text-[11px] text-gray-500 font-sans mb-2.5">
            <span className="font-semibold text-gray-800">{mainPost.author}</span>
            <span>-</span>
            <span>{mainPost.date}</span>
            <span>-</span>
            <span className="flex items-center gap-1 text-gray-400">
              <MessageSquare size={11} />
              {Math.max(1, Math.round(mainPost.views / 600))}
            </span>
          </div>

          <p className="text-xs sm:text-[13px] text-[#767676] font-sans leading-relaxed line-clamp-3">
            {mainPost.excerpt || 'Discover the latest trends, expert insights, and exclusive editorial reporting from our correspondents.'}
          </p>
        </div>

        {/* Right Column: 4 Mini Horizontal Article Cards */}
        <div className="space-y-4 divide-y divide-gray-100">
          {listPosts.map((post, index) => (
            <div key={post.slug || index} className={`group flex gap-3.5 ${index !== 0 ? 'pt-4' : ''}`}>
              <Link href={`/news/${post.slug}`} className="relative w-24 h-18 sm:w-28 sm:h-20 shrink-0 overflow-hidden bg-gray-100 rounded-sm">
                <img
                  src={post.image || '/images/mining/excavator_shovel.jpg'}
                  alt={post.title}
                  onError={(e) => {
                    e.currentTarget.src = '/images/mining/excavator_shovel.jpg';
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-col justify-center space-y-1">
                <h4 className="text-xs sm:text-[13px] font-heading font-bold text-[#111111] group-hover:text-[#e29c04] leading-snug line-clamp-2 transition-colors">
                  <Link href={`/news/${post.slug}`}>
                    {post.title}
                  </Link>
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-sans">
                  <Clock size={10} />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
