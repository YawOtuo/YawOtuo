import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'

import experience from './schemaTypes/experience'
import about from './schemaTypes/about'
import project from './schemaTypes/project'
import educationItem from './schemaTypes/educationItem'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, about, educationItem, project,  experience],
}
