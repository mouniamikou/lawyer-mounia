"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import { useParams } from "next/navigation";

// ✅ Fetch Blog Post Data
async function getData(slug) {
  const query = `
    *[_type == "blogPost" && slug.current == $slug][0] {
      title { en, fr },
      mainImage {
        asset-> {
          url
        }
      },
      body { en, fr },
      publishedAt,
      category,
      description { en, fr },
      seo { en, fr }
    }
  `;
  return await client.fetch(query, { slug });
}

// ✅ Custom Components for PortableText Rendering
const components = {
  //prettier-ignore
  block: {
    h2: ({ children }) => {
      const text = children
        .map((child) => {
          if (typeof child === "string") return child;
          if (typeof child?.props?.text === "string") return child.props.text;
          return "";
        })
        .join(" ")
        .trim();
    
      if (!text) return <h2 className="text-3xl font-bold my-5">{children}</h2>;
    
      const id = text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
    
      return (
        <h2 id={id} className="text-3xl font-bold my-5 scroll-mt-20">
          {children}
        </h2>
      );
    },
    

    h3: ({ children }) => {
      const text = children
        .map((child) => {
          if (typeof child === "string") return child;
          if (typeof child?.props?.text === "string") return child.props.text;
          return "";
        })
        .join(" ")
        .trim();
    
      if (!text) return <h3 className="text-2xl font-bold my-4">{children}</h3>;
    
      const id = text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
    
      return (
        <h3 id={id} className="text-2xl font-bold my-4">
          {children}
        </h3>
      );
    },
    
    normal: ({ children }) => (
      <p className="text-lg my-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic">
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._id) return null;
      return (
        <div className="relative w-full my-8">
          <figure>
            <div className="relative h-[400px] w-full">
              <Image
                src={urlForImage(value).width(800).url()}
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
  marks: {
    link: ({ children, value }) => {
      const isInternal = value?.href?.startsWith("#");
      return (
        <a
          href={value.href}
          className={`text-blue-600 hover:underline ${isInternal ? "scroll-smooth" : ""}`}
        >
          {children}
        </a>
      );
    },
  },
};

// ✅ Main BlogPost Component
const BlogPost = () => {
  //prettier-ignore
  const { language } = useLanguage();
  const params = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!params || !params.slug) return;

      try {
        const data = await getData(params.slug);
        if (!data) {
          setPost(null);
          return;
        }
        const post = {
          ...data,
          title: data.title?.[language] || data.title?.en || "",
          excerpt: data.excerpt?.[language] || data.excerpt?.en || "",
          body: data.body?.[language] || [],
          seo: data.seo?.[language] || {},
        };
        // ✅ Localize content based on language
        setPost(post);
        console.log(post);
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setPost(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params?.slug, language]);

  const generateSummary = (content) => {
    return content
      .filter((block) => block.style === "h2") // Get only h2 headings
      .map((block) => {
        const text = block.children
          .map((child) =>
            typeof child === "string" ? child : child.text || ""
          )
          .join(" ")
          .trim();

        if (!text) return null;

        const id = text
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, ""); // Same ID logic as in h2

        return (
          <li key={id}>
            <a href={`#${id}`} className="text-white hover:underline">
              {text}
            </a>
          </li>
        );
      });
  };
  // ✅ Format date based on language
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(
      language === "fr" ? "fr-FR" : "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
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
          {language === "en" ? "Post not found" : "Article non trouvé"}
        </h1>
      </div>
    );
  }

  return (
    <article className="container mx-auto py-24 px-4 max-w-4xl">
      <div className="mb-12">
        <span className="inline-block px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800 mb-4">
          {post.category}
        </span>
        <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
     
        <time className="text-gray-600 block mb-6">
          {formatDate(post.publishedAt)}
        </time>
        <p className="text-xl text-gray-700 mb-4">{post.description[language] || post.description.en}</p>
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

      <div className="prose  prose-lg max-w-none">
        <nav className="mb-6 p-4 border rounded-lg bg-primary ">
          <h3 className="text-xl text-white font-semibold mb-2">Summary</h3>
          <ul className="list-disc text-white pl-5">{generateSummary(post.body)}</ul>
        </nav>
        <PortableText value={post.body} components={components} />
      </div>
    </article>
  );
};

export default BlogPost;
