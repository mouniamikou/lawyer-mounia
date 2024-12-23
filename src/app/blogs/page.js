"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { motion } from "framer-motion";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "blogPost"] | order(publishedAt desc) {
            _id,
            title,
            slug,
            mainImage{
              asset->{
                url
              }
            },
            excerpt,
            category,
            publishedAt,
            "estimatedReadTime": length(pt::text(body)) / 5 / 180
          }
        `);

        setBlogs(data);
        setFilteredBlogs(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    setVisiblePosts(6);
    
    if (category === "All") {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter((blog) => blog.category === category);
      setFilteredBlogs(filtered);
    }
  };

  const loadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const categories = ["All", "visa-portugal", "real-estate", "business", "others"];

  if (isLoading) {
    return (
      <div className="container mx-auto py-24 flex justify-center items-center">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-48"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-gray-100 rounded-lg h-96"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-24">
      
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-primary">Recent blogs</h2>
        </motion.div>
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilterChange(category)}
            className={`px-4 py-2 rounded-full transition-colors duration-200 
              ${selectedCategory === category 
                ? "bg-blue-600 text-white hover:bg-blue-700" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.slice(0, visiblePosts).map((blog) => (
          <div 
            key={blog._id} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {blog.mainImage && (
              <div className="relative h-48 w-full">
                <Image
                  src={blog.mainImage.asset.url}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            
            <div className="p-6">
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary text-white mb-4">
                {blog.category}
              </span>
              
              <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                {blog.title}
              </h2>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {blog.excerpt}
              </p>
              
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">
                    {formatDate(blog.publishedAt)}
                  </span>
               
                </div>
                
                <Link 
                  href={`/blogs/${blog.slug.current}`}
                  className="px-4 py-2 text-sm rounded-md border border-gray-300 
                    hover:bg-gray-50 transition-colors duration-200"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visiblePosts < filteredBlogs.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={loadMore}
            className="px-8 py-3 text-lg border border-gray-300 rounded-lg
              hover:bg-gray-50 transition-colors duration-200"
          >
            Load More Posts
          </button>
        </div>
      )}

      {filteredBlogs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No posts found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default BlogList;