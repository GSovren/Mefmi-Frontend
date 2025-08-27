import React from 'react'
import Navbar from '../components/Navbar'
import CompareSection from '../components/CompareSection'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import Chatbot from '../components/Chatbot'

function ComparePage() {
  return (
    <div>
      <ScrollToTop/>
      <Chatbot/>
      <Navbar/>
      <CompareSection/>
      <Footer/>
    </div>
  )
}

export default ComparePage
