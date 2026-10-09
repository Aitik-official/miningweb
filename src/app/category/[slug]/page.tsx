import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TagDivSidebar from '@/components/home/TagDivSidebar';
import { getPublishedPostsByCategory, getPublishedPosts, getCategories } from '@/lib/content';
import { ChevronRight, Clock, MessageSquare, Eye } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const [posts, allPosts, categories] = await Promise.all([
    getPublishedPostsByCategory(slug),
    getPublishedPosts(10),
    getCategories(),
  ]);

  const categoryName = posts[0]?.category || slug.charAt(0).toUpperCase() + slug.slice(1);
  const heroPost = posts[0];
  const sidePosts = posts.slice(1, 5);
  const feedPosts = posts.slice(5);

  const getCategoryColor = (catSlug: string) => {
    switch (catSlug?.toLowerCase()) {
      case 'fashion':
        return '#e29c04';
      case 'tech':
      case 'technology':
        return '#008d7f';
      case 'travel':
        return '#516ecb';
      case 'video':
        return '#e53935';
      case 'reviews':
        return '#8e44ad';
      case 'lifestyle':
        return '#0288d1';
      default:
        return '#e29c04';
    }
  };

  const themeColor = getCategoryColor(slug);

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans antialiased flex flex-col">
      <Header />

      <main className="max-w-[1240px] mx-auto px-4 w-full flex-1 py-4 mb-16">
        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 text-xs font-sans text-gray-500 py-3 mb-4 border-b border-gray-200">
          <Link href="/" className="hover:text-[#e29c04] transition-colors">Home</Link>
          <ChevronRight size={12} className="text-gray-400" />
          <span className="text-gray-900 font-bold uppercase">{categoryName}</span>
        </nav>

        {/* CATEGORY TITLE BANNER */}
        <div className="flex items-center justify-between border-b-2 pb-0 mb-6" style={{ borderColor: themeColor }}>
          <span
            className="text-white text-sm font-heading font-black uppercase tracking-wider px-4 py-2 inline-block"
            style={{ backgroundColor: themeColor }}
          >
            {categoryName}
          </span>
          <span className="text-xs text-gray-500 font-semibold">
            {posts.length} Articles in this desk
          </span>
        </div>

        {/* HERO CATEGORY GRID (1 Big + 4 Mini) */}
        {heroPost && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-1.5 mb-10">
            {/* Left Big Lead */}
            <div className="lg:col-span-7 relative h-[340px] sm:h-[400px] overflow-hidden group bg-black rounded-sm">
              <Link href={`/news/${heroPost.slug}`} className="block w-full h-full">
                <img
                  src={heroPost.image}
                  alt={heroPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h2 className="text-xl sm:text-2xl font-heading font-bold text-white leading-tight mb-2 group-hover:text-[#e29c04] transition-colors">
                    {heroPost.title}
                  </h2>
                  <div className="flex items-center gap-3 text-xs text-gray-300">
                    <span className="font-semibold text-white">{heroPost.author}</span>
                    <span>-</span>
                    <span>{heroPost.date}</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Right 4 Small Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {sidePosts.map((post) => (
                <div key={post.slug} className="relative h-[195px] overflow-hidden group bg-black rounded-sm">
                  <Link href={`/news/${post.slug}`} className="block w-full h-full">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                      <h3 className="text-xs font-heading font-bold text-white leading-snug line-clamp-2 group-hover:text-[#e29c04] transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-2 text-[10px] text-gray-300 mt-1">
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MAIN ARTICLES STREAM + SIDEBAR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Feed (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="border-b border-gray-200 pb-2 mb-4">
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-gray-800">
                Latest from {categoryName}
              </span>
            </div>

            <div className="space-y-6 divide-y divide-gray-100">
              {(feedPosts.length > 0 ? feedPosts : posts).map((post, idx) => (
                <div key={post.slug} className={`group flex flex-col sm:flex-row gap-5 ${idx !== 0 ? 'pt-6' : ''}`}>
                  <Link href={`/news/${post.slug}`} className="relative sm:w-64 aspect-[16/10] shrink-0 overflow-hidden bg-gray-100 rounded-sm">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span
                      className="absolute bottom-2 left-2 text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded-sm"
                      style={{ backgroundColor: themeColor }}
                    >
                      {post.category}
                    </span>
                  </Link>

                  <div className="flex flex-col justify-center space-y-2">
                    <h3 className="text-base sm:text-lg font-heading font-bold text-[#111111] group-hover:text-[#e29c04] leading-snug transition-colors">
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
                        <Eye size={11} /> {post.views.toLocaleString()}
                      </span>
                    </div>

                    <p className="text-xs sm:text-[13px] text-[#767676] font-sans leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar (4 cols) */}
          <div className="lg:col-span-4">
            <TagDivSidebar
              trendingPosts={allPosts}
              recentPosts={allPosts}
              categories={categories}
            />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
