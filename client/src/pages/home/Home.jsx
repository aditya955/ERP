import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import './style.scss'
import React from 'react'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <Header />
      <div className="main-container">

      </div>
      <Footer />
    </div>
  )
}

export default Home