import React from "react"
import "./App.css"
import HomePage from "./components/pages/HomePage/HomePage"

import { StateProvider as SearchStore } from "./stores/searchStore"
import { StateProvider as ArticlesStore } from "./stores/articlesStore"

function App() {
  return (
    <SearchStore>
      <ArticlesStore>
        <HomePage />
      </ArticlesStore>
    </SearchStore>
  )
}

export default App
