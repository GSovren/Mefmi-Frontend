
import React from 'react'
import Navbar from '../components/Navbar'
import ApprovalsSection from '../components/ApprovalsSection'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'
import '../pages/ApprovalsPage.css';

function ApprovalsPage() {
  return (
    <div className='approvals-page-container'>
      <ScrollToTop/>
      <Navbar/>
      <ApprovalsSection/>
      <Footer/>
    </div>
  )
}

export default ApprovalsPage
