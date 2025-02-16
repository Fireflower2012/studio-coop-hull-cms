import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media} from 'sanity-plugin-media'
import {tags} from 'sanity-plugin-tags'
import { googleMapsInput } from "@sanity/google-maps-input";

export default defineConfig({
  name: 'default',
  title: 'Coop Hull Site',

  projectId: 'gbawu8o6',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), media(), tags({}), googleMapsInput({apiKey:"AIzaSyBqYG6E0ceIaXNbxFsOq9osMyUth2oXp-k"})],

  schema: {
    types: schemaTypes
  }

})
