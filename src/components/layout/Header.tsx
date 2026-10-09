"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Search,
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Rss,
  User,
  ChevronDown,
  Calendar,
  Clock,
  Sparkles,
  HardHat,
  Pickaxe
} from 'lucide-react';
import type { ContentPost } from '@/lib/content';

interface HeaderProps {
  categories?: Array<{ name: string; slug: string }>;
  megaMenuPosts?: Record<string, ContentPost[]>;
}

export default function Header({ categories = [], megaMenuPosts = {} }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMegaCategory, setActiveMegaCategory] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 140);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date());

  const navItems = [
    { name: 'NEWS', href: '/', slug: '' },
    { name: 'MINING TECH', href: '/category/mining-tech', slug: 'mining-tech', badge: 'AI', badgeColor: 'bg-[#008d7f]' },
    { name: 'MINERALS & METALS', href: '/category/minerals', slug: 'minerals', badge: 'HOT', badgeColor: 'bg-[#e29c04]' },
    { name: 'HEAVY EQUIPMENT', href: '/category/equipment', slug: 'equipment' },
    { name: 'GREEN MINING', href: '/category/green-mining', slug: 'green-mining', badge: 'ESG', badgeColor: 'bg-[#2e7d32]' },
    { name: 'EXPLORATION', href: '/category/exploration', slug: 'exploration' },
    { name: 'COMMODITY MARKETS', href: '/category/markets', slug: 'markets' },
    { name: 'FIELD VIDEOS', href: '/category/video', slug: 'video', badge: '4K', badgeColor: 'bg-[#e53935]' },
  ];

  const defaultMegaPosts: ContentPost[] = [
    {
      id: 'm1',
      slug: 'next-gen-autonomous-400-ton-haul-trucks-enter-commercial-desert-operations',
      title: 'Next-Gen Autonomous 400-Ton Haul Trucks Enter Commercial Desert Operations',
      excerpt: '',
      content: '',
      image: '/images/mining/haul_truck.jpg',
      images: [],
      category: 'Heavy Equipment',
      categorySlug: 'equipment',
      author: 'Marcus Vance',
      status: 'published',
      date: 'May 20, 2026',
      views: 34200,
      tags: [],
    },
    {
      id: 'm2',
      slug: 'massive-high-grade-lithium-and-copper-deposit-discovered-in-pilbara-basin',
      title: 'Massive High-Grade Lithium & Copper Deposit Discovered in Pilbara Basin',
      excerpt: '',
      content: '',
      image: '/images/mining/open_pit.jpg',
      images: [],
      category: 'Minerals & Metals',
      categorySlug: 'minerals',
      author: 'Dr. Evelyn Reed',
      status: 'published',
      date: 'May 19, 2026',
      views: 28940,
      tags: [],
    },
    {
      id: 'm3',
      slug: 'decarbonizing-heavy-extraction-how-hydrogen-powered-mining-shovels-work',
      title: 'Decarbonizing Heavy Extraction: How Hydrogen-Powered Mining Shovels Work',
      excerpt: '',
      content: '',
      image: '/images/mining/excavator_shovel.jpg',
      images: [],
      category: 'Green Mining',
      categorySlug: 'green-mining',
      author: 'Sarah Chen',
      status: 'published',
      date: 'May 18, 2026',
      views: 21500,
      tags: [],
    },
    {
      id: 'm4',
      slug: 'how-underground-controlled-blasting-and-explosive-engineering-works-video',
      title: 'How Underground Controlled Blasting & Explosive Engineering Works',
      excerpt: '',
      content: '',
      image: '/images/mining/sulfur_volcano.jpg',
      images: [],
      category: 'Field Videos',
      categorySlug: 'video',
      author: 'Robert Sterling',
      status: 'published',
      date: 'May 13, 2026',
      views: 48900,
      tags: [],
    },
  ];

  return (
    <header className="w-full bg-white z-40 relative">
      {/* 1. TOP BAR */}
      <div className="bg-[#1a1a1a] text-[#cccccc] text-[11px] font-sans border-b border-[#2d2d2d]">
        <div className="max-w-[1240px] mx-auto px-4 h-9 flex items-center justify-between">
          
          {/* Left: Date & Sub-nav */}
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-gray-300 font-medium">
              <Calendar size={12} className="text-[#e29c04]" />
              {formattedDate}
            </span>
            <div className="hidden md:flex items-center gap-4 text-[#999999]">
              <span className="text-gray-600">|</span>
              <Link href="/about" className="hover:text-white transition-colors">Media Kit</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Editorial Desk</Link>
              <Link href="/tariff" className="hover:text-white transition-colors">Mining Subscriptions</Link>
              <Link href="/magazine" className="hover:text-white transition-colors">Digital Edition</Link>
            </div>
          </div>

          {/* Right: Social Icons & Login */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5] transition-colors p-1" title="LinkedIn">
                <Linkedin size={12} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#4db2ec] transition-colors p-1" title="Twitter">
                <Twitter size={12} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#e53935] transition-colors p-1" title="YouTube">
                <Youtube size={12} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#3b5998] transition-colors p-1" title="Facebook">
                <Facebook size={12} />
              </a>
              <a href="/feed" className="hover:text-[#ff9800] transition-colors p-1" title="RSS Feed">
                <Rss size={12} />
              </a>
            </div>
            
            <span className="text-gray-600">|</span>

            <Link href="/admin/login" className="flex items-center gap-1.5 text-gray-300 hover:text-[#e29c04] transition-colors font-semibold">
              <User size={12} />
              <span>Sign In / Admin</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN BRAND HEADER & 728x90 AD BANNER */}
      <div className="max-w-[1240px] mx-auto px-4 py-6 sm:py-7 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Mining Magazine Logo */}
        <Link href="/" className="flex flex-col items-center md:items-start group">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Mining Magazine Logo"
              className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </div>
          <p className="text-[10px] text-gray-500 font-sans tracking-[0.2em] uppercase mt-1.5 font-bold">
            Global Extraction, Heavy Equipment & Clean Technology Journal
          </p>
        </Link>

        {/* 728x90 Leaderboard Advertisement */}
        <div className="hidden lg:block w-[728px] h-[90px] border border-gray-200 bg-[#f8f9fa] relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1917] via-[#292524] to-[#44403c] text-white p-4 flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="bg-[#e29c04] text-[#111] text-[9px] font-black uppercase px-2 py-0.5 rounded-sm">Heavy Industry</span>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Ultra-Class Autonomous Haulage Systems</span>
              </div>
              <p className="text-sm font-bold text-white tracking-tight">Zero-Emission Electric Drive Shovels & High-Payload Battery Fleets</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-[#e29c04] hover:bg-[#c78600] text-black text-xs font-black uppercase px-4 py-2 rounded-sm shadow-md transition-all">
                Explore Fleet
              </span>
              <span className="text-[9px] text-gray-400 uppercase tracking-widest absolute top-1 right-2">- Sponsored -</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MAIN NAVIGATION BAR (STICKY) */}
      <div className={`w-full bg-[#222222] text-white border-y border-[#111111] transition-all duration-300 ${isScrolled ? 'sticky top-0 shadow-lg z-50' : 'relative'}`}>
        <div className="max-w-[1240px] mx-auto px-4 flex items-center justify-between">
          
          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 text-white hover:text-[#e29c04] transition-colors focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Desktop Navigation Links with Mega Menus */}
          <nav className="hidden lg:flex items-center flex-nowrap shrink-0">
            {navItems.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              const hasMega = ['mining-tech', 'minerals', 'equipment', 'green-mining', 'video'].includes(item.slug);

              return (
                <div
                  key={item.name}
                  className="relative group shrink-0"
                  onMouseEnter={() => hasMega && setActiveMegaCategory(item.slug)}
                  onMouseLeave={() => hasMega && setActiveMegaCategory(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 px-2.5 xl:px-3.5 py-3.5 text-[11px] xl:text-[13px] font-heading font-bold uppercase tracking-tight whitespace-nowrap transition-colors border-t-2 shrink-0 ${
                      isActive
                        ? 'border-[#e29c04] text-[#e29c04] bg-[#1a1a1a]'
                        : 'border-transparent text-white hover:text-[#e29c04] hover:bg-[#1a1a1a]'
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.name}</span>
                    {item.badge && (
                      <span className={`${item.badgeColor || 'bg-[#e29c04]'} text-white text-[8px] font-black px-1.5 py-0.2 rounded-[2px] leading-tight shrink-0 whitespace-nowrap`}>
                        {item.badge}
                      </span>
                    )}
                    {hasMega && <ChevronDown size={13} className="text-gray-400 group-hover:text-[#e29c04] transition-colors shrink-0" />}
                  </Link>

                  {/* MEGA MENU DROPDOWN */}
                  {hasMega && activeMegaCategory === item.slug && (
                    <div className="absolute top-full left-0 w-[880px] bg-white text-[#222222] shadow-2xl border-t-2 border-[#e29c04] p-6 z-50">
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-200">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#222222] flex items-center gap-2">
                          <Sparkles size={14} className="text-[#e29c04]" />
                          Latest in {item.name}
                        </span>
                        <div className="flex gap-4 text-xs font-semibold text-gray-500">
                          <span className="text-[#e29c04] cursor-pointer hover:underline">All Reports</span>
                          <span className="cursor-pointer hover:text-[#e29c04]">Equipment</span>
                          <span className="cursor-pointer hover:text-[#e29c04]">Discoveries</span>
                          <span className="cursor-pointer hover:text-[#e29c04]">Commodity Prices</span>
                        </div>
                      </div>

                      {/* Mega Menu 4-Column Post Cards */}
                      <div className="grid grid-cols-4 gap-4">
                        {(megaMenuPosts[item.slug]?.length ? megaMenuPosts[item.slug] : defaultMegaPosts).slice(0, 4).map((post) => (
                          <Link
                            key={post.slug}
                            href={`/news/${post.slug}`}
                            className="group/item flex flex-col space-y-2 hover:opacity-95"
                          >
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 rounded-sm">
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                              />
                              <span className="absolute top-2 left-2 bg-[#e29c04] text-black text-[8px] font-black uppercase px-2 py-0.5 rounded-sm">
                                {post.category}
                              </span>
                            </div>
                            <h4 className="text-xs font-bold text-gray-900 leading-snug line-clamp-2 group-hover/item:text-[#e29c04] transition-colors">
                              {post.title}
                            </h4>
                            <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
                              <Clock size={10} />
                              <span>{post.date}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right: Live Search Button */}
          <div className="relative">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-3 text-white hover:text-[#e29c04] transition-colors focus:outline-none flex items-center gap-1 text-xs uppercase font-bold"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            {/* Live Search Dropdown Box */}
            {isSearchOpen && (
              <div className="absolute right-0 top-full mt-1 w-80 sm:w-96 bg-white text-[#222222] shadow-2xl border-t-2 border-[#e29c04] p-4 z-50">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (searchQuery.trim()) {
                      window.location.href = `/?search=${encodeURIComponent(searchQuery)}`;
                    }
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search mineral deposits, equipment, reports..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-gray-300 focus:outline-none focus:border-[#e29c04] text-[#222222]"
                  />
                  <button
                    type="submit"
                    className="bg-[#222222] hover:bg-[#e29c04] text-white hover:text-black text-xs font-bold px-4 py-2 uppercase transition-colors"
                  >
                    Search
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 4. MOBILE NAVIGATION DRAWER */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#1a1a1a]/95 text-white overflow-y-auto p-6 animate-fadeIn">
          <div className="flex items-center justify-between pb-6 border-b border-gray-700">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <img src="/logo.png" alt="Mining Magazine Logo" className="h-10 w-auto object-contain brightness-0 invert" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-400 hover:text-white focus:outline-none"
            >
              <X size={26} />
            </button>
          </div>

          <div className="py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-bold uppercase tracking-tight hover:text-[#e29c04] transition-colors py-2 border-b border-gray-800"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-gray-800 space-y-4 text-xs text-gray-400">
            <p className="font-bold uppercase tracking-widest text-gray-300">Connect With Mining Magazine</p>
            <div className="flex gap-4 text-white">
              <Linkedin size={18} />
              <Twitter size={18} />
              <Youtube size={18} />
              <Facebook size={18} />
            </div>
            <Link
              href="/admin/login"
              onClick={() => setIsOpen(false)}
              className="inline-block mt-4 bg-[#e29c04] text-black text-xs font-black uppercase px-6 py-2.5 rounded-sm"
            >
              Admin Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
