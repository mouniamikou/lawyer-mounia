import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image"; // Make sure you have this utility

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

const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._id) {
        return null;
      }
      return (
        <div className="relative w-full my-8">
          <figure>
            <div className="relative h-[400px] w-full">
              <Image
                src={value.asset.url}
                alt={value.alt || ' '}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
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
    h1: ({children}) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
    h2: ({children}) => <h2 className="text-3xl font-bold my-5">{children}</h2>,
    h3: ({children}) => <h3 className="text-2xl font-bold my-4">{children}</h3>,
    h4: ({children}) => <h4 className="text-xl font-bold my-4">{children}</h4>,
    normal: ({children}) => <p className="text-lg my-4 leading-relaxed">{children}</p>,
    blockquote: ({children}) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({children}) => (
      <ul className="list-disc list-inside my-4 space-y-2">{children}</ul>
    ),
    number: ({children}) => (
      <ol className="list-decimal list-inside my-4 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({children}) => <li className="text-lg leading-relaxed">{children}</li>,
    number: ({children}) => <li className="text-lg leading-relaxed">{children}</li>,
  },
  marks: {
    link: ({children, value}) => {
      return (
        <a 
          href={value.href} 
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
    strong: ({children}) => <strong className="font-semibold">{children}</strong>,
    em: ({children}) => <em className="italic">{children}</em>,
  },
};

export async function generateMetadata({ params }) {
  const post = await getData(params.slug);
  if (!post?.seo) return { title: post?.title };

  return {
    title: post.seo.title || post.title,
    description: post.seo.description || post.excerpt,
    openGraph: {
      title: post.seo.title || post.title,
      description: post.seo.description || post.excerpt,
      images: post.mainImage ? [post.mainImage.asset.url] : [],
    },
  };
}

export default async function BlogPost({ params }) {
  const post = await getData(params.slug);
  
  if (!post) {
    return (
      <div className="container mx-auto py-24 px-4">
        <h1 className="text-4xl font-bold">Post not found</h1>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
      </div>

      {post.mainImage && (
        <div className="relative w-full h-[500px] mb-12">
          <Image
            src={post.mainImage.asset.url}
            alt={post.title}
            fill
            priority
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100}
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none">
        <PortableText value={post.body} components={components} />
      </div>
    </article>
  );
}