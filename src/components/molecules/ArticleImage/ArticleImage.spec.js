import React from "react"
import { render } from "@testing-library/react"
import ArticleImage from "./ArticleImage"

describe("Article Image", () => {
  it("shouldmatch snapshot", () => {
    const { wrapper } = render(
      <ArticleImage
        title="Title of article"
        image="https://lh3.googleusercontent.com/w5zAdJ2zDj8ActvZEVESIqL0pevo1s4B7uzLhjn8bc9LRqPo5QM78OzLyCqjcDNYa6w"
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
