"use client";

import React from 'react';
import Link from 'next/link';
import { Linkedin, Twitter, Youtube, Facebook, Rss, Mail, Phone, Clock, Pickaxe } from 'lucide-react';

export default function Footer() {
  const editorPicks = [
    {
      title: 'Next-Gen Autonomous 400-Ton Haul Trucks Enter Commercial Desert Operations',
      slug: 'next-gen-autonomous-400-ton-haul-trucks-enter-commercial-desert-operations',
      date: 'May 20, 2026',
      image: '/images/mining/haul_truck.jpg',
    },
    {
      title: 'Massive High-Grade Lithium & Copper Deposit Discovered in Pilbara Basin',
      slug: 'massive-high-grade-lithium-and-copper-deposit-discovered-in-pilbara-basin',
      date: 'May 19, 2026',
      image: '/images/mining/open_pit.jpg',
    },
    {
      title: 'Decarbonizing Heavy Extraction: How Hydrogen-Powered Mining Shovels Work',
      slug: 'decarbonizing-heavy-extraction-how-hydrogen-powered-mining-shovels-work',
      date: 'May 18, 2026',
      image: '/images/mining/excavator_shovel.jpg',
    },
  ];

  const popularPosts = [
    {
      title: 'AI-Driven Satellite Seismic Imaging Accelerates Rare Earth Discovery Timeline',
      slug: 'ai-driven-satellite-seismic-imaging-accelerates-rare-earth-discovery-timeline',
      date: 'May 15, 2026',
      image: '/images/mining/iron_ore_red.jpg',
    },
    {
      title: 'Deep Under the Andes: Inside the World’s Largest Underground Copper Operation',
      slug: 'deep-under-the-andes-inside-the-worlds-largest-underground-copper-operation',
      date: 'May 17, 2026',
      image: '/images/mining/underground_tunnel.jpg',
    },
    {
      title: 'Heavy Duty Blast-Hole Drill Rig Benchmark: Caterpillar vs Komatsu Comparison',
      slug: 'heavy-duty-drill-rig-benchmark-caterpillar-vs-komatsu-comparison-review',
      date: 'May 14, 2026',
      image: '/images/mining/bucket_wheel.jpg',
    },
  ];

  const categories = [
    { name: 'Mining Tech & Automation', slug: 'mining-tech', count: 24 },
    { name: 'Minerals & Battery Metals', slug: 'minerals', count: 31 },
    { name: 'Heavy Equipment & Haulers', slug: 'equipment', count: 28 },
    { name: 'Green Mining & Decarbonization', slug: 'green-mining', count: 19 },
    { name: 'Exploration & Geological Surveys', slug: 'exploration', count: 22 },
    { name: 'Commodity Markets & Policy', slug: 'markets', count: 18 },
    { name: 'Field Video Masterclasses', slug: 'video', count: 14 },
    { name: 'Equipment Field Benchmarks', slug: 'reviews', count: 11 },
  ];

  return (
    <footer className="bg-[#111111] text-gray-400 font-sans border-t-4 border-[#e29c04]">
      {/* 1. TOP 3-COLUMN MAGAZINE FOOTER */}
      <div className="max-w-[1240px] mx-auto px-4 py-12 border-b border-[#222222]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Column 1: Editor Picks */}
          <div>
            <div className="border-b-2 border-[#333333] pb-0 mb-5">
              <span className="bg-[#222222] text-white text-xs font-heading font-black uppercase tracking-wider px-3 py-1 inline-block">
                Editor Field Picks
              </span>
            </div>
            <div className="space-y-4 divide-y divide-gray-800">
              {editorPicks.map((post, idx) => (
                <div key={post.slug} className={`group flex gap-3.5 ${idx !== 0 ? 'pt-4' : ''}`}>
                  <Link href={`/news/${post.slug}`} className="relative w-20 h-14 shrink-0 overflow-hidden bg-gray-900 rounded-sm">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="flex flex-col justify-center space-y-1">
                    <h4 className="text-xs font-heading font-bold text-gray-200 group-hover:text-[#e29c04] leading-snug line-clamp-2 transition-colors">
                      <Link href={`/news/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h4>
                    <div className="flex items-center gap-1 text-[10px] text-gray-500">
                      <Clock size={9} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Popular Posts */}
          <div>
            <div className="border-b-2 border-[#333333] pb-0 mb-5">
              <span className="bg-[#222222] text-white text-xs font-heading font-black uppercase tracking-wider px-3 py-1 inline-block">
                Most Read Articles
              </span>
            </div>
            <div className="space-y-4 divide-y divide-gray-800">
              {popularPosts.map((post, idx) => (
                <div key={post.slug} className={`group flex gap-3.5 ${idx !== 0 ? 'pt-4' : ''}`}>
                  <Link href={`/news/${post.slug}`} className="relative w-20 h-14 shrink-0 overflow-hidden bg-gray-900 rounded-sm">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="flex flex-col justify-center space-y-1">
                    <h4 className="text-xs font-heading font-bold text-gray-200 group-hover:text-[#e29c04] leading-snug line-clamp-2 transition-colors">
                      <Link href={`/news/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h4>
                    <div className="flex items-center gap-1 text-[10px] text-gray-500">
                      <Clock size={9} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Popular Categories */}
          <div>
            <div className="border-b-2 border-[#333333] pb-0 mb-5">
              <span className="bg-[#222222] text-white text-xs font-heading font-black uppercase tracking-wider px-3 py-1 inline-block">
                Exploration Desks
              </span>
            </div>
            <div className="space-y-1.5 divide-y divide-gray-800">
              {categories.map((cat, idx) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="flex items-center justify-between py-2 text-xs font-semibold text-gray-300 hover:text-[#e29c04] transition-colors group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">{cat.name}</span>
                  <span className="bg-[#222222] text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-sm">
                    {cat.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 2. MIDDLE BRAND & CONTACT SECTION */}
      <div className="max-w-[1240px] mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#222222]">
        <div className="max-w-xl text-center md:text-left space-y-3">
          <Link href="/" className="inline-block">
            <img 
              src="/logo.png" 
              alt="Mining Magazine Logo" 
              className="h-11 w-auto object-contain brightness-0 invert opacity-95 hover:opacity-100 transition-opacity" 
            />
          </Link>
          <p className="text-xs text-gray-400 leading-relaxed">
            Mining Magazine is the world’s authoritative publication on mineral extraction, autonomous heavy machinery, geological exploration, and clean energy minerals. Our global editorial team provides verified field reporting and executive analysis.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs text-gray-300">
            <span className="flex items-center gap-1.5">
              <Mail size={13} className="text-[#e29c04]" /> editorial@mining-magazine.com
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={13} className="text-[#e29c04]" /> +1 (800) 542-MINE
            </span>
          </div>
        </div>

        {/* Social Follow Icons */}
        <div className="flex items-center gap-2">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-sm bg-[#222222] hover:bg-[#0077b5] text-white flex items-center justify-center transition-colors">
            <Linkedin size={14} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-sm bg-[#222222] hover:bg-[#1da1f2] text-white flex items-center justify-center transition-colors">
            <Twitter size={14} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-sm bg-[#222222] hover:bg-[#cd201f] text-white flex items-center justify-center transition-colors">
            <Youtube size={14} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-sm bg-[#222222] hover:bg-[#3b5998] text-white flex items-center justify-center transition-colors">
            <Facebook size={14} />
          </a>
          <a href="/feed" className="w-8 h-8 rounded-sm bg-[#222222] hover:bg-[#ff9800] text-white flex items-center justify-center transition-colors">
            <Rss size={14} />
          </a>
        </div>
      </div>

      {/* 3. BOTTOM COPYRIGHT & LEGAL BAR */}
      <div className="max-w-[1240px] mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-sans">
        <p>© 2026 Mining Magazine · Global Extraction & Minerals Journal. All Rights Reserved.</p>
        <div className="flex items-center gap-4 text-gray-400">
          <Link href="/about" className="hover:text-white transition-colors">About Journal</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Editorial Desk</Link>
          <Link href="/tariff" className="hover:text-white transition-colors">Corporate Subscriptions</Link>
          <Link href="/magazine" className="hover:text-white transition-colors">Digital Archive</Link>
          <Link href="/admin/login" className="hover:text-[#e29c04] transition-colors">Admin Portal</Link>
        </div>
      </div>
    </footer>
  );
}
