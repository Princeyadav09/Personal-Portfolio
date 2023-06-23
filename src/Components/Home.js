import React from 'react'
import profile from '../image/home.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from '../image/hr.svg';

const Home = () => {
  return (
    <div id="home" className='row container mt-md-5 ' style={{zIndex:'1',position: 'relative',backgroundColor: '#0f0f0f'}}>
       <div className='row align-items-center  my-md-5 '>
                <div className='col-sm-6  my-md-5' >
                       <center><img style={{width:"80%"}} className=''  src={profile} alt="profile"  /></center>
                </div>
                <div className='col-sm-6  my-md-5'>
                    <h1 className="fs-4 text-white-50 mt-md-5">Hi, I'm</h1>
                    <h1 className="fs-3 fw-bold text-white my-0">Prince Kumar Yadav</h1>
                    <p class="fs-4 text-white my-0">Passionate Software Engineer</p>
                    <p className="fs-6 text-white-50 my-1">Enthusiastic and motivated self-learning in Information Technology. Interested in exploring about Software engineering, Data Structure and Algorithm, Core Subjects, and Web Development. Now I am looking for more experience in my field.</p>
                    {/* <a href='http://blog.dama.ink' className=''>Go to My Blog <FontAwesomeIcon className='mx-1' icon={faCircleArrowRight}/> </a> */}
                    <ul className='d-flex list-unstyled my-2'>
                        <li>
                            <a className="text-decoration-none text-light" href='https://github.com/princeyadav09' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                        </li> 
                        <li>
                            <a className="text-decoration-none text-light mx-3"  href='https://instagram.com/await__prince' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faInstagram} /></a>
                        </li>
                        <li>
                            <a className="text-decoration-none text-light" href='https://www.linkedin.com/in/prince-kumar-yadav-4a6805204/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                        </li>
                   </ul>
                </div>
       </div>
       <div className='row mt-md-5 ' >
         <center>  <img src={hr} style={{width:"80%"}} className='my-md-5'  alt="hr" />  </center> 
       </div>
    </div>
  )
}

export default Home
