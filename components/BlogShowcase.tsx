import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";
import { BLOG_POSTS } from "@/lib/blog-posts";

type Props = { dict: Dictionary["blogShowcase"]; blogDict: Dictionary["blog"]; lang: string };

/** 从 BLOG_POSTS 按日期降序取最新 3 篇，元数据从字典读取 */
export default function BlogShowcase({ dict, blogDict, lang }: Props) {
  const latestPosts = [...BLOG_POSTS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)
    .map((post) => {
      const meta = post.dictKey === "featured"
        ? blogDict.featured
        : blogDict.posts[post.dictKey as number];
      return {
        title: meta.title,
        date: meta.date,
        read: meta.read,
        tag: meta.tag,
        excerpt: meta.excerpt ?? "",
        slug: post.slug,
        image: post.image,
      };
    });

  return (
    <section className="bg-white py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-bold mb-2 sm:mb-3">{dict.kicker}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-3 sm:mb-4 tracking-tight">{dict.title}</h2>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">{dict.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {latestPosts.map((post, i) => (
            <Link
              key={i}
              href={`/${lang}/blog/${post.slug}`}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 transition group"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-brand-orange bg-brand-orange/10 px-2 py-1 rounded">
                    {post.tag}
                  </span>
                  <span className="text-xs text-slate-400">{post.date}</span>
                  <span className="text-xs text-slate-400">· {post.read}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-orange transition">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-slate-600 leading-relaxed text-sm mb-3">{post.excerpt}</p>
                )}
                <span className="text-brand-orange text-sm font-semibold">{dict.readMore} →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
