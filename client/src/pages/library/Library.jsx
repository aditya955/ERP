import './library.scss'
import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Container from '../../components/container/Container'

// const Library = () => {
//   return (
//     <div className='library'>
//       <Sidebar />
//       <Header />
//       <Container>
//         <h1> Jaishree tu yaha edit karna</h1>
//         <h2> Container tag pura tera </h2>
//         <p>Apna Library</p>
//       </Container>
//       <Footer />
//     </div>
//   )
// }


const Library = () => {
  return (
  
    <><Sidebar /><Header /><Container>

      {/* <h1>Library Page</h1> */}
      <div className="library">
        <div class="card-wrap">
          <div class="card-header one">
            <i class="fas fa-code"></i>
          </div>
          <div class="card-content">
            <h1 class="card-title">DBMS</h1>
            <p class="card-text">Database Management System, is software that facilitates the management, creation, and maintenance of databases.</p>
            <p> Author: Aditya.J</p>
            <button class="card-btn one">Not Available</button>
          </div>
        </div>
        <div class="card-wrap">
          <div class="card-header two">
            <i class="fab fa-css3-alt"></i>
          </div>
          <div class="card-content">
            <h1 class="card-title">Machine Learning</h1>
            <p class="card-text">Machine Learning is a subset of AI that focuses on the development of algorithms and models. </p>
            <p> Author: Sagar.M</p>
            <button class="card-btn two">Available</button>
          </div>
        </div>
        <div class="card-wrap">
          <div class="card-header three">
            <i class="fab fa-html5"></i>
          </div>
          <div class="card-content">
            <h1 class="card-title">Computer Networks</h1>
            <p class="card-text">A computer network is a collection of interconnected computers and devices that communicate and share resources.</p>
            <p> Author: Aditya.J</p>
            <button class="card-btn three">Renew Issue</button>
          </div>
        </div>
        <div class="card-wrap">
          <div class="card-header four">
            <i class="fab fa-js-square"></i>
          </div>
          <div class="card-content">
            <h1 class="card-title">Cybersecurity</h1>
            <p class="card-text">Protecting digital systems from unauthorized accesss, attacks, and damage.</p>
            <p> Author: Aditya.J</p>
            <button class="card-btn four">Issued</button>
          </div>
        </div>
      </div>

    </Container></>


  );

// </div>
 
};
export default Library;
