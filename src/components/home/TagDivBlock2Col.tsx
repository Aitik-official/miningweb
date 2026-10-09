"use client";

import React from 'react';
import Link from 'next/link';
import { MessageSquare, Clock } from 'lucide-react';
import type { ContentPost } from '@/lib/content';

interface TagDivBlock2ColProps {
  leftBlock: {
    title: string;
    headerColor: string;
    categorySlug: string;
    posts: ContentPost[];
  };
  rightBlock: {
    title: string;
    headerColor: string;
    categorySlug: string;
    posts: ContentPost[];
  };
}

export default function TagDivBlock2Col({ leftBlock, rightBlock }: TagDivBlock2ColProps) {
  const renderSingleColumn = (block: TagDivBlock2ColProps['leftBlock']) => {
    const mainPost = block.posts[0];
    const miniPosts = block.posts.slice(1, 4);

    if (!mainPost) return null;

    return (
      <div className="w-full">
        {/* Block Header */}
        <div
          className="flex items-center justify-between border-b-2 pb-0 mb-4"
          style={{ borderColor: block.headerColor }}
        >
          <span
            className="text-white text-xs font-heading font-black uppercase tracking-wider px-3 py-1 inline-block"
            style={{ backgroundColor: block.headerColor }}
          >
            {block.title}
          </span>
          <Link
            href={`/category/${block.categorySlug}`}
            className="text-[11px] font-bold text-gray-500 hover:text-[#e29c04] uppercase tracking-tight"
          >
            View All
          </Link>
        </div>

        {/* Main Post */}
        <div className="group mb-4">
          <Link href={`/news/${mainPost.slug}`} className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 rounded-sm mb-2.5 block">
            <img
              src={mainPost.image || '/images/mining/open_pit.jpg'}
              alt={mainPost.title}
              onError={(e) => {
                e.currentTarget.src = '/images/mining/open_pit.jpg';
              }}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span
              className="absolute bottom-2 left-2 text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded-sm"
              style={{ backgroundColor: block.headerColor }}
            >
              {mainPost.category}
            </span>
          </Link>

          <h3 className="text-sm sm:text-base font-heading font-bold text-[#111111] group-hover:text-[#e29c04] leading-snug transition-colors mb-1.5 line-clamp-2">
            <Link href={`/news/${mainPost.slug}`}>
              {mainPost.title}
            </Link>
          </h3>

          <div className="flex items-center gap-2 text-[10px] text-gray-400 font-sans">
            <span className="font-semibold text-gray-700">{mainPost.author}</span>
            <span>-</span>
            <span>{mainPost.date}</span>
          </div>
        </div>

        {/* 3 Mini Horizontal Posts */}
        <div className="space-y-3 divide-y divide-gray-100">
          {miniPosts.map((post, idx) => (
            <div key={post.slug || idx} className={`group flex gap-3 ${idx !== 0 ? 'pt-3' : ''}`}>
              <Link href={`/news/${post.slug}`} className="relative w-20 h-14 shrink-0 overflow-hidden bg-gray-100 rounded-sm">
                <img
                  src={post.image || '/images/mining/bucket_wheel.jpg'}
                  alt={post.title}
                  onError={(e) => {
                    e.currentTarget.src = '/images/mining/bucket_wheel.jpg';
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-col justify-center space-y-1">
                <h4 className="text-xs font-heading font-bold text-[#111111] group-hover:text-[#e29c04] leading-snug line-clamp-2 transition-colors">
                  <Link href={`/news/${post.slug}`}>
                    {post.title}
                  </Link>
                </h4>
                <div className="flex items-center gap-1 text-[10px] text-gray-400 font-sans">
                  <Clock size={9} />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
      {renderSingleColumn(leftBlock)}
      {renderSingleColumn(rightBlock)}
    </div>
  );
}
