import React from "react"
import { render, fireEvent } from "@testing-library/react"
import ArticleImage from "./ArticleImage"

describe("Article Image", () => {
  it("should match snapshot", () => {
    const { wrapper } = render(
      <ArticleImage
        title="Title of article"
        image="https://lh3.googleusercontent.com/w5zAdJ2zDj8ActvZEVESIqL0pevo1s4B7uzLhjn8bc9LRqPo5QM78OzLyCqjcDNYa6w"
        onRemove={jest.fn()}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it("should call onRemove", () => {
    const onRemove = jest.fn()
    const { getByTestId } = render(
      <ArticleImage
        title="Title of article"
        image="https://lh3.googleusercontent.com/w5zAdJ2zDj8ActvZEVESIqL0pevo1s4B7uzLhjn8bc9LRqPo5QM78OzLyCqjcDNYa6w"
        onRemove={onRemove}
      />
    )

    fireEvent.click(getByTestId("button-remove"))

    expect(onRemove).toHaveBeenCalled()
  })
})
