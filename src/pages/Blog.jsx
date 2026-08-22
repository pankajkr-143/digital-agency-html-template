import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Calendar, User, ArrowRight, Tag } from "lucide-react";
import { blogPosts, blogCategories, blogTags } from "../data/blogData";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredPost = blogPosts.find(post => post.isFeatured);
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch && !post.isFeatured;
  });

  return (
    <div className="bg-[#060a12] min-h-screen pt-32 pb-24 font-sans text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Resources</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Latest news, strategies, and case studies on scaling businesses with technology and marketing.
          </motion.p>
        </div>

        {/* Featured Post */}
        {featuredPost && activeCategory === "All" && searchQuery === "" && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <div className="relative rounded-[2rem] overflow-hidden group bg-white/[0.02] border border-white/10 flex flex-col lg:flex-row h-auto lg:h-[450px]">
              <div className="w-full lg:w-3/5 h-[300px] lg:h-full overflow-hidden relative">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#060a12] via-transparent to-transparent opacity-80" />
              </div>
              
              <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-600/20 text-cyan-400 text-xs font-bold uppercase tracking-wider rounded-full border border-blue-500/30">
                    Featured
                  </span>
                  <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">{featuredPost.category}</span>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-black text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                  {featuredPost.title}
                </h2>
                
                <p className="text-gray-400 mb-8 leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-10 h-10 rounded-full border-2 border-white/10" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-200">{featuredPost.author.name}</h4>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {featuredPost.publishedDate}
                      </p>
                    </div>
                  </div>
                  <Link to={`/blog/${featuredPost.id}`} className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-500 transition-colors shadow-lg">
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Main Layout: Left Sidebar + Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-3 space-y-10 order-2 lg:order-1">
            
            {/* Search */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0a1224] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400" /> Categories
              </h3>
              <div className="flex flex-col space-y-2">
                {blogCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left text-sm py-2 px-3 rounded-lg transition-all ${
                      activeCategory === cat 
                        ? 'bg-blue-600/10 text-cyan-400 border border-blue-500/30 font-semibold' 
                        : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                <Tag className="w-4 h-4 text-cyan-400" /> Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {blogTags.map(tag => (
                  <span key={tag} className="text-xs font-semibold bg-white/5 border border-white/10 text-gray-400 px-3 py-1.5 rounded-full hover:bg-white/10 hover:text-white cursor-pointer transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-gradient-to-br from-blue-900/40 to-[#060a12] border border-blue-500/30 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-2">Subscribe</h3>
              <p className="text-sm text-gray-400 mb-4">Get the latest business growth strategies delivered to your inbox.</p>
              <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-sm text-white mb-3 focus:outline-none focus:border-blue-500" />
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-500 transition-colors">
                Subscribe
              </button>
            </div>

          </div>

          {/* Right Content: Blog Grid */}
          <div className="lg:col-span-9 order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
              {searchQuery ? `Search Results for "${searchQuery}"` : `${activeCategory} Articles`}
            </h3>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-white/[0.02] rounded-2xl border border-white/5">
                <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <motion.div 
                    key={post.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="group bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/40 hover:bg-white/[0.04] transition-all flex flex-col"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-[#060a12]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-cyan-400 uppercase tracking-wider border border-white/10">
                        {post.category}
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-6 line-clamp-3 leading-relaxed flex-grow">
                        {post.excerpt}
                      </p>
                      
                      <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full" />
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-gray-300">{post.author.name}</span>
                            <span className="text-[10px] text-gray-500">{post.publishedDate} • {post.readTime}</span>
                          </div>
                        </div>
                        <Link to={`/blog/${post.id}`} className="text-cyan-400 font-semibold text-sm hover:text-cyan-300 flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
