import React from "react"

import { render } from "@testing-library/react"

import Title from "./Title"

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
