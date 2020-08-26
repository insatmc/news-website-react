import React, { createContext, useReducer } from "react"
import PropTypes from "prop-types"

const initialState = {
  articles: [],
  removedArticles: [],
}

const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((currentState, action) => {
    switch (action.type) {
      case "REMOVE_ARTICLE":
        return {
          ...currentState,
          removedArticles: [...currentState.removedArticles, action.article],
        }
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
