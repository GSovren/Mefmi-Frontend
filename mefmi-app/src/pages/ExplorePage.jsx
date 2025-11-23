import React from 'react'
import Navbar from '../components/Navbar'
import ExploreSection from '../components/ExploreSection'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import Chatbot from '../components/Chatbot'
import Feedback from '../components/Feedback'

function ExplorePage() {
  return (
    <div>
      <ScrollToTop/>
      <Feedback/>
      <Chatbot/>
      <Navbar/>
      <ExploreSection/>
      <Footer/>
    </div>
  )
}

export default ExplorePage