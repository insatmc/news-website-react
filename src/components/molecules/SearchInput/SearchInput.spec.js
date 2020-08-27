import React from "react"
import { render, fireEvent } from "@testing-library/react"
import SearchInput from "./SearchInput"

describe("SearchInput", () => {
  it("should match snapshot", () => {
    const { wrapper } = render(
      <SearchInput onChange={jest.fn()} value="VALUE" onBtnClick={jest.fn()} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it("should call onChange", () => {
    const onChange = jest.fn()
    const { getByTestId } = render(
      <SearchInput onChange={onChange} value="VALUE" onBtnClick={jest.fn()} />
    )
    fireEvent.change(getByTestId("input"), { target: { value: "newValue" } })
    expect(onChange).toHaveBeenCalledWith("newValue")
  })

  it("should call onBtnClick", () => {
    const onBtnClick = jest.fn()
    const { getByTestId } = render(
      <SearchInput onChange={jest.fn()} value="VALUE" onBtnClick={onBtnClick} />
    )
    fireEvent.click(getByTestId("search-btn"))
    expect(onBtnClick).toHaveBeenCalled()
  })
})
