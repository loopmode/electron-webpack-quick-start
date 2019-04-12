import { hot } from 'react-hot-loader/root'
import React from 'react'

import { getStatic } from 'common/utils/static'

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <section>
        <h2>Embedded</h2>
        <p>
          This image is embedded via{' '}
          <code>{`<img src={require('./electron.png')} />`}</code>
        </p>
        <img src={require('./electron.png')} />
      </section>
      <section>
        <h2>Static</h2>
        <img src={getStatic('electron.png')} />
      </section>
    </div>
  )
}
export default hot(App)
