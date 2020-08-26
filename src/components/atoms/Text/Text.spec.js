import React from "react"
import { render } from "@testing-library/react"
import Text from "./Text"

describe("Text", () => {
  it("should match snapshot", () => {
    const { wrapper } = render(
      <Text kind="italic" size="m">
        Text
      </Text>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
