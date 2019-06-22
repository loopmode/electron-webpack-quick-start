import { hot } from 'react-hot-loader/root'
import React from 'react'

import { getStatic } from '@/static'
import autobind from 'autobind-decorator'
class DecoratorDummy extends React.Component {
  message = 'if you see this in the console log, then it works!'
  render() {
    return (
      <button onClick={this.handleClick}>click me and watch the console log</button>
    )
  }
  @autobind
  handleClick() {
    console.log(this.message)
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <section>
        <DecoratorDummy />
        <h2>Embedded</h2>
        <p>
          The next image is embedded via{' '}
          <code>{`<img src={require('./electron.png')} />`}</code>
        </p>
        <img src={require('./electron.png')} />
      </section>
      <section>
        <h2>Static</h2>
        <p>
          The next image is embedded via{' '}
          <code>{`<img src={getStatic('electron.png')} />`}</code>
        </p>
        <img src={getStatic('electron.png')} />
      </section>
    </div>
  )
}
export default hot(App)
