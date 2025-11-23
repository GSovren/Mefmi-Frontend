
import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages/UploadPage.css';
import ReportsSection from '../components/ReportsSection'

function ReportsPage() {
  return (
    <div className='upload-page-container'>
      <ScrollToTop/>
      <Navbar/>
      <ReportsSection/>
      <Footer/>
    </div>
  )
}

export default ReportsPage