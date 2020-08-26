import React, { useContext, useEffect } from "react"
import { StringParam, useQueryParam } from "use-query-params"
import { useTranslation } from "react-i18next"
import ArticlesList from "../../organisms/ArticlesList/ArticlesList"
import useArticlesQuery from "../../../services/articlesServices"

import "../../templates/ResultPageTemplate/ResultPage.scss"
import { store } from "../../../stores/searchStore"
import Title from "../../atoms/Title/Title"
import countries from "../../../constants/countries"
import FilterList from "../../organisms/FilterList/FilterList"
import { store as articlesStore } from "../../../stores/articlesStore"
import Text from "../../atoms/Text/Text"

export default function TopArticlesPage() {
  const { state, dispatch } = useContext(store)
  const { state: articlesState } = useContext(articlesStore)

  const { t } = useTranslation()

  const [query, setQuery] = useQueryParam("q", StringParam)

  useEffect(() => {
    dispatch({
      type: "SET_SEARCH",
      data: { query },
    })
  }, [dispatch, query])

  const { data, loading, error } = useArticlesQuery(state)

  const onSearch = (search) => {
    dispatch({
      type: "SET_SEARCH",
      data: search,
    })

    setQuery(search.query)
  }

  const articles =
    data &&
    !loading &&
    data.articles.filter((a) => !articlesState.removedArticles.includes(a.url))

  return (
    <div className="resultPage">
      <FilterList onSearch={onSearch} currentSearch={state} />
      <Title>
        {query
          ? `${t("Results for")} ${state.query}`
          : `${t("Trending in")} ${countries[state.country]}`}
      </Title>
      {loading && <Text size="m">{t("Loading")}</Text>}
      {error && <Text size="m">{t("Something went wrong")}</Text>}
      {data && !loading && <ArticlesList articles={articles} />}
      {data && articles.length === 0 && (
        <Text size="m">{t("Nothing found for the selected filters")}</Text>
      )}
    </div>
  )
}
