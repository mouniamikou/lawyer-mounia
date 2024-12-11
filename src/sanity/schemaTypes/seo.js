export default {
    name: 'seo',
    title: 'SEO Metadata',
    type: 'object',
    fields: [
      {
        name: 'metaTitle',
        title: 'Meta Title',
        type: 'string',
        validation: Rule => Rule.max(60).required(),
      },
      {
        name: 'metaDescription',
        title: 'Meta Description',
        type: 'text',
        validation: Rule => Rule.max(160).required(),
      },
      {
        name: 'keywords',
        title: 'Keywords',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
  };
  