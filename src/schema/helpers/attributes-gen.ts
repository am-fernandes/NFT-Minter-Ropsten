export interface AttributesSchema {
  trait_type: string
  value: string | number
}

function attributesGen(attributes: { [name: string]: any }[]): AttributesSchema[] {
  if (!attributes.length) {
    return [] as AttributesSchema[]
  }

  const formattedAttributes = [] as AttributesSchema[]

  attributes.map((attribute) => {
    const key = Object.keys(attribute)[0]

    const obj = {
      trait_type: key,
      value: attribute[key],
    }
    formattedAttributes.push(obj)
  })
  return formattedAttributes
}

export { attributesGen }