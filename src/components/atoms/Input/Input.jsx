import React from "react"
import PropTypes from "prop-types"

import "./Input.scss"

export default function Input({ onChange, placeholder, value }) {
  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <input
      className="input"
      data-testid="input"
      onChange={handleChange}
      value={value || ""}
      placeholder={placeholder}
    />
  )
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
}

Input.defaultProps = {
  placeholder: "",
  value: "",
}
