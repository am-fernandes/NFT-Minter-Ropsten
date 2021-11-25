import express, { Request, Response } from 'express'
import { validMetadata } from './validator'
import { attributesGen } from './helpers/attributes-gen'
import { metadataBuilder } from './helpers/metadataBuilder'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

export interface NFTMetadata {
  description: string
  image: string
  name: string
  attributes?: { [name: string]: any }[]
}

app.post("/metadata-builder", (req: Request, res: Response): void => {
  const metadata = req.body as NFTMetadata

  validMetadata(metadata)
    .then(() => {
      if (metadata.attributes?.length) {
        const attributes = attributesGen(metadata.attributes)

        res.status(200).json(metadataBuilder(metadata, attributes))
      } else {
        res.status(200).json(metadataBuilder(metadata))
      }
    })
    .catch((error: any) => {
      res.status(500).send(error.message)
    })
})

app.listen(8080, () => {
  console.log(`Server Running on http://localhost:${8080}`);
})