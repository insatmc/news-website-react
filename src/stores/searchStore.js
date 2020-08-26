import React, { createContext, useReducer } from "react"
import PropTypes from "prop-types"

const initialState = {
  country: "us",
  date: {
    startDate: null,
    endDate: null,
  },
  query: null,
  sort: "relevancy",
}

const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((currentState, action) => {
    switch (action.type) {
      case "SET_SEARCH":
        return { ...currentState, ...action.data }
      default:
        return currentState
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { store, StateProvider }
