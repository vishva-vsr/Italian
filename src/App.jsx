import React from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import './App.css'
import Card from './components/Cards/Card'
import Gallery from './components/Gallery/Gallery'
import Final from './components/Final/Final'

function App() {
  return (
    <div id='rem-over'>
    <div id="over-bg-id">

      <Home/>
      <About/>
      <Card/>
      <Gallery/>
      <Final/>
      </div>
    </div>
  )
}

export default App