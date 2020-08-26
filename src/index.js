import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { QueryParamProvider } from "use-query-params"
import App from "./App"
import "./i18n"

import "react-dates/initialize"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <App />
      </QueryParamProvider>
    </Router>
    ,
  </React.StrictMode>,
  document.getElementById("root")
)
