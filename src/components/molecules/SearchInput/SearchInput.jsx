import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"

import Input from "../../atoms/Input/Input"

import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg"

import "./SearchInput.scss"

export default function SearchInput({ onChange, value, onBtnClick }) {
  const { t } = useTranslation()
  return (
    <div className="searchInput">
      <Input
        placeholder={t("Search something")}
        onChange={onChange}
        value={value}
      />
      <button type="button" onClick={onBtnClick}>
        <SearchIcon />
      </button>
    </div>
  )
}

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  onBtnClick: PropTypes.func.isRequired,
}

SearchInput.defaultProps = {
  value: "",
}
