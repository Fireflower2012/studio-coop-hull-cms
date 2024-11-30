import { defineField, defineType } from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'date',
      type: 'date',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'author',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: input => input
        .toLowerCase()
        .replace(/\s+/g, '-')
        .slice(0, 200)
      }
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags for item",
      of: [
        {
          type: 'string',
        }
      ]
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'summary',
      type: 'string',
      validation: Rule => Rule.required().max(500)
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true
          }
        },
      ],
    })
  ],
})
