import {defineField, defineType} from 'sanity'

export const eventsV2 = defineType({
  name: 'eventv2',
  title: 'EventV2',
  type: 'document',
  fields: [
    defineField({
      title: 'Event Name',  
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
        title: 'Event Description',
        name: 'description',
        type: 'string',
        validation: Rule => Rule.required().max(300)
      }),        
      defineField({
        title: 'Image',
        name: 'image',
        type: 'image',
        options: {
          hotspot: true
        },
        validation: Rule => Rule.required()  
    }),
    defineField({
      title: 'Tag',
      name: 'eventTags',
      type: 'tags',
      options: {
        includeFromReference: 'EventTagsList',
        allowCreate: false
      },
      validation: Rule => Rule.required()                   
  }),
      defineField({
        title: 'Date',
        name: 'date',
        type: 'date',
        validation: Rule => Rule.required()
      }),
    defineField({
        name: 'duration',
        type: 'duration',
      }),
        defineField({
            title: 'Location',
            name: 'location',
            type: 'geopoint',
        }),
        defineField({
            title: 'Link',
            name: 'eventLink',
            type: 'url',   
        }),

  ],
})