export default {
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'object',
        fields: [
          {
            name: 'en',
            title: 'English',
            type: 'string',
            validation: Rule => Rule.required(),
          },
          {
            name: 'fr',
            title: 'French',
            type: 'string',
            validation: Rule => Rule.required(),
          }
        ]
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title.en',
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
        options: {
          list: [
            { title: 'Visa Portugal', value: 'visa-portugal' },
            { title: 'Real Estate', value: 'real-estate' },
            { title: 'Business', value: 'business' },
            { title: 'Others', value: 'others' },
          ],
          layout: 'radio',
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
        validation: Rule => Rule.required(),
      },
      {
        name: 'excerpt',
        title: 'Description',
        type: 'object',
        fields: [
          {
            name: 'en',
            title: 'English',
            type: 'text',
            validation: Rule => Rule.required(),
          },
          {
            name: 'fr',
            title: 'French',
            type: 'text',
            validation: Rule => Rule.required(),
          }
        ],
        description: 'A brief summary of the blog post (for SEO and previews).',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'object',
        fields: [
          {
            name: 'en',
            title: 'English Content',
            type: 'array',
            of: [
              { type: 'block' },
              { type: 'image', options: { hotspot: true } },
            ],
            validation: Rule => Rule.required(),
          },
          {
            name: 'fr',
            title: 'French Content',
            type: 'array',
            of: [
              { type: 'block' },
              { type: 'image', options: { hotspot: true } },
            ],
            validation: Rule => Rule.required(),
          }
        ]
      },
      {
        name: 'seo',
        title: 'SEO',
        type: 'object',
        fields: [
          {
            name: 'en',
            title: 'English SEO',
            type: 'seo',
          },
          {
            name: 'fr',
            title: 'French SEO',
            type: 'seo',
          }
        ]
      },
    ],
  };
  