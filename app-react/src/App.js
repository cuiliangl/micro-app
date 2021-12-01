import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

function Home() {
  return <h2> Home Page!</h2>
}
function About() {
  return <h2> About Page</h2>
}
function Test() {
  return <h2> Test Page</h2>
}

function App() {
  return (
    <div className='App'>
      <h1>App React</h1>
      <div>
        <Link to='/'>Home</Link> |<Link to='/about'>About</Link> |
        <Link to='/test'>Test</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </div>
  )
}

export default App
