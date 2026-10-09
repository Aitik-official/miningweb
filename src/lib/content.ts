import dbConnect from '@/lib/db';
import Category from '@/models/Category';
import News from '@/models/News';
import { createExcerpt, slugify } from '@/lib/slug';

const fallbackImages = [
  '/images/mining/haul_truck.jpg',
  '/images/mining/open_pit.jpg',
  '/images/mining/excavator_shovel.jpg',
  '/images/mining/underground_tunnel.jpg',
  '/images/mining/bucket_wheel.jpg',
  '/images/mining/sulfur_volcano.jpg',
  '/images/mining/crushing_plant.jpg',
  '/images/mining/gold_bars_ore.jpg',
  '/images/mining/iron_ore_red.jpg',
  '/images/mining/lithium_ponds.jpg',
];

export const defaultCategorySlugs = [
  'mining-tech',
  'minerals',
  'equipment',
  'green-mining',
  'exploration',
  'markets',
  'video',
  'reviews',
];

const fallbackCategories = [
  { name: 'Mining Tech', slug: 'mining-tech' },
  { name: 'Minerals & Metals', slug: 'minerals' },
  { name: 'Heavy Equipment', slug: 'equipment' },
  { name: 'Green Mining', slug: 'green-mining' },
  { name: 'Exploration', slug: 'exploration' },
  { name: 'Markets & Policy', slug: 'markets' },
  { name: 'Field Videos', slug: 'video' },
  { name: 'Equipment Reviews', slug: 'reviews' },
];

const fallbackPosts = [
  {
    id: 'mining-hero-1',
    slug: 'next-gen-autonomous-400-ton-haul-trucks-enter-commercial-desert-operations',
    title: 'Next-Gen Autonomous 400-Ton Haul Trucks Enter Commercial Desert Operations',
    excerpt: 'Fleet-wide telemetry, AI obstacle avoidance, and zero-downtime dispatching systems boost production efficiency by 34% across remote open-pit mines.',
    content: `
      <p class="mb-6 text-xl sm:text-2xl font-bold leading-relaxed text-gray-900">The global extraction sector is experiencing a monumental transformation as full-scale autonomous fleet integration moves from pilot trials to 24/7 commercial deployment.</p>
      <p class="mb-6 leading-relaxed">Operating in harsh desert climates reaching 50°C, the latest 400-ton driverless haul trucks leverage ultra-wideband LiDAR, multi-band GNSS, and edge AI processing to navigate winding haul roads without human intervention.</p>
      <p class="mb-6 leading-relaxed">Early site data indicates a 34% surge in daily payload efficiency, a 19% reduction in tire wear, and an unblemished safety record over 1.2 million continuous operational miles.</p>
    `,
    image: '/images/mining/haul_truck.jpg',
    images: [
      '/images/mining/haul_truck.jpg',
      '/images/mining/excavator_shovel.jpg',
    ],
    category: 'Heavy Equipment',
    categorySlug: 'equipment',
    author: 'Marcus Vance',
    status: 'published',
    date: 'May 20, 2026',
    views: 34210,
    tags: ['Autonomous Hauling', 'Heavy Machinery', 'Open Pit', 'Mining Tech'],
  },
  {
    id: 'mining-hero-2',
    slug: 'massive-high-grade-lithium-and-copper-deposit-discovered-in-pilbara-basin',
    title: 'Massive High-Grade Lithium & Copper Deposit Discovered in Pilbara Basin',
    excerpt: 'Drill core samples reveal an estimated 14.8 million tonnes of spodumene pegmatite ore alongside significant high-purity copper sulfide intercepts.',
    content: `
      <p class="mb-6 text-xl sm:text-2xl font-bold leading-relaxed text-gray-900">Geological survey teams have confirmed one of the decade’s most significant hard-rock lithium and copper discoveries in Western Australia.</p>
      <p class="mb-6 leading-relaxed">Diamond core drilling down to 650 meters intersected continuous pegmatite mineralization with average grades exceeding 1.78% Li2O and 2.1% Cu over 120-meter intervals.</p>
      <p class="mb-6 leading-relaxed">The discovery is anticipated to reshape EV battery supply chain forecasts, prompting immediate feasibility studies for an on-site spodumene concentration facility.</p>
    `,
    image: '/images/mining/open_pit.jpg',
    images: [
      '/images/mining/open_pit.jpg',
      '/images/mining/lithium_ponds.jpg',
    ],
    category: 'Minerals & Metals',
    categorySlug: 'minerals',
    author: 'Dr. Evelyn Reed',
    status: 'published',
    date: 'May 19, 2026',
    views: 28940,
    tags: ['Lithium', 'Copper', 'Exploration', 'Battery Metals'],
  },
  {
    id: 'mining-hero-3',
    slug: 'decarbonizing-heavy-extraction-how-hydrogen-powered-mining-shovels-work',
    title: 'Decarbonizing Heavy Extraction: How Hydrogen-Powered Mining Shovels Work',
    excerpt: 'Megawatt fuel-cell powertrains replace diesel generators in colossal 100-tonne electric rope shovels, cutting site emissions to zero.',
    content: `
      <p class="mb-6 text-xl sm:text-2xl font-bold leading-relaxed text-gray-900">Heavy extraction is facing stringent carbon targets, and hydrogen fuel-cell retrofits are proving to be the viable solution for mega-machinery that batteries cannot power alone.</p>
      <p class="mb-6 leading-relaxed">Equipped with 2.4 MW fuel cell stacks and regenerative braking storage, new ultra-class hydraulic excavators operate continuously on green hydrogen produced on-site from solar arrays.</p>
    `,
    image: '/images/mining/excavator_shovel.jpg',
    images: ['/images/mining/excavator_shovel.jpg'],
    category: 'Green Mining',
    categorySlug: 'green-mining',
    author: 'Sarah Chen',
    status: 'published',
    date: 'May 18, 2026',
    views: 21500,
    tags: ['Hydrogen', 'Decarbonization', 'ESG', 'Green Tech'],
  },
  {
    id: 'mining-hero-4',
    slug: 'deep-under-the-andes-inside-the-worlds-largest-underground-copper-operation',
    title: 'Deep Under the Andes: Inside the World’s Largest Underground Copper Operation',
    excerpt: 'Explore the 3,000-kilometer subterranean tunnel network featuring robotic drill rigs, automated trains, and remote tele-operation centers.',
    content: `
      <p class="mb-6 text-xl sm:text-2xl font-bold leading-relaxed text-gray-900">More than 1,200 meters beneath the Chilean Andes lies a high-tech subterranean metropolis that produces over 450,000 tonnes of refined copper annually.</p>
      <p class="mb-6 leading-relaxed">Operators manage robotic rock drills and automated ore crushers from climate-controlled surface control rooms located 80 kilometers away, maximizing worker safety and operational uptime.</p>
    `,
    image: '/images/mining/underground_tunnel.jpg',
    images: ['/images/mining/underground_tunnel.jpg'],
    category: 'Mining Tech',
    categorySlug: 'mining-tech',
    author: 'Carlos Mendoza',
    status: 'published',
    date: 'May 17, 2026',
    views: 26180,
    tags: ['Underground Mining', 'Copper', 'Automation', 'Andes'],
  },
  {
    id: 'mining-hero-5',
    slug: 'gold-reserves-reach-5-year-high-amid-global-critical-mineral-hedging',
    title: 'Gold Reserves Reach 5-Year High Amid Global Critical Mineral Hedging',
    excerpt: 'Central banks and sovereign wealth funds expand bullion purchases as geopolitical realignments drive precious metal accumulation.',
    content: `
      <p class="mb-6 text-xl sm:text-2xl font-bold leading-relaxed text-gray-900">Institutional bullion purchases surged in the first quarter of 2026, setting new historical records as institutional investors hedge against macroeconomic volatility.</p>
      <p class="mb-6 leading-relaxed">Tier-1 gold producers are reporting record free cash flows, prompting a wave of mergers, brownfield expansions, and investments into underground automation.</p>
    `,
    image: '/images/mining/gold_bars_ore.jpg',
    images: ['/images/mining/gold_bars_ore.jpg'],
    category: 'Markets & Policy',
    categorySlug: 'markets',
    author: 'David Vance',
    status: 'published',
    date: 'May 16, 2026',
    views: 19450,
    tags: ['Gold', 'Bullion', 'Commodities', 'Finance'],
  },
  {
    id: 'mining-tech-1',
    slug: 'ai-driven-satellite-seismic-imaging-accelerates-rare-earth-discovery-timeline',
    title: 'AI-Driven Satellite Seismic Imaging Accelerates Rare Earth Discovery Timeline by 60%',
    excerpt: 'Hyperspectral satellite data combined with neural geological network models predicts subsurface magnetic anomalies with 94% drilling precision.',
    content: `
      <p class="mb-6 text-xl sm:text-2xl font-bold leading-relaxed text-gray-900">Exploration geophysicists are cutting years off greenfield discovery schedules by replacing manual surveys with machine learning synthetic aperture radar.</p>
      <p class="mb-6 leading-relaxed">The technology models multi-layered geological strata down to 2 kilometers, identifying carbonatite and pegmatite intrusions rich in neodymium and dysprosium before a single drill rig is mobilized.</p>
    `,
    image: '/images/mining/iron_ore_red.jpg',
    images: ['/images/mining/iron_ore_red.jpg'],
    category: 'Exploration',
    categorySlug: 'exploration',
    author: 'Dr. Aris Thorne',
    status: 'published',
    date: 'May 15, 2026',
    views: 31200,
    tags: ['AI Prospecting', 'Rare Earths', 'Seismic Imaging', 'Tech'],
  },
  {
    id: 'mining-equipment-2',
    slug: 'heavy-duty-drill-rig-benchmark-caterpillar-vs-komatsu-comparison-review',
    title: 'Heavy Duty Blast-Hole Drill Rig Benchmark: Caterpillar vs Komatsu Field Comparison',
    excerpt: 'Comprehensive field metrics comparing penetration rates, rod handling cycle times, and fuel consumption across 10,000 meters of granite blasting.',
    content: `
      <p class="mb-6 text-xl sm:text-2xl font-bold leading-relaxed text-gray-900">Selecting the right blast-hole drill rig dictates the rhythm of the entire downstream crushing and processing circuit.</p>
      <p class="mb-6 leading-relaxed">Our field test bench puts the flagship Caterpillar MD6310 against the Komatsu ZT44 across identical hard-rock granite formations, analyzing penetration rates, bit wear longevity, and automated mast setup speeds.</p>
    `,
    image: '/images/mining/bucket_wheel.jpg',
    images: ['/images/mining/bucket_wheel.jpg'],
    category: 'Equipment Reviews',
    categorySlug: 'reviews',
    author: 'Jason Holt',
    status: 'published',
    date: 'May 14, 2026',
    views: 24780,
    tags: ['Drill Rigs', 'Equipment Review', 'Blasting', 'CAT'],
  },
  {
    id: 'mining-video-1',
    slug: 'how-underground-controlled-blasting-and-explosive-engineering-works-video',
    title: 'How Underground Controlled Blasting & Explosive Engineering Works [Field Video & Tutorial]',
    excerpt: 'Watch electronic delay detonator sequencing, burden spacing, and vibration mitigation techniques executed in a live production stope.',
    content: `
      <p class="mb-6 text-xl sm:text-2xl font-bold leading-relaxed text-gray-900">Modern mining explosives have evolved into high-precision chemical engineering, where millisecond timing controls fragmentation and prevents wall damage.</p>
      <p class="mb-6 leading-relaxed">This exclusive 4K field video documentary breaks down computerized blast pattern design, emulsion loading, and seismic sensor monitoring inside a working gold mine.</p>
    `,
    image: '/images/mining/sulfur_volcano.jpg',
    images: ['/images/mining/sulfur_volcano.jpg'],
    category: 'Field Videos',
    categorySlug: 'video',
    author: 'Robert Sterling',
    status: 'published',
    date: 'May 13, 2026',
    views: 48900,
    tags: ['Blasting Video', 'Explosives', 'Underground', 'Engineering'],
  },
  {
    id: 'mining-sustainability-2',
    slug: 'tailings-dam-safety-real-time-satellite-interferometry-and-iot-piezometer-networks',
    title: 'Tailings Dam Safety: Real-Time Satellite Interferometry & IoT Piezometer Networks',
    excerpt: 'Global tailings standard compliance accelerates with millimeter-level radar displacement monitoring and automated risk alert platforms.',
    content: `
      <p class="mb-6 text-xl sm:text-2xl font-bold leading-relaxed text-gray-900">Ensuring the structural integrity of tailings storage facilities is the highest ESG priority for modern mining operators worldwide.</p>
      <p class="mb-6 leading-relaxed">By combining InSAR satellite displacement tracking with down-hole pore pressure sensors, engineers detect microscopic slope movements weeks before visible cracks appear.</p>
    `,
    image: '/images/mining/crushing_plant.jpg',
    images: ['/images/mining/crushing_plant.jpg'],
    category: 'Green Mining',
    categorySlug: 'green-mining',
    author: 'Elena Rossi',
    status: 'published',
    date: 'May 12, 2026',
    views: 17600,
    tags: ['Tailings Safety', 'IoT', 'InSAR', 'Environment'],
  },
  {
    id: 'mining-minerals-2',
    slug: 'the-global-critical-minerals-race-supply-chain-trends-for-ev-battery-materials',
    title: 'The Global Critical Minerals Race: Supply Chain Trends for Nickel, Cobalt & Graphite',
    excerpt: 'Analyzing geopolitical trade alliances, domestic processing mandates, and recycling breakthroughs reshaping battery supply chains.',
    content: `
      <p class="mb-6 text-xl sm:text-2xl font-bold leading-relaxed text-gray-900">As energy storage requirements scale exponentially, mining jurisdictions are establishing strategic mineral processing hubs close to extraction sites.</p>
      <p class="mb-6 leading-relaxed">Our comprehensive market report maps high-pressure acid leach (HPAL) nickel developments, synthetic graphite innovations, and direct lithium extraction (DLE) breakthroughs.</p>
    `,
    image: '/images/mining/lithium_ponds.jpg',
    images: ['/images/mining/lithium_ponds.jpg'],
    category: 'Minerals & Metals',
    categorySlug: 'minerals',
    author: 'Dr. Evelyn Reed',
    status: 'published',
    date: 'May 11, 2026',
    views: 29800,
    tags: ['Critical Minerals', 'EV Batteries', 'Nickel', 'Commodities'],
  },
];

export interface ContentCategory {
  id: string;
  name: string;
  slug: string;
  count?: number;
}

export interface ContentPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  images: string[];
  category: string;
  categorySlug: string;
  author: string;
  status: 'draft' | 'published';
  date: string;
  views: number;
  tags: string[];
}

function formatDate(value?: Date | string) {
  const date = value ? new Date(value) : new Date();

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

function normalizeImages(images: Array<string | undefined | null>, fallbackImage?: string) {
  const normalized = Array.from(
    new Set(
      images
        .filter(Boolean)
        .map((image) => String(image).trim())
        .filter(Boolean)
    )
  );

  if (normalized.length > 0) {
    return normalized;
  }

  return fallbackImage ? [fallbackImage] : [];
}

function mapNewsDocument(post: any): ContentPost {
  const category = post.category && typeof post.category === 'object' ? post.category : null;
  const status: ContentPost['status'] = post.status === 'draft' ? 'draft' : 'published';
  const image = post.image || '';
  const images = normalizeImages(Array.isArray(post.images) ? post.images : [], image);

  return {
    id: String(post._id),
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt || createExcerpt(post.content || ''),
    content: post.content,
    image: image || images[0],
    images,
    category: category?.name || 'General',
    categorySlug: category?.slug || 'general',
    author: post.author || 'Admin',
    status,
    date: formatDate(post.createdAt),
    views: post.views || 0,
    tags: Array.isArray(post.tags) ? post.tags : [],
  };
}

async function connectSafely() {
  try {
    await dbConnect();
    return true;
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    return false;
  }
}

export async function ensureDefaultCategories() {
  const connected = await connectSafely();

  if (!connected) {
    return fallbackCategories;
  }

  await Promise.all(
    fallbackCategories.map((category) =>
      Category.findOneAndUpdate(
        { slug: category.slug },
        { $setOnInsert: category },
        { new: true, upsert: true }
      )
    )
  );

  const categories = await Category.find().sort({ name: 1 }).lean();

  return categories.map((category: any) => ({
    id: String(category._id),
    name: category.name,
    slug: category.slug,
  }));
}

export async function getCategories() {
  const connected = await connectSafely();

  if (!connected) {
    return fallbackCategories.map((category) => ({
      id: category.slug,
      ...category,
      count: fallbackPosts.filter((post) => post.categorySlug === category.slug).length,
    }));
  }

  await ensureDefaultCategories();

  const categories = await Category.find().sort({ name: 1 }).lean();
  const counts = await News.aggregate([
    {
      $group: {
        _id: '$category',
        count: { $sum: 1 },
      },
    },
  ]);
  const countMap = new Map(counts.map((item: any) => [String(item._id), item.count]));

  return categories.map((category: any) => ({
    id: String(category._id),
    name: category.name,
    slug: category.slug,
    count: countMap.get(String(category._id)) || 0,
  }));
}

export async function getCustomCategories() {
  const categories = await getCategories();

  return categories.filter((category) => !defaultCategorySlugs.includes(category.slug));
}

export async function createCategory(input: { name: string; slug?: string }) {
  const connected = await connectSafely();
  const slug = slugify(input.slug || input.name);
  const name = input.name.trim();

  if (!connected) {
    return { id: slug, name, slug, count: 0 };
  }

  const category = await Category.findOneAndUpdate(
    { slug },
    { name, slug },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );

  return {
    id: String(category._id),
    name: category.name,
    slug: category.slug,
    count: 0,
  };
}

export async function updateCategory(input: { id: string; name: string; slug?: string }) {
  const connected = await connectSafely();
  const slug = slugify(input.slug || input.name);
  const name = input.name.trim();

  if (!connected) {
    return { id: input.id, name, slug, count: 0 };
  }

  const existingCategory = await Category.findById(input.id);

  if (!existingCategory) {
    throw new Error('Category not found.');
  }

  const duplicate = await Category.findOne({
    slug,
    _id: { $ne: input.id },
  }).lean();

  if (duplicate) {
    throw new Error('A category with this slug already exists.');
  }

  existingCategory.name = name;
  existingCategory.slug = slug;
  await existingCategory.save();

  const count = await News.countDocuments({ category: existingCategory._id });

  return {
    id: String(existingCategory._id),
    name: existingCategory.name,
    slug: existingCategory.slug,
    count,
  };
}

export async function deleteCategory(input: { id: string }) {
  const connected = await connectSafely();

  if (!connected) {
    return { deleted: true };
  }

  const category = await Category.findById(input.id);

  if (!category) {
    throw new Error('Category not found.');
  }

  const relatedPostsCount = await News.countDocuments({ category: category._id });

  if (relatedPostsCount > 0) {
    throw new Error('This category cannot be deleted because it still has posts.');
  }

  await Category.findByIdAndDelete(input.id);

  return { deleted: true };
}

export async function getAdminPosts() {
  const connected = await connectSafely();

  if (!connected) {
    return [...fallbackPosts].sort((a, b) => b.date.localeCompare(a.date)) as ContentPost[];
  }

  const posts = await News.find()
    .populate('category')
    .sort({ createdAt: -1 })
    .lean();

  return posts.map(mapNewsDocument);
}

export async function getPublishedPosts(limit?: number) {
  const connected = await connectSafely();
  const fallbackPublishedPosts = fallbackPosts.filter((post) => post.status === 'published') as ContentPost[];

  if (!connected) {
    return typeof limit === 'number' ? fallbackPublishedPosts.slice(0, limit) : fallbackPublishedPosts;
  }

  const query = News.find({ status: 'published' })
    .populate('category')
    .sort({ createdAt: -1 });

  if (typeof limit === 'number') {
    query.limit(limit);
  }

  const posts = await query.lean();
  const mappedPosts = posts.map(mapNewsDocument);

  if (mappedPosts.length === 0) {
    return typeof limit === 'number' ? fallbackPublishedPosts.slice(0, limit) : fallbackPublishedPosts;
  }

  return mappedPosts;
}

export async function getPublishedPostsByCategory(categorySlug: string) {
  const connected = await connectSafely();

  if (!connected) {
    return fallbackPosts.filter(
      (post) => post.status === 'published' && post.categorySlug === categorySlug
    ) as ContentPost[];
  }

  const category = (await Category.findOne({ slug: categorySlug }).lean()) as any;

  if (!category) {
    return [];
  }

  const posts = await News.find({
    category: category._id,
    status: 'published',
  })
    .populate('category')
    .sort({ createdAt: -1 })
    .lean();

  return posts.map(mapNewsDocument);
}

export async function getPostByIdentifier(identifier: string) {
  const connected = await connectSafely();

  if (!connected) {
    return (fallbackPosts.find((post) => post.slug === identifier || post.id === identifier) || null) as ContentPost | null;
  }

  const post = await News.findOne({
    $or: [{ slug: identifier }, { _id: identifier.match(/^[a-f0-9]{24}$/i) ? identifier : null }],
  })
    .populate('category')
    .lean();

  return post ? mapNewsDocument(post) : null;
}

export async function incrementPostViews(identifier: string) {
  const connected = await connectSafely();

  if (!connected) {
    return;
  }

  await News.findOneAndUpdate(
    { $or: [{ slug: identifier }, { _id: identifier.match(/^[a-f0-9]{24}$/i) ? identifier : null }] },
    { $inc: { views: 1 } }
  );
}

export async function savePost(input: {
  id?: string;
  title: string;
  slug?: string;
  excerpt?: string;
  content: string;
  image?: string;
  images?: string[];
  category: string;
  author: string;
  status: 'draft' | 'published';
  tags?: string[];
}) {
  const connected = await connectSafely();
  const postSlug = slugify(input.slug || input.title);
  const categorySlug = slugify(input.category);
  const categoryName =
    fallbackCategories.find((category) => category.slug === categorySlug)?.name ||
    input.category
      .trim()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  const excerpt = input.excerpt?.trim() || createExcerpt(input.content);
  const image =
    input.image?.trim() ||
    fallbackImages[
      Math.abs(
        [...postSlug].reduce((sum, char) => sum + char.charCodeAt(0), 0)
      ) % fallbackImages.length
    ];
  const images = normalizeImages([image, ...(input.images || [])], image);

  if (!connected) {
    return {
      id: postSlug,
      slug: postSlug,
      title: input.title.trim(),
      excerpt,
      content: input.content,
      image,
      images,
      category: categoryName,
      categorySlug,
      author: input.author.trim(),
      status: input.status,
      date: formatDate(),
      views: 0,
      tags: input.tags || [],
    };
  }

  const category = await Category.findOneAndUpdate(
    { slug: categorySlug },
    { name: categoryName, slug: categorySlug },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );

  const filter = input.id ? { _id: input.id } : { slug: postSlug };

  const post = await News.findOneAndUpdate(
    filter,
    {
      title: input.title.trim(),
      slug: postSlug,
      excerpt,
      content: input.content,
      image,
      images,
      category: category._id,
      author: input.author.trim(),
      status: input.status,
      tags: input.tags || [],
    },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  )
    .populate('category')
    .lean();

  return mapNewsDocument(post);
}

export async function getDashboardSummary() {
  const [posts, categories] = await Promise.all([getAdminPosts(), getCategories()]);

  const publishedPosts = posts.filter((post) => post.status === 'published');
  const draftPosts = posts.filter((post) => post.status === 'draft');
  const totalViews = posts.reduce((sum, post) => sum + post.views, 0);

  return {
    totalPosts: posts.length,
    publishedPosts: publishedPosts.length,
    draftPosts: draftPosts.length,
    totalViews,
    categoriesCount: categories.length,
    recentPosts: posts.slice(0, 5),
  };
}
