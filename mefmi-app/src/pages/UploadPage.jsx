
import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Chatbot from '../components/Chatbot'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import UploadSection from '../components/UploadSection'

function UploadPage() {
  return (
    <div>
      <ScrollToTop/>
      <Chatbot/>
      <Navbar/>
      <UploadSection/>
      <Footer/>
    </div>
  )
}

export default UploadPage