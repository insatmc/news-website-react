import React from "react"

import Title from "./Title"
import { render } from "@testing-library/react"

describe("Title", () => {
  it("should match snapshot", () => {
    const { wrapper } = render(
      <Title kind="italic" size="m">
        Title
      </Title>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
