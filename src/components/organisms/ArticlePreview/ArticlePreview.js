import React, { useContext } from "react"
import moment from "moment"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"

import ArticleImage from "../../molecules/ArticleImage/ArticleImage"
import Text from "../../atoms/Text/Text"
import Link from "../../atoms/Link/Link"

import { store } from "../../../stores/articlesStore"

import "../../templates/ArticlePreviewTemplate/ArticlePreviewTemplate.scss"

export default function ArticlePreview({ article }) {
  const { t } = useTranslation()

  const { dispatch } = useContext(store)

  const onRemove = () => {
    dispatch({
      type: "REMOVE_ARTICLE",
      article: article.url,
    })
  }

  return (
    <div className="articlePreview">
      <Link to={article.url}>
        <ArticleImage
          onRemove={onRemove}
          title={article.title}
          image={article.urlToImage}
        />
      </Link>
      <div className="articleInfos">
        <Text size="m" kind="italic" color="#666">
          {moment(article.publishedAt).fromNow()} - {article.source.name}
        </Text>
      </div>
      <div className="articleDesc">
        <Text size="m">{article.description}</Text>
      </div>
      <div className="articleInfos">
        <Text>
          <Link to={article.url}>{t("Read more")}</Link>
        </Text>
      </div>
    </div>
  )
}

export const ArticleShape = PropTypes.shape({
  title: PropTypes.string,
  url: PropTypes.string,
  publishedAt: PropTypes.string,
  description: PropTypes.string,
  urlToImage: PropTypes.string,
  source: PropTypes.shape({
    name: PropTypes.string,
  }),
})

ArticlePreview.propTypes = {
  article: ArticleShape.isRequired,
}
