import useAxios from "axios-hooks"

const apiKey = process.env.REACT_APP_API_KEY_NEWS

export default function useArticlesQuery({ country, query, date, sort }) {
  const startDate = date.startDate && date.startDate.format("YYYY-MM-DD")
  const endDate = date.endDate && date.endDate.format("YYYY-MM-DD")

  const url = query
    ? `https://newsapi.org/v2/everything?q=${query}${
        startDate ? `&from=${startDate}` : ""
      }${endDate ? `&to=${endDate}` : ""}`
    : `https://newsapi.org/v2/top-headlines?country=${country}`

  const [{ data, loading, error }] = useAxios(
    `${url}&apiKey=${apiKey}&sortBy=${sort}`
  )

  return { data, loading, error }
}
