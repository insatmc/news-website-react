import React from "react"
import SearchInput from "./SearchInput"

export const Default = () => (
  <SearchInput
    value="value of input"
    onChange={() => {}}
    onBtnClick={() => {}}
  />
)

export default {
  title: "Components/Molecules/SearchInput",
  component: SearchInput,
}
