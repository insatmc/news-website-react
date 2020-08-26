import React from "react"
import PropTypes from "prop-types"

import Text from "../Text/Text"

import "./Title.scss"

export default function Title({ children }) {
  return (
    <div className="title">
      <Text size="l" kind="bold">
        {children}
      </Text>
    </div>
  )
}

Title.propTypes = {
  children: PropTypes.string,
}

Title.defaultProps = {
  children: "",
}
