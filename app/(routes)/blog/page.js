import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { blogPosts } from '@/app/data/blog';

export const metadata = {
  title: 'בלוג | ד״ר מוחמד ואחמד מנסור',
  description: 'מאמרים מקצועיים בנושאי כירורגיה פלסטית, אופתלמולוגיה וכירורגיה אוקולופלסטית מאת ד״ר מוחמד מנסור וד״ר אחמד מנסור.',
};

const BlogCard = ({ post }) => {
  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <span className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-grow">
        <h2 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <span className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
            {post.publishDate}
          </span>
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
            {post.readTime}
          </span>
        </div>
        
        <p className="text-gray-700 mb-4">{post.excerpt}</p>
      </div>
      
      <div className="px-6 pb-6 mt-auto">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden relative mr-3">
            <Image
              src={post.authorImage}
              alt={post.author}
              fill
              className="object-contain object-top"
              sizes="40px"
            />
          </div>
          <div>
            <span className="block font-medium">{post.author}</span>
            <span className="text-sm text-gray-600">{post.authorTitle}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-b from-primary/10 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">הבלוג שלנו</h1>
            <p className="text-xl text-gray-700">
              מאמרים מקצועיים ועדכונים בתחומי הכירורגיה הפלסטית, אופתלמולוגיה וכירורגיה אוקולופלסטית
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      
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