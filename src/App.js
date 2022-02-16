import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import SingleMovie from './pages/SingleMovie'


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/*" element={<Error />}></Route>
        <Route exact path="movies/:id" element={<SingleMovie />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
