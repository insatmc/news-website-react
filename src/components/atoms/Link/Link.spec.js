import React from "react"
import { render, fireEvent } from "@testing-library/react"

import Link from "./Link"

describe("Link", () => {
  it("should match snapshot", () => {
    const onClickMock = jest.fn()
    const { wrapper } = render(
      <Link to="path/to/link" onClick={onClickMock}>
        Link Text
      </Link>
    )
    expect(wrapper).toMatchSnapshot(1)
  })
  it("should call onClick", () => {
    const onClickMock = jest.fn()
    const { getByTestId } = render(
      <Link to="path/to/link" onClick={onClickMock}>
        Link Text
      </Link>
    )
    fireEvent.click(getByTestId("link"))
    expect(onClickMock).toHaveBeenCalled()
  })
})
