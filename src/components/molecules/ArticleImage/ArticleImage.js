import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"

import Text from "../../atoms/Text/Text"

import "./ArticleImage.scss"

export default function ArticleImage({ image, title, onRemove }) {
  const { t } = useTranslation()

  const handleRemove = (e) => {
    e.stopPropagation()
    e.preventDefault()
    onRemove()
  }

  return (
    <div className="articleImage" style={{ backgroundImage: `url(${image})` }}>
      <button
        data-testid="button-remove"
        type="button"
        className="remove-btn"
        onClick={handleRemove}
      >
        {t("Archive")}
      </button>
      <Text size="l" color="#FFF" kind="bold">
        {title}
      </Text>
    </div>
  )
}

ArticleImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
}
