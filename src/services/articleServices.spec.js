import { renderHook } from "@testing-library/react-hooks"
import useAxios from "axios-hooks"

import useArticlesQuery from "./articlesServices"

jest.mock("axios-hooks")

// in your test
useAxios.mockReturnValue([{ data: { articles: [{ url: "mocked/url" }] } }])

describe("Article Services", () => {
  it("should call axios with right url for top news for us", () => {
    const { result } = renderHook(() => useArticlesQuery({ country: "us" }))
    expect(useAxios).toHaveBeenCalledWith(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY_NEWS}`
    )
    expect(result.current.data).toEqual({ articles: [{ url: "mocked/url" }] })
  })

  it("should call axios with right url for news for giving query", () => {
    const { result } = renderHook(() => useArticlesQuery({ query: "bitcoin" }))
    expect(useAxios).toHaveBeenCalledWith(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_API_KEY_NEWS}`
    )
    expect(result.current.data).toEqual({ articles: [{ url: "mocked/url" }] })
  })
})
