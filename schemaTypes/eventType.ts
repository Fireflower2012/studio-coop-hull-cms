import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
        name: 'description',
        type: 'string',
        validation: Rule => Rule.required().max(300)
      }),
      defineField({
        name: 'date',
        type: 'datetime',
        validation: Rule => Rule.required()
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
            name: 'image',
            type: 'image',
            options: {
              hotspot: true
            },
            validation: Rule => Rule.required()  
        })
  ],
})