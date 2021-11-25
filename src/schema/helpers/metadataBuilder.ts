import { NFTMetadata } from './../index';
import { AttributesSchema } from './attributes-gen'

interface FormattedMetadata {
  description: string
  image: string
  name: string
  attributes?: undefined | AttributesSchema[]
}

function metadataBuilder(metadata: NFTMetadata, attributes?: AttributesSchema[]): FormattedMetadata {
  if (!attributes) {
    return {
      description: metadata.description,
      image: metadata.image,
      name: metadata.name,
    }
  }

  return {
    description: metadata.description,
    image: metadata.image,
    name: metadata.name,
    attributes: attributes
  }
}

export {
  metadataBuilder
}