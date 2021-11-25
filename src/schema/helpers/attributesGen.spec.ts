import { attributesGen } from './attributes-gen'

describe("Attributes Generation", () => {
  it("should be empty array", () => {
    const attr = attributesGen([])

    expect(attr).toEqual([])
  })

  it("should be valid value", () => {
    const attr = attributesGen([{
      mode: "test",
    }, {
      lib: "jest"
    },
    {
      foo: "bar"
    }])

    expect(attr).toEqual([{
      trait_type: "mode",
      value: "test"
    }, {
      trait_type: "lib",
      value: "jest"
    }, {
      trait_type: "foo",
      value: "bar"
    }])
  })
})