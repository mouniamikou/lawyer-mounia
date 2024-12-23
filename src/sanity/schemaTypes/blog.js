export default {
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        of: [{ type: 'string' }],
        options: {
          list: [
            { title: 'Visa Portugal', value: 'Visa Portugal' },
            { title: 'Real Estate', value: 'Real Estate' },
            { title: 'Business', value: 'Business' },
            { title: 'Others', value: 'Others' },
          ],
          layout: 'checkbox',
        },
        validation: Rule => Rule.required().min(1).warning('Please select at least one category.'),
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
        validation: Rule => Rule.required(),
      },
      {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'text',
        description: 'A brief summary of the blog post (for SEO and previews).',
        validation: Rule => Rule.max(250),
      },
      {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [
          { type: 'block' },
          { type: 'image', options: { hotspot: true } },
        ],
      },
      {
        name: 'seo',
        title: 'SEO',
        type: 'seo',
      },
    ],
  };
  