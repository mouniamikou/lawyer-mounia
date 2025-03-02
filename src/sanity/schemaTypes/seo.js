export default {
    name: 'seo',
    title: 'SEO Metadata',
    type: 'object',
    fields: [
      {
        name: 'metaTitle',
        title: 'Meta Title',
        type: 'string',
      
      },
      {
        name: 'metaDescription',
        title: 'Meta Description',
        type: 'text',
       
      },
      {
        name: 'keywords',
        title: 'Keywords',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
  };
  