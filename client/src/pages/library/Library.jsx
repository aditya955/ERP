import './library.scss'
import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Container from '../../components/container/Container'

const Library = () => {
  return (
    <div className='library'>
      <Sidebar />
      <Header />
      <Container>
        <h1> Jaishree tu yaha edit karna</h1>
        <h2> Container tag pura tera </h2>
        <p>Apna Library</p>
      </Container>
      <Footer />
    </div>
  )
}

export default Library