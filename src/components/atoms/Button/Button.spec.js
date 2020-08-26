import React from "react"
import { render, fireEvent } from "@testing-library/react"

import Button from "./Button"

describe("Button", () => {
  it("should match snapshot", () => {
    const onClickMock = jest.fn()
    const { wrapper } = render(
      <Button onClick={onClickMock}>Button Text</Button>
    )
    expect(wrapper).toMatchSnapshot(1)
  })
  it("should call onClick", () => {
    const onClickMock = jest.fn()
    const { getByTestId } = render(
      <Button onClick={onClickMock}>Button Text</Button>
    )
    fireEvent.click(getByTestId("button"))
    expect(onClickMock).toHaveBeenCalled()
  })
})
