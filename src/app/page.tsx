import HomePageClient from '@/components/home/HomePageClient';
import { getCategories, getPublishedPosts, type ContentPost } from '@/lib/content';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const [posts, categories] = await Promise.all([getPublishedPosts(), getCategories()]);
  const validPosts = posts.filter((post) => post?.slug && post?.title && post?.image);
  
  const featuredNews = validPosts.slice(0, 5);
  const trendingNews = validPosts.slice(1, 6);
  const latestNews = validPosts;

  const postsByCategory = validPosts.reduce((map, post) => {
    const existingPosts = map.get(post.categorySlug) || [];
    map.set(post.categorySlug, [...existingPosts, post]);
    return map;
  }, new Map<string, ContentPost[]>());

  const categorySections = categories.map((category) => ({
    categorySlug: category.slug,
    categoryName: category.name,
    posts: postsByCategory.get(category.slug) || validPosts.slice(0, 4),
  }));

  return (
    <HomePageClient
      featuredNews={featuredNews.length ? featuredNews : validPosts}
      trendingNews={trendingNews.length ? trendingNews : validPosts}
      latestNews={latestNews.length ? latestNews : validPosts}
      categorySections={categorySections}
    />
  );
}

