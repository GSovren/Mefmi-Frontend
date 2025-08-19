import React from 'react'
import Navbar from '../components/Navbar'
import ExploreSection from '../components/ExploreSection'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function ExplorePage() {
  return (
    <div>
      <ScrollToTop/>
      <Navbar/>
      <ExploreSection/>
      <Footer/>
    </div>
  )
}

export default ExplorePage