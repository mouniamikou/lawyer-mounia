"use client"

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "../../../sanity/lib/image"; // Ensure this utility is properly set up
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";

// Fetch data for the blog post
async function getData(slug) {
  const query = `
    *[_type == "blogPost" && slug.current == $slug][0] {
      title,
      mainImage {
        asset-> {
          _id,
          url
        }
      },
      body[] {
        ...,
        _type == "image" => {
          ...,
          asset->
        }
      },
      publishedAt,
      category,
      excerpt,
      seo
    }
  `;
  
  const data = await client.fetch(query, { slug });
  return data;
}

// PortableText Components for Custom Rendering
const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._id) return null;

      const imageUrl = urlForImage(value).width(800).url(); // Generate optimized image URL

      return (
        <div className="relative w-full my-8">
          <figure>
            <div className="relative h-[400px] w-full">
              <Image
                src={imageUrl}
                alt={value.alt || "Sanity Image"}
                layout="fill"
                className="object-contain"
                
                quality={90}
          
              />
            </div>
            {value.caption && (
              <figcaption className="text-center text-sm text-gray-500 mt-2">
                {value.caption}
              </figcaption>
            )}
          </figure>
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold my-5">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold my-4">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold my-4">{children}</h4>,
    normal: ({ children }) => <p className="text-lg my-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside my-4 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside my-4 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="text-lg leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="text-lg leading-relaxed">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => (
      <a 
        href={value.href} 
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
  },
};

// Generate SEO Metadata
// export async function generateMetadata({ params }) {
//   const post = await getData(params.slug);
//   if (!post?.seo) return { title: post?.title };

//   return {
//     title: post.seo.title || post.title,
//     description: post.seo.description || post.excerpt,
//     openGraph: {
//       title: post.seo.title || post.title,
//       description: post.seo.description || post.excerpt,
//       images: post.mainImage ? [post.mainImage.asset.url] : [],
//     },
//   };
// }

// BlogPost Component
const BlogPost = ({ params }) => {
  const { language } = useLanguage();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `
          *[_type == "blogPost" && slug.current == $slug][0] {
            title,
            mainImage {
              asset-> {
                _id,
                url
              }
            },
            body,
            publishedAt,
            category,
            excerpt,
            seo
          }
        `;
        
        const data = await client.fetch(query, { slug: params.slug });
        
        // Transform the data to use the correct language version
        const localizedData = {
          ...data,
          title: data.title[language],
          excerpt: data.excerpt[language],
          body: data.body[language],
          seo: data.seo[language],
        };

        setPost(localizedData);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.slug, language]);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    
    return new Date(dateString).toLocaleDateString(
      language === 'fr' ? 'fr-FR' : 'en-US', 
      options
    );
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-24 px-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mb-4"></div>
          <div className="h-16 bg-gray-200 rounded w-full mb-6"></div>
          <div className="h-96 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto py-24 px-4">
        <h1 className="text-4xl font-bold">
          {language === 'en' ? 'Post not found' : 'Article non trouvé'}
        </h1>
      </div>
    );
  }

  // Get category label based on language
  const getCategoryLabel = (categoryId) => {
    const categories = {
      'visa-portugal': { en: 'Visa Portugal', fr: 'Visa Portugal' },
      'real-estate': { en: 'Real Estate', fr: 'Immobilier' },
      'business': { en: 'Business', fr: 'Entreprise' },
      'others': { en: 'Others', fr: 'Autres' }
    };

    return categories[categoryId]?.[language] || categoryId;
  };

  return (
    <article className="container mx-auto py-24 px-4 max-w-4xl">
      <div className="mb-12">
        <span className="inline-block px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800 mb-4">
          {getCategoryLabel(post.category)}
        </span>
        <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
        <time className="text-gray-600 block mb-6">
          {formatDate(post.publishedAt)}
        </time>
      </div>

      {post.mainImage && (
        <div className="relative w-full h-[500px] mb-12">
          <Image
            src={post.mainImage.asset.url}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
            quality={100}
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none">
        <PortableText value={post.body} components={components} />
      </div>
    </article>
  );
};

export default BlogPost;
