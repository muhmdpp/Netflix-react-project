import React from 'react'
import NavBar from './components/navBar/navBar'
import './App.css'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import {originals,action, romance} from './urls'
function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url= {originals} title = 'Netflix Originals'/>
      <RowPost url= {action} title = 'Action'/>
      <RowPost url= {romance} title = 'Romance'/>
      
      
    </div>
  )
}

export default App