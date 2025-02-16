import {defineField, defineType} from 'sanity'

export const EventTagsList = defineType({
  name: 'EventTagsList',
  title: 'Event Tags',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
        name: 'value',
        type: 'string',
        validation: Rule => Rule.required()
      })
  ],
})