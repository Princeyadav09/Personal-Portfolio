import React from 'react'
import hr from '../image/hr.svg'
import newsapp from '../image/Projects/Newsapp.png';
import inotebook from '../image/Projects/inotebook.png';
import eshop from '../image/Projects/E-shop.png';

const Projects = () => {
    return (
        <div id="projects" className='row container '>
            <div className="row">
                <div className="col">
                    <h1 className='fw-bold text-white'>Projects</h1>
                    <h4 className='text-white-50'>Here are some of my Projects</h4>
                </div>
            </div>
            <div className="row container ">
                <div className="row">
                    <div class="card mb-3 bg-dark" >
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={eshop} class="img-fluid my-3" alt="Not Found" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title text-light">E-Shop</h5>
                                    <p class="card-text text-light">Completed a MERN stack multi-vendor e-commerce website, and I must say that it exceeded all my expectations. This project provided me with a deep understanding of building a robust and scalable e-commerce platform from scratch, using the popular MERN (MongoDB, Express.js, Reactjs, and Node.js) stack , Socket.io and redux toolkit.</p>
                                    <a  rel="noreferrer" href="https://e-commerce-shop-d8nq.onrender.com" target="_blank" className="btn btn-success rounded-pill border border-3 mx-1 px-3" role="button" > Live</a>
                                    <a  rel="noreferrer" href="https://github.com/Princeyadav09/E-Commerce-Shop" target="_blank" className="btn btn-success rounded-pill border border-3 mx-1 px-3" role="button" >Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div class="card mb-3 bg-dark" >
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={inotebook} class="img-fluid my-3" alt="Not Found" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title text-light">InoteBook</h5>
                                    <p class="card-text text-light">INotebook is a React Application for managing personal notes on the cloud. it supports login and sighnup for saftey of personal notes. Specific user can only access their own notes, it supports updation and deletion on the note items. Create your account and get started It's totally safe because you must be Logged In for accessing your notes.</p>
                                    <a  rel="noreferrer" href="https://inotebook-wxpy.onrender.com" target="_blank" className="btn btn-success rounded-pill border border-3 mx-1 px-3" role="button" > Live</a>
                                    <a  rel="noreferrer" href="https://github.com/Princeyadav09/inotebook" target="_blank" className="btn btn-success rounded-pill border border-3 mx-1 px-3" role="button" >Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div class="card mb-3 bg-dark" >
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={newsapp} class="img-fluid my-3" alt="Not Found" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title text-light">NewsApp</h5>
                                    <p class="card-text text-light">This is a simple news website that uses newsapi to fetch latest news to user on different category like Health, Entertainment, General, Bussiness, Science, Sports, Technology . With infinite scroll and loading bar it have read more button to read description of news. This is a test project build as part of learning react.</p>
                                    {/* <a  rel="noreferrer" href="" target="_blank" className="btn btn-success rounded-pill border border-3 mx-1 px-3" role="button" >Demo</a> */}
                                    <a  rel="noreferrer" href="https://github.com/Princeyadav09/BalliaKhabar" target="_blank" className="btn btn-success rounded-pill border border-3 mx-1 px-3" role="button" >Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-md-5' >
                <center>  <img src={hr} style={{ width: "80%" }} alt="hr" />  </center>
            </div>
        </div>
    )
}

export default Projects
