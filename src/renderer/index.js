import React from 'react'
import ReactDOM from 'react-dom'

const element = document.getElementById('app')

function renderApp() {
  const App = require('./App').default
  ReactDOM.render(<App />, element)
}

renderApp()
