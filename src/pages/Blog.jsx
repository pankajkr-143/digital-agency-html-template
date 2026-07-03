import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Newspaper, Calendar, User, ArrowRight, ArrowLeft, Clock, Share2, MessageSquare } from "lucide-react";
import { useSEO } from "../hooks/useSEO";


export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(`${window.location.origin}/blog#${selectedPost?.id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const seoTitle = selectedPost 
    ? `${selectedPost.title} | MackysTech Blog`
    : "Tech Blog | Software Dev, Cloud, AI, Security Articles | MackysTech";
    
  const seoDesc = selectedPost
    ? selectedPost.excerpt
    : "MackysTech blog: Expert articles on software development, React, Node.js, cloud computing, cybersecurity, AI/ML, DevOps and more. Written by our experienced developers.";

  const seoCanonical = selectedPost
    ? `https://www.mackystech.in/blog#${selectedPost.id}`
    : "https://www.mackystech.in/blog";

  const seoSchema = selectedPost
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": selectedPost.title,
        "description": selectedPost.excerpt,
        "datePublished": selectedPost.date,
        "author": {
          "@type": "Person",
          "name": selectedPost.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "MackysTech",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.mackystech.in/assets/logo.jpeg"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": seoCanonical
        }
      }
    : {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "MackysTech Blog",
        "description": "Expert tech articles on software development, web development, AWS, and AI.",
        "publisher": {
          "@type": "Organization",
          "name": "MackysTech"
        }
      };

  useSEO({
    title: seoTitle,
    description: seoDesc,
    canonical: seoCanonical,
    schema: seoSchema,
    keywords: selectedPost ? `${selectedPost.category || "tech"}, blog post, MackysTech` : "tech blog, software engineering, coding tutorials, AI ML blog",
    author: selectedPost ? selectedPost.author : "MackysTech",
  });

  const posts = [
    {
      id: "featured",
      title: "Architecting Enterprise SaaS for 10M+ Monthly Active Users",
      excerpt: "A case study of how our development team built a globally distributed web application leveraging serverless databases, edge routing, and caching.",
      author: "Mack Mackey",
      date: "June 02, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
      content: (
        <>
          <p className="text-lg text-gray-300 leading-relaxed">
            Scaling a software application to support over 10 million monthly active users is as much about architecture as it is about writing clean code. As modern SaaS systems grow, monolithic architectures quickly show bottlenecks in database connections, API latency, and regional network latency.
          </p>
          
          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">1. Moving to Edge Routing</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            In our legacy architecture, API requests from Europe and Asia had to travel all the way to our central database server in Virginia (us-east-1). This introduced an average network latency of 200ms before any database query even ran.
          </p>
          <p className="text-gray-400 leading-relaxed mb-6">
            We solved this by implementing edge routing through Cloudflare Workers. Requests are now intercepted at the edge node closest to the user, validating authorization tokens and rendering static pages locally before hitting origin servers.
          </p>

          <div className="my-8 p-6 rounded-2xl bg-white/5 border border-white/10 font-mono text-xs text-cyan-300 overflow-x-auto">
{`// Example Edge Router routing table
export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api/v2")) {
      return fetch(\`https://api-origin.mackystech.in\${url.pathname}\`, request);
    }
    return fetch(\`https://static-pages.mackystech.in\${url.pathname}\`);
  }
}`}
          </div>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">2. Serverless Database Replication</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            Connecting 10,000 parallel edge worker instances to a single PostgreSQL database would instantly exhaust connection pools. To support high concurrent writes, we integrated AWS DynamoDB Global Tables, syncing writes within sub-second thresholds across three target global regions.
          </p>

          <blockquote className="border-l-4 border-purple-500 pl-6 my-8 italic text-gray-300 text-lg">
            "By caching 95% of read queries at the edge and utilizing global write replica databases, we successfully reduced average page load times from 2.4 seconds to under 400 milliseconds worldwide."
          </blockquote>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Conclusion</h3>
          <p className="text-gray-400 leading-relaxed">
            Scaling system reliability requires anticipating points of failure before they occur. Emphasizing decoupled infrastructure, edge routers, and globally distributed databases is the single best investment any fast-growing SaaS business can make.
          </p>
        </>
      ),
    },
    {
      id: "micro-frontends",
      title: "Building Micro-frontends with React 19 & Vite 7",
      excerpt: "Discover how code splitting, server actions, and modern bundlers can speed up dashboard performance for enterprises.",
      author: "Alex Rivera",
      date: "May 28, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
      content: (
        <>
          <p className="text-lg text-gray-300 leading-relaxed">
            Micro-frontends are rapidly becoming the preferred approach for enterprise engineering teams. By breaking down large monolithic web apps into autonomous, deployable sub-applications, teams can ship features faster without step-dependency locks.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">React 19 & Dynamic Import Native Bindings</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            Historically, federating modules required complicated Webpack configs. With React 19 and Vite 7, native ESM imports allow us to pull remote bundles into runtime cleanly. React's Suspense component catches loading states seamlessly.
          </p>

          <div className="my-8 p-6 rounded-2xl bg-white/5 border border-white/10 font-mono text-xs text-cyan-300 overflow-x-auto">
{`// Importing a federated module dynamically
import React, { Suspense } from "react";

const RemoteBillingModule = React.lazy(() => import("http://billing.macky.internal/assets/RemoteEntry.js"));

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard View</h1>
      <Suspense fallback={<div>Loading billing system...</div>}>
        <RemoteBillingModule />
      </Suspense>
    </div>
  );
}`}
          </div>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Why Vite 7?</h3>
          <p className="text-gray-400 leading-relaxed">
            Vite 7's updated build pipeline resolves chunks with near-zero overhead. Combined with React 19's Server Component capabilities, micro-frontends can serve pre-rendered components directly to client containers, resulting in lightning-fast initial load times.
          </p>
        </>
      ),
    },
    {
      id: "tailwindcss-v4",
      title: "Why We Switched to TailwindCSS V4 for Client Projects",
      excerpt: "An in-depth review of TailwindCSS version 4's new CSS-first configuration and lightning-fast compiler engine.",
      author: "Sneha Patel",
      date: "May 15, 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop",
      content: (
        <>
          <p className="text-lg text-gray-300 leading-relaxed">
            TailwindCSS version 4 is a ground-up rewrite of the framework. It replaces the classic JavaScript-based config (`tailwind.config.js`) with an elegant CSS-first design, processing directives straight in the CSS file.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">CSS-First Architecture</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            Instead of writing complex configuration objects, Tailwind v4 allows you to configure themes, screens, and custom colors directly inside `@import "tailwindcss";` using native CSS variables.
          </p>

          <div className="my-8 p-6 rounded-2xl bg-white/5 border border-white/10 font-mono text-xs text-cyan-300 overflow-x-auto">
{`/* index.css with Tailwind CSS v4 */
@import "tailwindcss";

@theme {
  --color-primary-brand: #06b6d4;
  --font-display: "Outfit", sans-serif;
}`}
          </div>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Incredible Compilation Speed</h3>
          <p className="text-gray-400 leading-relaxed">
            V4 uses a custom Rust-based compiler engine. It scans HTML and JS files up to 10x faster than previous node compilers, meaning dev servers boot instantaneously and live refreshes occur without lag.
          </p>
        </>
      ),
    },
    {
      id: "aws-iam-pitfalls",
      title: "Securing AWS deployments: Top 5 common IAM pitfalls",
      excerpt: "Avoid security leaks. We breakdown how configuring identity access management rules properly saves cost and headaches.",
      author: "Mack Mackey",
      date: "May 03, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
      content: (
        <>
          <p className="text-lg text-gray-300 leading-relaxed">
            Security in the cloud operates on a shared responsibility model. While Amazon Web Services secures the server racks and hypervisors, you are responsible for defining access gates. IAM (Identity and Access Management) rules are the most critical layer of defense.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Pitfall #1: Using Wildcards on Privileged Resources</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            Setting `"Resource": "*"` for operations like `s3:GetObject` or `dynamodb:PutItem` exposes all buckets or tables. Always restrict resources to specific Amazon Resource Names (ARNs).
          </p>

          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Pitfall #2: Hardcoded IAM Credentials in App Code</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            Storing AWS access keys in environment files risks leakages. Always use AWS IAM Roles attached to EC2 instances or ECS tasks to assign short-lived security tokens automatically.
          </p>

          <blockquote className="border-l-4 border-red-500 pl-6 my-8 italic text-gray-300">
            "Always follow the Principle of Least Privilege (PoLP): assign only the permissions required to complete the specific task, and nothing more."
          </blockquote>
        </>
      ),
    },
  ];

  return (
    <section className="relative min-h-screen bg-black text-gray-300 py-28 px-6 md:px-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.1),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Heading */}
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-purple-400 font-semibold mb-6">
                  <Newspaper className="w-3.5 h-3.5" /> Blog & Insights
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                  The Mackys<span className="text-purple-400">Tech</span> Blog
                </h1>
                <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                  Stay ahead of the curve. Articles, deep dives, and tech news straight from our developers' workspace.
                </p>
              </div>

              {/* Featured Post */}
              {posts.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-16 bg-[#0a0f1a] border border-white/5 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row hover:border-purple-500/25 transition-all duration-300"
                >
                  <div className="lg:w-1/2 aspect-video lg:aspect-auto">
                    <img
                      src={posts[0].image}
                      alt={posts[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-semibold bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full border border-purple-500/20">
                        Featured
                      </span>
                      <h2 
                        onClick={() => setSelectedPost(posts[0])}
                        className="text-2xl md:text-3xl font-bold text-white mt-6 hover:text-purple-400 cursor-pointer transition-colors leading-tight"
                      >
                        {posts[0].title}
                      </h2>
                      <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
                        {posts[0].excerpt}
                      </p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold font-mono">
                          M
                        </span>
                        <span className="text-xs text-gray-400">{posts[0].author}</span>
                      </div>
                      <div 
                        onClick={() => setSelectedPost(posts[0])}
                        className="flex items-center gap-2 text-purple-400 text-sm font-semibold hover:underline cursor-pointer group"
                      >
                        Read Article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Regular Posts Grid */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {posts.slice(1).map((post, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group bg-[#0a0f1a] border border-white/5 rounded-2xl overflow-hidden shadow-xl hover:border-purple-500/25 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 font-mono">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" /> {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="w-3.5 h-3.5" /> {post.author}
                          </span>
                        </div>
                        <h3 
                          onClick={() => setSelectedPost(post)}
                          className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors leading-snug cursor-pointer"
                        >
                          {post.title}
                        </h3>
                        <p className="mt-3 text-gray-400 text-sm leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <div 
                        onClick={() => setSelectedPost(post)}
                        className="pt-4 border-t border-white/5 flex items-center justify-between text-sm text-purple-400 font-semibold cursor-pointer group/btn"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="max-w-3xl mx-auto"
            >
              {/* Back Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="flex items-center gap-2 text-sm text-purple-400 hover:text-white transition duration-300 mb-8 font-semibold bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Articles
              </button>

              {/* Title & Metadata */}
              <div className="mb-8">
                <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                  {selectedPost.title}
                </h1>
                
                <div className="flex flex-wrap items-center justify-between gap-6 border-y border-white/10 py-4">
                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4 text-purple-400" /> {selectedPost.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-purple-400" /> {selectedPost.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-purple-400" /> {selectedPost.readTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button 
                      onClick={handleShare}
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition border border-white/10 cursor-pointer relative" 
                      title="Share"
                    >
                      <Share2 className="w-4 h-4" />
                      {copied && (
                        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-2.5 py-1 rounded-md whitespace-nowrap shadow-lg">
                          Copied!
                        </span>
                      )}
                    </button>
                    <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition border border-white/10 cursor-pointer" title="Comment">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Image */}
              <div className="aspect-video w-full rounded-2xl overflow-hidden mb-10 border border-white/10 shadow-2xl">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Table of Contents */}
              <div className="bg-[#0d1221] border border-white/5 rounded-2xl p-6 mb-8">
                <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Table of Contents</h4>
                <ul className="space-y-2 text-sm text-purple-400">
                  {selectedPost.id === "featured" && (
                    <>
                      <li><a href="#edge-routing" className="hover:underline">1. Moving to Edge Routing</a></li>
                      <li><a href="#db-rep" className="hover:underline">2. Serverless Database Replication</a></li>
                      <li><a href="#conclusion" className="hover:underline">3. Conclusion</a></li>
                    </>
                  )}
                  {selectedPost.id === "micro-frontends" && (
                    <>
                      <li><a href="#react-19" className="hover:underline">1. React 19 & Dynamic Import Native Bindings</a></li>
                      <li><a href="#vite-7" className="hover:underline">2. Why Vite 7?</a></li>
                    </>
                  )}
                  {selectedPost.id === "tailwindcss-v4" && (
                    <>
                      <li><a href="#v4-engine" className="hover:underline">1. The New Lightning Compiler Engine</a></li>
                      <li><a href="#v4-css" className="hover:underline">2. CSS-First Configuration</a></li>
                    </>
                  )}
                  {selectedPost.id === "aws-iam-pitfalls" && (
                    <>
                      <li><a href="#iam-least" className="hover:underline">1. Principle of Least Privilege</a></li>
                      <li><a href="#iam-danger" className="hover:underline">2. The Dangers of Wildcard Policies</a></li>
                    </>
                  )}
                </ul>
              </div>

              {/* Content Body */}
              <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
                {selectedPost.content}
              </div>

              {/* Dynamic FAQ Block */}
              <div className="mt-12 p-6 rounded-2xl bg-[#0d1221] border border-white/5">
                <h3 className="text-lg font-bold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4 text-sm text-gray-400">
                  <div>
                    <h4 className="font-semibold text-white">How does MackysTech use this tech stack?</h4>
                    <p className="mt-1">We implement these architectures directly across our enterprise client projects to ensure near-zero downtime and fast page loading.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Can we consult on custom micro-frontends/AWS setup?</h4>
                    <p className="mt-1">Yes! We offer professional technical consulting and resource augmentation for enterprise teams. Contact us at info@mackystech.in.</p>
                  </div>
                </div>
              </div>

              {/* Premium CTA Block */}
              <div className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/25 text-center">
                <h3 className="text-xl font-bold mb-2">Build High-Performance Digital Products</h3>
                <p className="text-sm text-gray-300 mb-6">Partner with MackysTech technical architects to deliver scalable software engineered for growth.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2.5 px-6 rounded-full transition shadow-[0_0_20px_rgba(168,85,247,0.3)] text-sm">
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related Articles */}
              <div className="mt-12 border-t border-white/10 pt-10">
                <h3 className="text-xl font-bold mb-6 text-white">Related Articles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {posts
                    .filter((p) => p.id !== selectedPost.id)
                    .slice(0, 2)
                    .map((relatedPost, rIdx) => (
                      <div
                        key={rIdx}
                        onClick={() => {
                          setSelectedPost(relatedPost);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="p-5 rounded-2xl bg-[#0a0f1a] border border-white/5 hover:border-purple-500/20 transition cursor-pointer flex flex-col justify-between group"
                      >
                        <div>
                          <span className="text-xs text-purple-400 font-semibold">{relatedPost.date}</span>
                          <h4 className="font-bold text-white mt-1 group-hover:text-purple-400 transition-colors line-clamp-2 text-sm leading-snug">
                            {relatedPost.title}
                          </h4>
                        </div>
                        <span className="text-xs text-purple-400 font-semibold mt-4 flex items-center gap-1">
                          Read Article <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Bottom Nav / CTA */}
              <div className="border-t border-white/10 mt-12 pt-8 text-center">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2.5 px-6 rounded-full transition duration-300 shadow-lg cursor-pointer text-sm"
                >
                  View Other Articles
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
