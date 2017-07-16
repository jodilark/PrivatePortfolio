import React, { Component } from 'react';
import Home from './views/Home';
import Contact from './components/contact/Contact'


class App extends Component {

  render() {
    return (
      <div>
        <Home />
        <Contact />
      </div>
    )
  }

}
export default App
