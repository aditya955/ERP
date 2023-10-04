import "./library.scss";
import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Container from "../../components/container/Container";

// const Library = () => {
//   return (
//     <div classNameName='library'>
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
    <>
      <Sidebar />
      <Header />
      <Container>
        {/* <h1>Library Page</h1> */}
        <div className="library">
          <div className="card-wrap">
            <div className="card-header one">
              <i className="fas fa-code"></i>
            </div>
            <div className="card-content">
              <h1 className="card-title">DBMS</h1>
              <p className="card-text">
                Database Management System, is software that facilitates the
                management, creation, and maintenance of databases.
              </p>
              <p> Author: Aditya.J</p>
              <button className="card-btn one">Not Available</button>
            </div>
          </div>
          <div className="card-wrap">
            <div className="card-header two">
              <i className="fab fa-css3-alt"></i>
            </div>
            <div className="card-content">
              <h1 className="card-title">Machine Learning</h1>
              <p className="card-text">
                Machine Learning is a subset of AI that focuses on the
                development of algorithms and models.{" "}
              </p>
              <p> Author: Sagar.M</p>
              <button className="card-btn two">Available</button>
            </div>
          </div>
          <div className="card-wrap">
            <div className="card-header three">
              <i className="fab fa-html5"></i>
            </div>
            <div className="card-content">
              <h1 className="card-title">Computer Networks</h1>
              <p className="card-text">
                A computer network is a collection of interconnected computers
                and devices that communicate and share resources.
              </p>
              <p> Author: Aditya.J</p>
              <button className="card-btn three">Renew Issue</button>
            </div>
          </div>
          <div className="card-wrap">
            <div className="card-header four">
              <i className="fab fa-js-square"></i>
            </div>
            <div className="card-content">
              <h1 className="card-title">Cybersecurity</h1>
              <p className="card-text">
                Protecting digital systems from unauthorized accesss, attacks,
                and damage.
              </p>
              <p> Author: Aditya.J</p>
              <button className="card-btn four">Issued</button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );

  // </div>
};
export default Library;
