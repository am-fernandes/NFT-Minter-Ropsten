import { NFTMetadata } from "../index";

function validMetadata(metadata: NFTMetadata) {
  return new Promise((resolve, reject) => {
    const { name, description, image } = metadata

    if (!name || !description || !image) {
      reject(new Error("Empty fields"))
    } else if (description.length < 10) {
      reject(new Error("Short description"))
    } else {
      resolve(true)
    }
  })
}

export { validMetadata }