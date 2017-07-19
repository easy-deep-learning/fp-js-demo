import React, { Component } from 'react'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>JS</h2>
        </div>
        <p className="App-intro">
          ...И звезды небесные пали на землю, как смоковница, потрясаемая
          сильным ветром, роняет незрелые смоквы свои. И небо скрылось, свившись как
          свиток; и всякая гора и остров двинулись с мест своих...
        </p>

        {Routes}
      </div>
    )
  }
}

export default App
