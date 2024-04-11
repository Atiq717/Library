import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Library from './components/library';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      <Router>
        <header>
          <ul>
            <li>
              <link to='/'>
              Home 
              </link>
            </li>
            <li>
            <link to='/library'>
              About
            </link>
            </li>
          </ul>
        </header>
        <main>
          <Routes>
          <Route path='/'/>
          <Route path='/library' element={<Library/>}/>
          </Routes>
        </main>
      </Router>

    </div>
      
    </>
  )
}

export default App
