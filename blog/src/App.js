import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Article from './components/article/Article'
import Footer from './components/footer/Footer'
import Detail from './components/detail/Detail'
import About from './components/about/About'
import Classify from './components/classify/Classify'

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Article} />
      <Route path="/detail" component={Detail} />
      <Route path="/classify" component={Classify} />
      <Route path="/about" component={About} />
      <Footer />
    </Router>
  )
}

export default App
