import { metadataBuilder } from './metadataBuilder'

describe("metadata builder", () => {
  it("should not have attribute field", () => {
    const meta = metadataBuilder({
      name: "My NFT",
      image: "url_img",
      description: "My NFT Description"
    })

    expect(meta).toEqual({
      name: "My NFT",
      image: "url_img",
      description: "My NFT Description"
    })
  })

  it("should have attribute field", () => {
    const meta = metadataBuilder({
      name: "My NFT with attribute",
      image: "url_img",
      description: "My NFT Description with attribute"
    }, [{
      trait_type: "type",
      value: "My NFT attribute"
    }])

    expect(meta).toEqual({
      name: "My NFT with attribute",
      image: "url_img",
      description: "My NFT Description with attribute",
      attributes: [{
        trait_type: "type",
        value: "My NFT attribute"
      }]
    })
  })
})