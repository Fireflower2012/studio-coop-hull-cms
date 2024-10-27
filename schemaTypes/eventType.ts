import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
        name: 'description',
        type: 'string',
      }),
      defineField({
        name: 'date',
        type: 'datetime',
      }),
        defineField({
            name: 'location',
            type: 'string',
        }),
        defineField({
            name: 'eventLink',
            type: 'url',   
        }),
        defineField({
            name: 'imageName',
            type: 'string',   
        })
  ],
})