import React, { useState, useEffect } from 'react'
import Header from '../src/header'
import axios from 'axios'
import Generos from './generos'
import NovoGenero from './novogenero'
import EditarGenero from './editargenero'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const Home = () => {
  return <h1>Home</h1>
}

function App() { 
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('/api').then(res => {
      setData(res.data) 
    })
  }, [])
  
  return (
    <Router>
      <div> 
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/generos/:id' exact component={EditarGenero} />
        <Route path='/generos/novo' exact component={NovoGenero} />
        <Route path='/generos' exact component={Generos} />        
        <pre>{JSON.stringify(data)}</pre>         
      </div>
    </Router>
  )
}

export default App