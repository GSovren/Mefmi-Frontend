import React from 'react'
import Navbar from '../components/Navbar'
import RankingsSection from '../components/RankingsSection'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import Chatbot from '../components/Chatbot'
import Feedback from '../components/Feedback'

function RankingsPage() {
  return (
    <div>
      <ScrollToTop/>
      <Feedback/>
      <Chatbot/>
      <Navbar/>
      <RankingsSection/>
      <Footer/>
    </div>
  )
}

export default RankingsPage
