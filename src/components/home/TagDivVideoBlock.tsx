"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Play, X, Video, Clock } from 'lucide-react';
import type { ContentPost } from '@/lib/content';

interface TagDivVideoBlockProps {
  posts: ContentPost[];
}

export default function TagDivVideoBlock({ posts }: TagDivVideoBlockProps) {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const videoPosts = posts.length > 0 ? posts : [];
  const mainVideo = videoPosts[0];
  const miniVideos = videoPosts.slice(1, 4);

  if (!mainVideo) return null;

  return (
    <div className="w-full bg-[#1e1e1e] text-white p-5 sm:p-6 mb-10 border-t-2 border-[#e53935] shadow-sm">
      {/* Video Block Header */}
      <div className="flex items-center justify-between border-b border-[#333333] pb-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="bg-[#e53935] text-white text-xs font-heading font-black uppercase tracking-wider px-3 py-1 inline-flex items-center gap-1.5">
            <Video size={13} />
            Video Tutorials & Media
          </span>
        </div>
        <Link
          href="/category/video"
          className="text-[11px] font-bold text-gray-400 hover:text-white uppercase tracking-tight"
        >
          View All Videos
        </Link>
      </div>

      {/* Main Video Layout: 1 Big (Left) + 3 Thumbnails (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Big Video Player Card (Col Span 7) */}
        <div className="lg:col-span-7 group relative">
          <div
            onClick={() => setSelectedVideoUrl('https://www.youtube.com/embed/UxwscVIZ8Qg')}
            className="relative aspect-[16/10] w-full overflow-hidden bg-black rounded-sm cursor-pointer"
          >
            <img
              src={mainVideo.image || '/images/mining/sulfur_volcano.jpg'}
              alt={mainVideo.title}
              onError={(e) => {
                e.currentTarget.src = '/images/mining/sulfur_volcano.jpg';
              }}
              className="w-full h-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

            {/* Centered Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-[#e53935] text-white flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                <Play size={22} className="fill-white translate-x-0.5" />
              </div>
            </div>

            {/* Video Duration Badge */}
            <div className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">
              00:03:45
            </div>

            {/* Video Category Badge */}
            <div className="absolute top-3 left-3 bg-[#e53935] text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded-sm">
              Featured Video
            </div>
          </div>

          <div className="mt-3">
            <h3 className="text-base sm:text-lg font-heading font-bold text-white group-hover:text-[#e29c04] leading-snug transition-colors line-clamp-2">
              <Link href={`/news/${mainVideo.slug}`}>
                {mainVideo.title}
              </Link>
            </h3>
            <div className="flex items-center gap-2 text-xs text-gray-400 font-sans mt-1">
              <span className="text-gray-300 font-medium">{mainVideo.author}</span>
              <span>-</span>
              <span>{mainVideo.date}</span>
            </div>
          </div>
        </div>

        {/* 3 Video Playlist Mini Cards (Col Span 5) */}
        <div className="lg:col-span-5 space-y-3.5">
          {miniVideos.map((video, idx) => (
            <div
              key={video.slug || idx}
              onClick={() => setSelectedVideoUrl('https://www.youtube.com/embed/UxwscVIZ8Qg')}
              className="group flex gap-3.5 bg-[#292929] p-2.5 rounded-sm hover:bg-[#333333] transition-colors cursor-pointer"
            >
              <div className="relative w-28 h-20 shrink-0 overflow-hidden bg-black rounded-sm">
                <img
                  src={video.image || '/images/mining/crushing_plant.jpg'}
                  alt={video.title}
                  onError={(e) => {
                    e.currentTarget.src = '/images/mining/crushing_plant.jpg';
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#e53935]/90 text-white flex items-center justify-center">
                    <Play size={10} className="fill-white translate-x-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[8px] font-bold px-1 rounded-sm">
                  02:15
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-1">
                <h4 className="text-xs font-heading font-bold text-gray-100 group-hover:text-[#e29c04] leading-snug line-clamp-2 transition-colors">
                  {video.title}
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-sans">
                  <Clock size={10} />
                  <span>{video.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Popup */}
      {selectedVideoUrl && (
        <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedVideoUrl(null)}
              className="absolute top-3 right-3 text-white bg-black/70 hover:bg-[#e53935] p-1.5 rounded-full z-10 transition-colors"
            >
              <X size={20} />
            </button>
            <div className="relative aspect-video w-full">
              <iframe
                src={selectedVideoUrl}
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
