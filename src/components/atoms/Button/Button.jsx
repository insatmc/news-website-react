import React from "react"
import PropTypes from "prop-types"

import "./Button.scss"

export default function Button({ children, onClick }) {
  return (
    <button
      data-testid="button"
      type="button"
      className="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}
