import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Input from "./Input"

describe("Input", () => {
  it("should match snapshot", () => {
    const onChangeMock = jest.fn()
    const { wrapper } = render(
      <Input placeholder="placeholder text" onChange={onChangeMock} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it("Should call onChange", () => {
    const onChangeMock = jest.fn()
    const { getByTestId } = render(
      <Input placeholder="placeholder text" onChange={onChangeMock} />
    )

    fireEvent.change(getByTestId("input"), {
      target: { value: "TEXT_CHANGED" },
    })

    expect(onChangeMock).toHaveBeenCalledWith("TEXT_CHANGED")
  })
})
