import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import "./Text.scss"

export default function Text({ children, size, kind, color }) {
  const className = classNames("text", {
    s: size === "s",
    m: size === "m",
    l: size === "l",
    italic: kind === "italic",
    bold: kind === "bold",
  })
  return (
    <div className={className} style={{ color }}>
      {children}{" "}
    </div>
  )
}

Text.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  kind: PropTypes.string,
  color: PropTypes.string,
}

Text.defaultProps = {
  children: "",
  size: "",
  kind: "",
  color: "#000",
}
