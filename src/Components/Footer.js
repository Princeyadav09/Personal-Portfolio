import React from 'react'
import hr from '../image/hr.svg';

const Footer = () => {
  return (
    <div className='row container bg-dark rounded-3' >
        <div className="row ">
            <ul className="d-sm-flex  justify-content-center text-center list-unstyled mt-0 mb-0">
                <li><a href="#home" className="text-decoration-none text-light fw-lighter mx-2">About</a></li>
                <li><a href="#projects" className="text-decoration-none text-light fw-lighter mx-2">Projects</a></li>
                <li><a href="#achievements" className="text-decoration-none text-light fw-lighter mx-2">Achievements</a></li>
                <li><a href="#skills" className="text-decoration-none text-light fw-lighter mx-2">Skills</a></li>
                <li><a href="#profiles" className="text-decoration-none text-light fw-lighter mx-2">Coding Profiles</a></li>
           </ul>
        </div>
        <div className='row' >
         <center>  <img src={hr} style={{width:"25%"}}  alt="hr" />  </center> 
       </div>
       <p className="fs-6 fw-lighter text-light text-center mt-0 mb-0">Copyright © 2023 Damasukma Trihanandi. All Right Reserved</p>

    </div>
  )
}

export default Footer
