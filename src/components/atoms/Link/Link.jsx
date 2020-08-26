import React from "react"
import PropTypes from "prop-types"

import "./Link.scss"

export default function Link({ to, onClick, children }) {
  return (
    <a
      className="link"
      data-testid="link"
      target="_blank"
      rel="noopener noreferrer"
      href={to}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
}

Link.defaultProps = {
  children: "",
  onClick: () => {},
}
