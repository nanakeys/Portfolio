import React, { Component } from 'react';
import { About, Contact, Footer, Header, Portfolio, Resume, Testimonials } from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
