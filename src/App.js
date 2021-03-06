import React, { Component } from 'react'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <h2>Курс по основам языка JavaScript</h2>
        </div>

        {Routes}


        <footer>
          <div style={{
            'fontSize': '0.7em', 'margin': '30px 0 0 0', 'borderTop': '3px solid #cbd7e2',
            'padding': '10px 30px 30px 30px'
          }}>
            <p>...И звезды небесные пали на землю, как смоковница, потрясаемая
              сильным ветром, роняет незрелые смоквы свои.</p>
            <p>И небо скрылось, свившись как
              свиток; и всякая гора и остров двинулись с мест своих...</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default App
