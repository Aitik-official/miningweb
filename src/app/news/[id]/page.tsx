import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TagDivSidebar from '@/components/home/TagDivSidebar';
import { getPostByIdentifier, getPublishedPosts, getCategories, incrementPostViews } from '@/lib/content';
import {
  ChevronRight,
  Clock,
  Eye,
  MessageSquare,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Bookmark,
  Share2,
  ChevronLeft
} from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

interface NewsDetailProps {
  params: Promise<{ id: string }>;
}

export default async function NewsDetail({ params }: NewsDetailProps) {
  const { id } = await params;
  const [post, allPosts, categories] = await Promise.all([
    getPostByIdentifier(id),
    getPublishedPosts(10),
    getCategories(),
  ]);

  if (!post) {
    notFound();
  }

  await incrementPostViews(id);

  const relatedNews = allPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans antialiased flex flex-col">
      <Header />

      <main className="max-w-[1240px] mx-auto px-4 w-full flex-1 py-4 mb-16">
        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 text-xs font-sans text-gray-500 py-3 mb-4 border-b border-gray-200">
          <Link href="/" className="hover:text-[#e29c04] transition-colors">Home</Link>
          <ChevronRight size={12} className="text-gray-400" />
          <Link href={`/category/${post.categorySlug}`} className="hover:text-[#e29c04] transition-colors font-semibold">
            {post.category}
          </Link>
          <ChevronRight size={12} className="text-gray-400" />
          <span className="text-gray-900 truncate max-w-[300px]">{post.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ARTICLE CONTENT (8 Columns) */}
          <article className="lg:col-span-8">
            
            {/* Category Pill */}
            <div className="mb-3">
              <Link
                href={`/category/${post.categorySlug}`}
                className="inline-block bg-[#e29c04] text-black text-[10px] font-heading font-black uppercase tracking-wider px-3 py-1 rounded-sm hover:bg-[#c78600] transition-colors"
              >
                {post.category}
              </Link>
            </div>

            {/* Post Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[#111111] leading-tight mb-4">
              {post.title}
            </h1>

            {/* Sub-headline / Excerpt */}
            {post.excerpt && (
              <p className="text-sm sm:text-base text-[#555555] font-sans italic leading-relaxed mb-4 border-l-2 border-[#e29c04] pl-4">
                {post.excerpt}
              </p>
            )}

            {/* Author & Meta Line */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-gray-200 text-xs text-gray-500 font-sans mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#222222] text-white font-bold flex items-center justify-center text-xs">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <span className="font-bold text-gray-900">{post.author}</span>
                  <span className="mx-2 text-gray-300">-</span>
                  <span>{post.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-400">
                <span className="flex items-center gap-1">
                  <Eye size={13} />
                  {post.views.toLocaleString()} Views
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare size={13} />
                  {Math.max(1, Math.round(post.views / 500))} Comments
                </span>
              </div>
            </div>

            {/* SOCIAL SHARING BAR */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <button className="flex items-center gap-1.5 bg-[#3b5998] hover:opacity-90 text-white text-[11px] font-bold uppercase px-3 py-1.5 rounded-sm transition-opacity">
                <Facebook size={12} />
                <span>Share</span>
              </button>
              <button className="flex items-center gap-1.5 bg-[#1da1f2] hover:opacity-90 text-white text-[11px] font-bold uppercase px-3 py-1.5 rounded-sm transition-opacity">
                <Twitter size={12} />
                <span>Tweet</span>
              </button>
              <button className="flex items-center gap-1.5 bg-[#0077b5] hover:opacity-90 text-white text-[11px] font-bold uppercase px-3 py-1.5 rounded-sm transition-opacity">
                <Linkedin size={12} />
                <span>Share</span>
              </button>
              <button className="flex items-center gap-1.5 bg-[#666666] hover:opacity-90 text-white text-[11px] font-bold uppercase px-3 py-1.5 rounded-sm transition-opacity">
                <Mail size={12} />
                <span>Email</span>
              </button>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 rounded-sm mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main Rich Content */}
            <div
              className="prose prose-neutral max-w-none text-[#333333] font-sans text-sm sm:text-base leading-relaxed space-y-4 mb-10"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags Section */}
            {post.tags?.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-gray-200 mb-8">
                <span className="text-xs font-bold uppercase text-gray-500 mr-2">Tags:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 hover:bg-[#e29c04] hover:text-black text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-sm transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Author Box */}
            <div className="bg-[#f9f9f9] border border-gray-200 p-6 rounded-sm mb-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="w-16 h-16 rounded-full bg-[#222222] text-white font-bold text-xl flex items-center justify-center shrink-0">
                {post.author.charAt(0)}
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-heading font-bold text-gray-900">{post.author}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Senior journalist and editorial correspondent covering global affairs, lifestyle trends, culture, and high-impact investigative reporting.
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-3 pt-2 text-gray-400">
                  <Facebook size={14} className="hover:text-[#3b5998] cursor-pointer" />
                  <Twitter size={14} className="hover:text-[#1da1f2] cursor-pointer" />
                  <Linkedin size={14} className="hover:text-[#0077b5] cursor-pointer" />
                </div>
              </div>
            </div>

            {/* RELATED ARTICLES: YOU MIGHT ALSO LIKE */}
            <div className="mb-10">
              <div className="border-b-2 border-[#222222] pb-0 mb-4">
                <span className="bg-[#222222] text-white text-xs font-heading font-black uppercase tracking-wider px-3 py-1 inline-block">
                  You Might Also Like
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedNews.map((rel) => (
                  <Link key={rel.slug} href={`/news/${rel.slug}`} className="group flex flex-col space-y-2">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 rounded-sm">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute bottom-1.5 left-1.5 bg-[#e29c04] text-black text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-sm">
                        {rel.category}
                      </span>
                    </div>
                    <h4 className="text-xs font-heading font-bold text-gray-900 group-hover:text-[#e29c04] leading-snug line-clamp-2 transition-colors">
                      {rel.title}
                    </h4>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400">
                      <Clock size={10} />
                      <span>{rel.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* COMMENTS SECTION */}
            <div className="border-t-2 border-[#222222] pt-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-heading font-black uppercase tracking-wider text-gray-900">
                  Leave a Reply
                </span>
                <span className="text-xs text-gray-400">Be respectful and constructive</span>
              </div>

              <form className="space-y-4">
                <textarea
                  rows={4}
                  placeholder="Your comment..."
                  className="w-full px-3 py-2.5 text-xs text-[#222222] bg-white border border-gray-300 focus:outline-none focus:border-[#e29c04]"
                ></textarea>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="w-full px-3 py-2 text-xs text-[#222222] bg-white border border-gray-300 focus:outline-none focus:border-[#e29c04]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email *"
                    className="w-full px-3 py-2 text-xs text-[#222222] bg-white border border-gray-300 focus:outline-none focus:border-[#e29c04]"
                  />
                </div>
                <button
                  type="button"
                  className="bg-[#222222] hover:bg-[#e29c04] text-white hover:text-black text-xs font-bold uppercase px-6 py-2.5 rounded-sm tracking-wider transition-colors"
                >
                  Post Comment
                </button>
              </form>
            </div>

          </article>

          {/* SIDEBAR (4 Columns) */}
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
