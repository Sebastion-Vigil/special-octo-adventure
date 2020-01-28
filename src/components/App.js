import React from 'react'

import Flag from './Flag.js'

import '../css/App.css'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Flag/>
        {/* <div className="text header">LGBTQ</div> */}
        <div className="text content">Let God Bless Trump Quickly</div>
      </div>
    )
  }
}

export default App
