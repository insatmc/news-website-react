import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { DateRangePicker } from "react-dates"
import Select from "react-select"
import { useTranslation } from "react-i18next"

import countries from "../../../constants/countries"
import sortbyOptions from "../../../constants/sortbyOptions"

import Text from "../../atoms/Text/Text"

import SearchInput from "../../molecules/SearchInput/SearchInput"

import "react-dates/lib/css/_datepicker.css"
import "./FilterList.scss"
import "../../templates/InputWithLabelTemplate/InputWithLabelTemplate.scss"
import "../../templates/FiltersTemplate/FiltersTemplate.scss"

export default function FilterList({ currentSearch, onSearch }) {
  const { t } = useTranslation()
  const [search, setSearch] = useState(currentSearch)
  const [focusedInput, setFocusedInput] = useState(null)
  const onQueryChange = (value) => {
    setSearch({
      ...search,
      query: value,
    })
  }

  useEffect(() => {
    setSearch(currentSearch)
  }, [currentSearch])

  const onCountryChange = ({ value }) => {
    setSearch({
      ...search,
      country: value,
      query: "",
    })

    onSearch({
      ...search,
      country: value,
      query: "",
    })
  }

  const onDateChange = ({ startDate, endDate }) => {
    setSearch({
      ...search,
      date: {
        startDate,
        endDate,
      },
    })

    onSearch({
      ...search,
      date: {
        startDate,
        endDate,
      },
    })
  }

  const onSortChange = ({ value }) => {
    setSearch({
      ...search,
      sort: value,
    })

    onSearch({
      ...search,
      sort: value,
    })
  }

  const onBtnClick = () => {
    onSearch(search)
  }

  const customStyles = {
    control: (base) => ({
      ...base,
      height: 48,
      minHeight: 48,
    }),
  }

  return (
    <div className="filters">
      <div className="trending-switcher input-with-label">
        <div className="label">
          <Text size="m">{t("Go for trending news in")}</Text>
        </div>
        {/* eslint-disable-next-line jsx-a11y/no-onchange */}
        <Select
          onChange={onCountryChange}
          value={{ value: search.country, label: countries[search.country] }}
          styles={customStyles}
          options={Object.keys(countries).map((country) => {
            return {
              value: country,
              label: countries[country],
            }
          })}
        />
      </div>

      <div className="query-search">
        <SearchInput
          value={search.query}
          onChange={onQueryChange}
          onBtnClick={onBtnClick}
        />
      </div>

      <div className="more-filters">
        {currentSearch.query && (
          <div className="filter-date input-with-label">
            <div className="label">
              <Text size="m">{t("Filter by date")}</Text>
            </div>
            <DateRangePicker
              startDate={search.date.startDate}
              endDate={search.date.endDate}
              onDatesChange={onDateChange}
              startDateId="start_date_id"
              endDateId="end_date_id"
              focusedInput={focusedInput}
              onFocusChange={(f) => setFocusedInput(f)}
              isOutsideRange={() => false}
            />
          </div>
        )}
        {currentSearch.query && (
          <div className="sort-by input-with-label">
            <div className="label">
              <Text size="m">{t("Sort by")}</Text>
            </div>

            <Select
              onChange={onSortChange}
              styles={customStyles}
              value={{ value: search.sort, label: sortbyOptions[search.sort] }}
              options={Object.keys(sortbyOptions).map((option) => {
                return {
                  value: option,
                  label: sortbyOptions[option],
                }
              })}
            />
          </div>
        )}
      </div>
    </div>
  )
}

FilterList.propTypes = {
  currentSearch: PropTypes.shape({
    country: PropTypes.string,
    query: PropTypes.string,
    date: {
      startDate: PropTypes.object,
      endDate: PropTypes.object,
    },
    sort: PropTypes.string,
  }).isRequired,
  onSearch: PropTypes.func.isRequired,
}
