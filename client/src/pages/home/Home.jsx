import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Container from '../../components/container/Container'

import './style.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <Header />
      <Container>
        <p>Hello World</p>
        <h1> Jaishree tu <Link to='/library'>Yaha jaa</Link></h1>
      </Container>
      {/* <Footer /> */}
    </div>
  )
}

export default Home