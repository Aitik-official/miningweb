"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  CloudSun,
  Mail,
  TrendingUp,
  Clock,
  CheckCircle2,
  Pickaxe
} from 'lucide-react';
import type { ContentPost } from '@/lib/content';

interface TagDivSidebarProps {
  trendingPosts: ContentPost[];
  recentPosts: ContentPost[];
  categories: Array<{ name: string; slug: string; count?: number }>;
}

export default function TagDivSidebar({
  trendingPosts,
  recentPosts,
  categories = [],
}: TagDivSidebarProps) {
  const [activeTab, setActiveTab] = useState<'popular' | 'recent' | 'comments'>('popular');
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const displayList = activeTab === 'popular'
    ? trendingPosts.slice(0, 5)
    : recentPosts.slice(0, 5);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <aside className="space-y-8">
      
      {/* 1. SOCIAL COUNTER WIDGET (STAY CONNECTED) */}
      <div className="w-full">
        <div className="border-b-2 border-[#222222] pb-0 mb-4">
          <span className="bg-[#222222] text-white text-xs font-heading font-black uppercase tracking-wider px-3 py-1 inline-block">
            Industry Network
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2.5 bg-[#0077b5] text-white rounded-sm hover:opacity-90 transition-opacity"
          >
            <div className="flex items-center gap-2">
              <Linkedin size={16} />
              <div className="flex flex-col">
                <span className="text-[11px] font-black leading-tight">48,200</span>
                <span className="text-[9px] uppercase tracking-wider opacity-80">Members</span>
              </div>
            </div>
            <span className="text-[9px] font-black uppercase bg-black/20 px-1.5 py-0.5 rounded-sm">Join</span>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2.5 bg-[#1da1f2] text-white rounded-sm hover:opacity-90 transition-opacity"
          >
            <div className="flex items-center gap-2">
              <Twitter size={16} />
              <div className="flex flex-col">
                <span className="text-[11px] font-black leading-tight">32,400</span>
                <span className="text-[9px] uppercase tracking-wider opacity-80">Followers</span>
              </div>
            </div>
            <span className="text-[9px] font-black uppercase bg-black/20 px-1.5 py-0.5 rounded-sm">Follow</span>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2.5 bg-[#cd201f] text-white rounded-sm hover:opacity-90 transition-opacity"
          >
            <div className="flex items-center gap-2">
              <Youtube size={16} />
              <div className="flex flex-col">
                <span className="text-[11px] font-black leading-tight">64,500</span>
                <span className="text-[9px] uppercase tracking-wider opacity-80">Subs</span>
              </div>
            </div>
            <span className="text-[9px] font-black uppercase bg-black/20 px-1.5 py-0.5 rounded-sm">Sub</span>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2.5 bg-[#3b5998] text-white rounded-sm hover:opacity-90 transition-opacity"
          >
            <div className="flex items-center gap-2">
              <Facebook size={16} />
              <div className="flex flex-col">
                <span className="text-[11px] font-black leading-tight">27,100</span>
                <span className="text-[9px] uppercase tracking-wider opacity-80">Fans</span>
              </div>
            </div>
            <span className="text-[9px] font-black uppercase bg-black/20 px-1.5 py-0.5 rounded-sm">Like</span>
          </a>
        </div>
      </div>

      {/* 2. 300x250 MINING MACHINERY SPONSORED AD */}
      <div className="w-full border border-gray-200 bg-[#f8f9fa] relative overflow-hidden group">
        <div className="p-4 bg-gradient-to-br from-[#1c1917] via-[#292524] to-[#78350f] text-white text-center flex flex-col justify-center items-center min-h-[250px]">
          <span className="text-[9px] text-gray-400 uppercase tracking-widest mb-1.5">- Sponsored Feature -</span>
          <div className="w-8 h-8 rounded-full bg-[#e29c04] text-black flex items-center justify-center font-bold mb-2">
            <Pickaxe size={18} />
          </div>
          <h4 className="text-base font-heading font-bold text-white mb-2 leading-tight">
            High-Payload Electric Mining Haulers
          </h4>
          <p className="text-xs text-gray-300 mb-3 px-2 leading-relaxed">
            Zero-emission battery haul trucks engineered for harsh open-pit and underground cycles.
          </p>
          <a
            href="/category/equipment"
            className="bg-[#e29c04] hover:bg-[#c78600] text-black text-xs font-black uppercase px-5 py-2 rounded-sm shadow-md transition-all inline-block"
          >
            Explore Fleet Specs
          </a>
        </div>
      </div>

      {/* 3. TABBED POPULAR / RECENT WIDGET */}
      <div className="w-full">
        <div className="flex border-b-2 border-[#222222] mb-4">
          <button
            onClick={() => setActiveTab('popular')}
            className={`px-3.5 py-1.5 text-xs font-heading font-black uppercase tracking-wider transition-colors ${
              activeTab === 'popular'
                ? 'bg-[#222222] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Most Read
          </button>
          <button
            onClick={() => setActiveTab('recent')}
            className={`px-3.5 py-1.5 text-xs font-heading font-black uppercase tracking-wider transition-colors ${
              activeTab === 'recent'
                ? 'bg-[#222222] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Latest News
          </button>
          <button
            onClick={() => setActiveTab('comments')}
            className={`px-3.5 py-1.5 text-xs font-heading font-black uppercase tracking-wider transition-colors ${
              activeTab === 'comments'
                ? 'bg-[#222222] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Top Debates
          </button>
        </div>

        {/* Tab Content List with Rank Numbers */}
        <div className="space-y-3.5 divide-y divide-gray-100">
          {displayList.map((post, idx) => (
            <div key={post.slug || idx} className={`group flex items-center gap-3 ${idx !== 0 ? 'pt-3.5' : ''}`}>
              <span className="w-6 text-center font-heading font-black text-base text-gray-300 group-hover:text-[#e29c04] shrink-0">
                {idx + 1}
              </span>
              <Link href={`/news/${post.slug}`} className="relative w-20 h-14 shrink-0 overflow-hidden bg-gray-100 rounded-sm">
                <img
                  src={post.image || '/images/mining/excavator_shovel.jpg'}
                  alt={post.title}
                  onError={(e) => {
                    e.currentTarget.src = '/images/mining/excavator_shovel.jpg';
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-col space-y-1">
                <h4 className="text-xs font-heading font-bold text-[#111111] group-hover:text-[#e29c04] leading-snug line-clamp-2 transition-colors">
                  <Link href={`/news/${post.slug}`}>
                    {post.title}
                  </Link>
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-sans">
                  <Clock size={9} />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. MINING HUB WEATHER FORECAST */}
      <div className="w-full bg-[#f9f9f9] border border-gray-200 p-4 rounded-sm">
        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <CloudSun size={24} className="text-[#e29c04]" />
            <div>
              <p className="text-xs font-bold text-gray-800">Perth (Pilbara Basin)</p>
              <p className="text-[10px] text-gray-400">Clear Skies · 1014 hPa</p>
            </div>
          </div>
          <span className="text-2xl font-black font-heading text-[#222222]">31°C</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center pt-3 text-[10px] text-gray-500 font-medium">
          <div>
            <p className="text-gray-400">SAT</p>
            <p className="font-bold text-gray-800">33° / 21°</p>
          </div>
          <div>
            <p className="text-gray-400">SUN</p>
            <p className="font-bold text-gray-800">30° / 19°</p>
          </div>
          <div>
            <p className="text-gray-400">MON</p>
            <p className="font-bold text-gray-800">28° / 18°</p>
          </div>
        </div>
      </div>

      {/* 5. MINING JOURNAL NEWSLETTER SIGNUP */}
      <div className="w-full bg-[#1c1917] text-white p-5 rounded-sm border-t-2 border-[#e29c04]">
        <div className="flex items-center gap-2 mb-2">
          <Mail size={16} className="text-[#e29c04]" />
          <h4 className="text-xs font-heading font-black uppercase tracking-wider text-white">
            The Mining Executive Dispatch
          </h4>
        </div>
        <p className="text-xs text-gray-300 mb-4 leading-relaxed">
          Get weekly reports on mineral deposit assays, autonomous equipment deployments, and commodity pricing.
        </p>

        {isSubscribed ? (
          <div className="flex items-center gap-2 text-xs font-bold text-green-400 bg-green-950/40 p-2.5 rounded-sm border border-green-800">
            <CheckCircle2 size={16} />
            <span>Subscribed to Mining Executive Dispatch!</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="space-y-2">
            <input
              type="email"
              placeholder="Enter corporate email"
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="w-full px-3 py-2 text-xs text-[#222222] bg-white border border-gray-300 focus:outline-none focus:border-[#e29c04]"
            />
            <button
              type="submit"
              className="w-full bg-[#e29c04] hover:bg-[#c78600] text-black text-xs font-black uppercase py-2 tracking-wider transition-colors"
            >
              Get Free Dispatch
            </button>
          </form>
        )}
      </div>

      {/* 6. MINING CATEGORIES LIST */}
      <div className="w-full">
        <div className="border-b-2 border-[#222222] pb-0 mb-4">
          <span className="bg-[#222222] text-white text-xs font-heading font-black uppercase tracking-wider px-3 py-1 inline-block">
            Mining Desks
          </span>
        </div>

        <div className="space-y-1.5 divide-y divide-gray-100">
          {categories.map((cat, idx) => (
            <Link
              key={cat.slug || idx}
              href={`/category/${cat.slug}`}
              className="flex items-center justify-between py-2 text-xs font-sans font-semibold text-gray-700 hover:text-[#e29c04] transition-colors group"
            >
              <span className="group-hover:translate-x-1 transition-transform">{cat.name}</span>
              <span className="bg-gray-100 group-hover:bg-[#e29c04] group-hover:text-black text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded-sm transition-colors">
                {cat.count || 15}
              </span>
            </Link>
          ))}
        </div>
      </div>

    </aside>
  );
}
