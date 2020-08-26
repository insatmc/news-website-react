import React from "react"
import Text from "./Text"

export const SmallText = () => <Text size="s">Small Text</Text>
export const MediumText = () => <Text size="m">Medium Text</Text>
export const LargeText = () => <Text size="l">Large Text</Text>
export const ItalicText = () => <Text kind="italic">Italic Text</Text>
export const BoldText = () => <Text kind="bold">Bold Text</Text>
export const ColorText = () => <Text color="#F0EE87">Color Text</Text>

export default {
  title: "Components/Atoms/Text",
  component: Text,
}
