import React from "react"
import PropTypes from "prop-types"

import ArticlePreview, { ArticleShape } from "../ArticlePreview/ArticlePreview"

import "../../templates/ArticlesListTemplate/ArticlesList.scss"

export default function ArticlesList({ articles }) {
  return (
    <div className="articlesList">
      {articles.map((article) => {
        return <ArticlePreview key={article.url} article={article} />
      })}
    </div>
  )
}

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(ArticleShape).isRequired,
}
