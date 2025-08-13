
import React from 'react'
import Navbar from './components/Navbar'
import DashboardSection from './components/DashboardSection'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <div className='app-container'>
      <Chatbot/>
      <Navbar/>
      <DashboardSection/>
      <Footer/>
    </div>
  )
}

export default App
