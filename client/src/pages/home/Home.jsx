import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Container from '../../components/container/Container'

import './style.scss'
import React from 'react'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <Header />
      <Container>
        <p>Hello World</p>
      </Container>
      <Footer />
    </div>
  )
}

export default Home