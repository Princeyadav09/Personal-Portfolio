import React from 'react'
import hr from '../image/hr.svg';
import Skillcard from './Skillcard';
import react from '../image/Skills/react.svg';
import javascript from '../image/Skills/javascript.svg';
import html from '../image/Skills/html.svg';
import nodejs from '../image/Skills/nodejs.svg';
import express from '../image/Skills/express.svg';
import git from '../image/Skills/git.svg';
import python from '../image/Skills/python.svg';
import bootstrap from '../image/Skills/bootstrap.png'
import mongodb from '../image/Skills/mongodb.svg'
import sql from '../image/Skills/sql-server.png';
import mysql from '../image/Skills/mysql.png';
import cpp from '../image/Skills/c++.png'



const Skills = () => {
  return (
    <div id="skills" className='row container'>
      <div className="row conatiner ">
          <div className="col ">
            <h1 className='fw-bold text-white'>Skills</h1>
            <h4 className='text-white-50'>Here are some of my skills</h4>
          </div>
      </div>
      <div className="row conatiner  ">

      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              {/* <div class="carousel-indicators mt-5">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div> */}
              <div class="carousel-inner ps-5 pe-4">

                <div class="carousel-item active">
                  <div className="row conatiner  ">
                  <div className="row justify-content-evenly ">
                    <div className="col-md-3 ">
                            <Skillcard name="HTML" experience="1 years" icon={html} />
                      </div>
                      <div className="col-md-3 my-4 my-md-0">
                            <Skillcard name="Bootstrap" experience="1 years" icon={bootstrap}/>
                      </div>
                      <div className="col-md-3 ">
                            <Skillcard name="Javascript" experience="1 years" icon={javascript}/>
                      </div>
                    </div>
                    <div className="row mt-5 justify-content-evenly ">
                      <div className="col-md-3 ">
                            <Skillcard name="React" experience="1 years" icon={react}/>
                      </div>
                      <div className="col-md-3 my-4 my-md-0">
                            <Skillcard name="Nodejs" experience="1 years" icon={nodejs}/>
                      </div>
                      <div className="col-md-3 ">
                            <Skillcard name="Express" experience="1 years" icon={express}/>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="carousel-item">
                 <div className="row conatiner  ">
                 <div className="row justify-content-evenly ">
                    <div className="col-md-3 ">
                            <Skillcard name="Mongodb" experience="1 years" icon={mongodb}/>
                      </div>
                      <div className="col-md-3 my-4 my-md-0 ">
                            <Skillcard name="sql" experience="1 years" icon={sql}/>
                      </div>
                      <div className="col-md-3 ">
                            <Skillcard name="MySQL" experience="1 years" icon={mysql}/>
                      </div>
                    </div>
                    <div className="row mt-5 justify-content-evenly ">
                      <div className="col-md-3 ">
                            <Skillcard name="C++" experience="1 years" icon={cpp}/>
                      </div>
                      <div className="col-md-3 my-4 my-md-0">
                            <Skillcard name="Python" experience="1 years" icon={python}/>
                      </div>
                      <div className="col-md-3 ">
                            <Skillcard name="GitHub" experience="1 years" icon={git}/>
                      </div>
                    </div>
                 </div>
                </div>
                
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
      </div>






{/* 

          <div className="row justify-content-evenly ">
            <div className="col-md-3 ">
                  <Skillcard name="HTML" experience="1 years" icon={html} />
            </div>
            <div className="col-md-3 my-4 my-md-0">
                  <Skillcard name="Bootstrap" experience="1 years" icon={bootstrap}/>
            </div>
            <div className="col-md-3 ">
                  <Skillcard name="Javascript" experience="1 years" icon={javascript}/>
            </div>
          </div>
          <div className="row my-5 justify-content-evenly ">
            <div className="col-md-3 ">
                  <Skillcard name="React" experience="1 years" icon={react}/>
            </div>
            <div className="col-md-3 my-4 my-md-0">
                  <Skillcard name="Nodejs" experience="1 years" icon={nodejs}/>
            </div>
            <div className="col-md-3 ">
                  <Skillcard name="Express" experience="1 years" icon={express}/>
            </div>
          </div>
          <div className="row mb-5 justify-content-evenly ">
            <div className="col-md-3 ">
                  <Skillcard name="Mongodb" experience="1 years" icon={mongodb}/>
            </div>
            <div className="col-md-3 my-4 my-md-0 ">
                  <Skillcard name="sql" experience="1 years" icon={sql}/>
            </div>
            <div className="col-md-3 ">
                  <Skillcard name="MySQL" experience="1 years" icon={mysql}/>
            </div>
          </div>
          <div className="row justify-content-evenly ">
            <div className="col-md-3 ">
                  <Skillcard name="C++" experience="1 years" icon={cpp}/>
            </div>
            <div className="col-md-3 my-4 my-md-0">
                  <Skillcard name="Python" experience="1 years" icon={python}/>
            </div>
            <div className="col-md-3 ">
                  <Skillcard name="GitHub" experience="1 years" icon={git}/>
            </div>
          </div> */}
      </div>
      <div className="row conatiner ">
          <div className='col mt-md-5' >
            <center>  <img src={hr} style={{width:"80%"}}  alt="hr" />  </center> 
          </div>
      </div>
      
    </div>
   
  )
}

export default Skills
