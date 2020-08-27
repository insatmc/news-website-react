import React, { useContext, useEffect } from "react"
import { render } from "@testing-library/react"
import { store, StateProvider } from "./articlesStore"

function MockedComp() {
  const { state, dispatch } = useContext(store)
  useEffect(() => {
    dispatch({
      type: "REMOVE_ARTICLE",
      article: "removed_article",
    })
  }, [dispatch])
  return <div>{JSON.stringify(state.removedArticles)} </div>
}

describe("Article Store", () => {
  it("should have the initial state", () => {
    // eslint-disable-next-line no-underscore-dangle
    expect(store._currentValue).toEqual({ articles: [], removedArticles: [] })
  })

  it("should change removedArticles when REMOVE_ARTICLE action happens", () => {
    const wrapper = render(
      <StateProvider>
        <MockedComp />
      </StateProvider>
    )
    expect(wrapper.baseElement.innerHTML).toEqual(
      '<div><div>["removed_article"] </div></div>'
    )
  })
})
