import { validMetadata } from './index'

describe("valid metadata", () => {
  it("should be invalid with empty fields", () => {
    //@ts-ignore
    const valid = validMetadata({
      description: "Description",
      name: "Name"
    })
    expect(valid).rejects.toThrowError("Empty fields")
  })

  it("should be invalid with lower description", () => {
    const valid = validMetadata({
      description: "desc",
      name: "Name",
      image: "URL Image"
    })
    expect(valid).rejects.toThrowError("Short description")
  })
})