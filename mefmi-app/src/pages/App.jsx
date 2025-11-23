
import React from 'react'
import Navbar from '../components/Navbar'
import DashboardSection from '../components/DashboardSection'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'
import ScrollToTop from '../components/ScrollToTop'
import Feedback from '../components/Feedback'


function App() {
  return (
    <div className='app-container'>
      <ScrollToTop/>
      <Feedback/>
      <Chatbot/>
      <Navbar/>
      <DashboardSection/>
      <Footer/>
    </div>
  )
}

export default App
