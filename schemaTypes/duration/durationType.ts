import {defineField, defineType} from 'sanity'

export const durationType = defineType({
  name: 'duration',
  title: 'Duration',
  description: 'A start and finish time for an event',
  type: 'object',
  fields: [
    defineField({
      name: 'start',
      type: 'timeValue',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'end',
      type: 'timeValue',
      validation: Rule => Rule.required()
    }),
  ],
  // make the fields render next to each other
  options: {columns: 2},
})