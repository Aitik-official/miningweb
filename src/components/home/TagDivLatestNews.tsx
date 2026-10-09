"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { MessageSquare, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ContentPost } from '@/lib/content';

interface TagDivLatestNewsProps {
  posts: ContentPost[];
}

export default function TagDivLatestNews({ posts }: TagDivLatestNewsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const totalPages = Math.ceil(posts.length / pageSize) || 1;
  const paginatedPosts = posts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="w-full mb-12">
      {/* Block Header */}
      <div className="flex items-center justify-between border-b-2 border-[#222222] pb-0 mb-6">
        <span className="bg-[#222222] text-white text-xs sm:text-[13px] font-heading font-black uppercase tracking-wider px-3.5 py-1.5 inline-block">
          Latest News & Articles
        </span>
        <span className="text-xs text-gray-500 font-semibold">
          Page {currentPage} of {totalPages}
        </span>
      </div>

      {/* Articles Grid (2 columns on medium/large screens) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {paginatedPosts.map((post) => (
          <div key={post.slug} className="group flex flex-col space-y-2.5">
            <Link href={`/news/${post.slug}`} className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 rounded-sm">
              <img
                src={post.image || '/images/mining/haul_truck.jpg'}
                alt={post.title}
                onError={(e) => {
                  e.currentTarget.src = '/images/mining/haul_truck.jpg';
                }}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-2 left-2 bg-[#e29c04] text-black text-[9px] font-bold uppercase px-2 py-0.5 rounded-sm">
                {post.category}
              </span>
            </Link>

            <h3 className="text-base font-heading font-bold text-[#111111] group-hover:text-[#e29c04] leading-snug line-clamp-2 transition-colors">
              <Link href={`/news/${post.slug}`}>
                {post.title}
              </Link>
            </h3>

            <div className="flex items-center gap-2 text-[11px] text-gray-500 font-sans">
              <span className="font-semibold text-gray-800">{post.author}</span>
              <span>-</span>
              <span>{post.date}</span>
              <span>-</span>
              <span className="flex items-center gap-1 text-gray-400">
                <Eye size={11} />
                {post.views.toLocaleString()}
              </span>
            </div>

            <p className="text-xs sm:text-[13px] text-[#767676] font-sans leading-relaxed line-clamp-2">
              {post.excerpt || 'Read the full coverage and in-depth analysis from our global newsroom correspondents.'}
            </p>
          </div>
        ))}
      </div>

      {/* TagDiv Styled Numbered Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1 pt-4 border-t border-gray-200">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="px-3 py-1.5 border border-gray-300 text-xs font-bold text-gray-700 hover:bg-[#e29c04] hover:text-black hover:border-[#e29c04] disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gray-700 transition-colors"
          >
            <ChevronLeft size={14} />
          </button>

          {Array.from({ length: totalPages }).map((_, index) => {
            const pageNum = index + 1;
            const isActive = pageNum === currentPage;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-8 h-8 flex items-center justify-center text-xs font-bold border transition-colors ${
                  isActive
                    ? 'bg-[#222222] border-[#222222] text-white'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-[#e29c04] hover:text-black hover:border-[#e29c04]'
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className="px-3 py-1.5 border border-gray-300 text-xs font-bold text-gray-700 hover:bg-[#e29c04] hover:text-black hover:border-[#e29c04] disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gray-700 transition-colors"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}
