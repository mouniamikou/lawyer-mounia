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
        { name: 'en', title: 'English', type: 'string', validation: Rule => Rule.required() },
        { name: 'fr', title: 'French', type: 'string', validation: Rule => Rule.required() },
      ],
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
      options: { hotspot: true },
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
        { name: 'en', title: 'English', type: 'text', validation: Rule => Rule.required() },
        { name: 'fr', title: 'French', type: 'text', validation: Rule => Rule.required() },
      ],
    },

    // ✅ Summary
    {
      name: 'summary',
      title: 'Steps Summary',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'en', type: 'string', title: 'English Summary' },
            { name: 'fr', type: 'string', title: 'French Summary' },
            {
              name: 'linkedSectionKey',
              type: 'string',
              title: 'Link to Section (_key)',
              description: 'Paste the _key of the section this summary refers to',
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    },

    // ✅ Structured Sections
    {
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'object',
              title: 'Section Title',
              fields: [
                { name: 'en', type: 'string', title: 'English' },
                { name: 'fr', type: 'string', title: 'French' },
              ],
            },
            {
              name: 'content',
              type: 'object',
              fields: [
                {
                  name: 'en',
                  type: 'array',
                  of: [{ type: 'block' }, { type: 'image' }],
                },
                {
                  name: 'fr',
                  type: 'array',
                  of: [{ type: 'block' }, { type: 'image' }],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'en', title: 'English SEO', type: 'seo' },
        { name: 'fr', title: 'French SEO', type: 'seo' },
      ],
    },
  ],
};
