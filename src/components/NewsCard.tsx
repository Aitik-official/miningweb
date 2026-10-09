"use client";

import React from 'react';
import Link from 'next/link';
import { MessageSquare, Clock, Eye } from 'lucide-react';

interface NewsCardProps {
  id: string;
  title: string;
  slug: string;
  image: string;
  category: string;
  excerpt: string;
  date: string;
  views?: number;
  featured?: boolean;
}

export default function NewsCard({
  id,
  title,
  slug,
  image,
  category,
  excerpt,
  date,
  views = 1200,
  featured = false,
}: NewsCardProps) {
  const newsHref = `/news/${slug || id}`;

  const getCategoryColor = (cat: string) => {
    switch (cat?.toLowerCase()) {
      case 'equipment':
      case 'heavy equipment':
        return 'bg-[#e29c04] text-black';
      case 'minerals':
      case 'minerals & metals':
        return 'bg-[#008d7f] text-white';
      case 'green mining':
      case 'green-mining':
        return 'bg-[#2e7d32] text-white';
      case 'mining tech':
      case 'mining-tech':
        return 'bg-[#0288d1] text-white';
      case 'exploration':
        return 'bg-[#516ecb] text-white';
      case 'video':
      case 'field videos':
        return 'bg-[#e53935] text-white';
      case 'reviews':
      case 'equipment reviews':
        return 'bg-[#8e44ad] text-white';
      case 'markets':
      case 'markets & policy':
        return 'bg-[#333333] text-white';
      default:
        return 'bg-[#e29c04] text-black';
    }
  };

  const defaultMiningImage = '/images/mining/haul_truck.jpg';

  if (featured) {
    return (
      <div className="group relative h-[380px] sm:h-[460px] w-full overflow-hidden bg-[#111111] rounded-sm">
        <img
          src={image || defaultMiningImage}
          alt={title}
          onError={(e) => {
            e.currentTarget.src = defaultMiningImage;
          }}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

        <div className="absolute top-4 left-4 z-10">
          <span className={`text-[10px] font-heading font-black uppercase tracking-wider px-2.5 py-1 ${getCategoryColor(category)}`}>
            {category}
          </span>
        </div>

        <div className="absolute top-4 right-4 z-10">
          <div className="td-comment-bubble">
            {Math.max(1, Math.round(views / 600))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-tight mb-3 group-hover:text-[#e29c04] transition-colors">
            <Link href={newsHref}>{title}</Link>
          </h2>
          <div className="flex items-center gap-3 text-xs text-gray-300 font-sans">
            <span className="font-semibold text-white">Admin</span>
            <span>-</span>
            <span>{date}</span>
            <span>-</span>
            <span className="flex items-center gap-1 text-gray-400">
              <Eye size={12} /> {views.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group flex flex-col space-y-2.5">
      <Link href={newsHref} className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 rounded-sm block">
        <img
          src={image || defaultMiningImage}
          alt={title}
          onError={(e) => {
            e.currentTarget.src = defaultMiningImage;
          }}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className={`absolute bottom-2 left-2 text-[9px] font-bold uppercase px-2 py-0.5 rounded-sm ${getCategoryColor(category)}`}>
          {category}
        </span>
      </Link>

      <h3 className="text-sm sm:text-base font-heading font-bold text-[#111111] group-hover:text-[#e29c04] leading-snug line-clamp-2 transition-colors">
        <Link href={newsHref}>{title}</Link>
      </h3>

      <div className="flex items-center gap-2 text-[10px] text-gray-400 font-sans">
        <span className="font-semibold text-gray-700">Admin</span>
        <span>-</span>
        <span>{date}</span>
      </div>

      <p className="text-xs text-[#767676] font-sans leading-relaxed line-clamp-2">
        {excerpt}
      </p>
    </div>
  );
}
