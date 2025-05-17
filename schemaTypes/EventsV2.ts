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
        title: 'Location Name',
        name: 'locationName',
        type: 'string',
    }),
        defineField({
          title: 'Location Link (Copy from Google maps)',
          name: 'locationLink',
          type: 'url',
      }),
        defineField({
            title: 'Link to external Info (ie Instagram, facebook)',
            name: 'eventLink',
            type: 'url',   
        }),
        defineField({
          title: 'Include on Homepage',
          name: 'includeOnHomepage',
          type: 'string',
          options: {
            layout: "radio",
            list: [
              { title: "Yes", value: "yes" },
              { title: "No", value: "no" },
            ],
          },
          initialValue: "yes", 
      })
  ],
})