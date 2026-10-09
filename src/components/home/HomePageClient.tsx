"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TrendingTicker from '@/components/home/TrendingTicker';
import BigGridHero from '@/components/home/BigGridHero';
import TagDivBlock1 from '@/components/home/TagDivBlock1';
import TagDivBlock2Col from '@/components/home/TagDivBlock2Col';
import TagDivVideoBlock from '@/components/home/TagDivVideoBlock';
import TagDivLatestNews from '@/components/home/TagDivLatestNews';
import TagDivSidebar from '@/components/home/TagDivSidebar';
import type { ContentPost } from '@/lib/content';

interface HomePageClientProps {
  featuredNews: ContentPost[];
  trendingNews: ContentPost[];
  latestNews: ContentPost[];
  categorySections: Array<{
    categorySlug: string;
    categoryName: string;
    posts: ContentPost[];
  }>;
}

export default function HomePageClient({
  featuredNews,
  trendingNews,
  latestNews,
  categorySections,
}: HomePageClientProps) {
  const allPosts = [...featuredNews, ...trendingNews, ...latestNews];
  const uniquePosts = Array.from(new Map(allPosts.map((p) => [p.slug, p])).values());

  // Split by mining categories
  const equipmentPosts = uniquePosts.filter((p) => p.categorySlug === 'equipment' || p.category?.toLowerCase().includes('equipment'));
  const mineralPosts = uniquePosts.filter((p) => p.categorySlug === 'minerals' || p.category?.toLowerCase().includes('mineral'));
  const greenPosts = uniquePosts.filter((p) => p.categorySlug === 'green-mining' || p.category?.toLowerCase().includes('green'));
  const techPosts = uniquePosts.filter((p) => p.categorySlug === 'mining-tech' || p.category?.toLowerCase().includes('tech'));
  const explorationPosts = uniquePosts.filter((p) => p.categorySlug === 'exploration' || p.category?.toLowerCase().includes('explor'));
  const videoPosts = uniquePosts.filter((p) => p.categorySlug === 'video' || p.category?.toLowerCase().includes('video'));

  // Safe fallbacks
  const safeEquipmentPosts = equipmentPosts.length >= 3 ? equipmentPosts : uniquePosts.slice(0, 5);
  const safeMineralPosts = mineralPosts.length >= 3 ? mineralPosts : uniquePosts.slice(1, 5);
  const safeGreenPosts = greenPosts.length >= 3 ? greenPosts : uniquePosts.slice(2, 6);
  const safeTechPosts = techPosts.length >= 3 ? techPosts : uniquePosts.slice(3, 7);
  const safeExplorationPosts = explorationPosts.length >= 3 ? explorationPosts : uniquePosts.slice(4, 8);
  const safeVideoPosts = videoPosts.length >= 2 ? videoPosts : uniquePosts.slice(1, 5);

  const megaMenuPosts = {
    'mining-tech': safeTechPosts,
    'minerals': safeMineralPosts,
    'equipment': safeEquipmentPosts,
    'green-mining': safeGreenPosts,
    'exploration': safeExplorationPosts,
    'video': safeVideoPosts,
  };

  const categoriesSummary = [
    { name: 'Mining Tech & AI', slug: 'mining-tech', count: Math.max(techPosts.length, 24) },
    { name: 'Minerals & Metals', slug: 'minerals', count: Math.max(mineralPosts.length, 31) },
    { name: 'Heavy Equipment & Haulers', slug: 'equipment', count: Math.max(equipmentPosts.length, 28) },
    { name: 'Green Mining & ESG', slug: 'green-mining', count: Math.max(greenPosts.length, 19) },
    { name: 'Exploration & Deposits', slug: 'exploration', count: Math.max(explorationPosts.length, 22) },
    { name: 'Commodity Markets', slug: 'markets', count: 18 },
    { name: 'Field Video Tutorials', slug: 'video', count: 14 },
    { name: 'Equipment Benchmarks', slug: 'reviews', count: 11 },
  ];

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans antialiased flex flex-col">
      {/* 1. MINING MAGAZINE HEADER */}
      <Header
        categories={categoriesSummary}
        megaMenuPosts={megaMenuPosts}
      />

      {/* 2. BREAKING MINING NEWS TICKER */}
      <TrendingTicker posts={trendingNews.length > 0 ? trendingNews : uniquePosts} />

      {/* 3. MINING HERO BIG GRID 1 */}
      <BigGridHero posts={uniquePosts} />

      {/* 4. MAIN MAGAZINE CONTENT AREA (8 Cols Main Magazine + 4 Cols Sidebar) */}
      <main className="max-w-[1240px] mx-auto px-4 w-full flex-1 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT 8 COLUMNS: MINING MAGAZINE BLOCKS */}
          <div className="lg:col-span-8">
            
            {/* Block 1: HEAVY EQUIPMENT & AUTOMATION (Gold TagDiv Block 1) */}
            <TagDivBlock1
              title="HEAVY EQUIPMENT & AUTOMATION"
              categorySlug="equipment"
              headerColor="#e29c04"
              subCategories={['All', 'Haul Trucks', 'Drill Rigs', 'Excavators', 'Telemetry']}
              posts={safeEquipmentPosts}
            />

            {/* Block 2: 2-COLUMN SPLIT CATEGORIES (Minerals & Green Mining) */}
            <TagDivBlock2Col
              leftBlock={{
                title: 'MINERALS & CRITICAL METALS',
                categorySlug: 'minerals',
                headerColor: '#008d7f',
                posts: safeMineralPosts,
              }}
              rightBlock={{
                title: 'GREEN MINING & DECARBONIZATION',
                categorySlug: 'green-mining',
                headerColor: '#2e7d32',
                posts: safeGreenPosts,
              }}
            />

            {/* Block 3: DARK FIELD OPERATIONS VIDEO SHOWCASE */}
            <TagDivVideoBlock posts={safeVideoPosts} />

            {/* Block 4: EXPLORATION & DEPOSIT DISCOVERIES (Blue TagDiv Block 1) */}
            <TagDivBlock1
              title="EXPLORATION & NEW DEPOSITS"
              categorySlug="exploration"
              headerColor="#0288d1"
              subCategories={['All', 'Lithium', 'Copper', 'Gold', 'Rare Earths']}
              posts={safeExplorationPosts}
            />

            {/* Block 5: LATEST MINING JOURNAL ARTICLES WITH PAGINATION */}
            <TagDivLatestNews posts={uniquePosts} />

          </div>

          {/* RIGHT 4 COLUMNS: MINING INDUSTRY SIDEBAR */}
          <div className="lg:col-span-4">
            <TagDivSidebar
              trendingPosts={trendingNews.length ? trendingNews : uniquePosts}
              recentPosts={uniquePosts}
              categories={categoriesSummary}
            />
          </div>

        </div>
      </main>

      {/* 5. MINING MAGAZINE FOOTER */}
      <Footer />
    </div>
  );
}
