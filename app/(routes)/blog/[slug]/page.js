import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, ChevronRight } from 'lucide-react';
import { blogPosts } from '@/app/data/blog';

export async function generateMetadata({ params }) {
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'מאמר לא נמצא | ד״ר מוחמד ואחמד מנסור',
      description: 'המאמר המבוקש לא נמצא.',
    };
  }
  
  return {
    title: `${post.title} | ד״ר מוחמד ואחמד מנסור`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    return (
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6">המאמר לא נמצא</h1>
            <p className="text-xl mb-8">
              המאמר שחיפשת אינו קיים או שהוסר.
            </p>
            <Link 
              href="/blog" 
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-white hover:bg-primary/90 py-3 px-6"
            >
              חזרה לבלוג
              <ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </main>
    );
  }
  
  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);
  
  return (
    <main className="min-h-screen">
      <article>
        {/* Hero section with cover image */}
        <div className="relative h-[40vh] min-h-[300px] w-full">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <div className="max-w-3xl">
                <span className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-full mb-4">
                  {post.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>
                <div className="flex flex-wrap items-center text-white/90 text-sm mb-4">
                  <span className="flex items-center mr-6 mb-2">
                    <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
                    {post.publishDate}
                  </span>
                  <span className="flex items-center mb-2">
                    <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Breadcrumbs */}
        <div className="bg-gray-100 py-3">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <nav className="flex text-sm" aria-label="ניווט">
                <Link href="/" className="text-gray-600 hover:text-primary">דף הבית</Link>
                <span className="mx-2 text-gray-400">/</span>
                <Link href="/blog" className="text-gray-600 hover:text-primary">בלוג</Link>
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-primary">{post.title}</span>
              </nav>
            </div>
          </div>
        </div>
        
        {/* Author info */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-8 p-4 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 rounded-full overflow-hidden relative mr-4">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  fill
                  className="object-contain object-top"
                  sizes="64px"
                />
              </div>
              <div>
                <h2 className="font-bold text-lg">{post.author}</h2>
                <p className="text-gray-600">{post.authorTitle}</p>
              </div>
            </div>
            
            {/* Post content */}
            <div 
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Post footer */}
            <div className="border-t border-gray-200 pt-8 mb-12">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-primary hover:underline"
              >
                <ChevronRight className="ml-1 h-5 w-5" aria-hidden="true" />
                חזרה לכל המאמרים
              </Link>
            </div>
          </div>
        </div>
      </article>
      
      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">מאמרים נוספים שעשויים לעניין אותך</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map(relatedPost => (
                  <article key={relatedPost.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
                    <div className="relative h-48 w-full">
                      <Image
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold mb-3">
                        <Link href={`/blog/${relatedPost.slug}`} className="hover:text-primary transition-colors">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-gray-700">{relatedPost.excerpt}</p>
                    </div>
                    <div className="px-6 pb-6">
                      <Link 
                        href={`/blog/${relatedPost.slug}`} 
                        className="text-primary hover:underline font-medium"
                      >
                        קרא עוד
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* CTA section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">מוכנים לקבוע תור?</h2>
            <p className="text-xl mb-8 opacity-90">
              צוות הרופאים המומחים שלנו מחכה לכם כדי להעניק לכם את הטיפול הטוב ביותר
            </p>
            <Link 
              href="/appointment" 
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-white text-primary hover:bg-gray-100 py-3 px-8 text-lg"
              aria-label="קביעת תור לייעוץ רפואי"
            >
              קביעת תור
              <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 