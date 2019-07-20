import { hot } from 'react-hot-loader/root'

import requireStatic from '@/requireStatic'
import React from 'react'
import './App.css'

const reactLogo = requireStatic('./react.svg')
const electronLogo = requireStatic('electron.png')

// eslint-disable-next-line react/prop-types
const Link = React.memo(function Link({ href, children }) {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      className="App-link"
      href={href}
    >
      {children}
    </a>
  )
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={reactLogo}
          className="App-logo react-logo"
          alt="react-logo logo"
        />
        <img
          src={electronLogo}
          className="App-logo electron-logo"
          alt="electron logo"
        />
      </header>
      <p>
        Edit <code>src/renderer/App.js</code> and save to reload.
      </p>
      <p>
        <Link href="https://reactjs.org">Learn React</Link>
      </p>
      <p>
        <Link href="https://webpack.electron.build/">
          Learn Electron webpack
        </Link>
      </p>
    </div>
  )
}

export default hot(App)
