import React from 'react'
import icon from '../image/icon.svg'
import resume from "../image/personal/PrinceResume.pdf"

const Navbar = () => {

  return (
    <div className='header row container sticky-top   mb-5'  >
        <div className="row order-md-1 align-items-center justify-content-between mb-md-5 " style={{zIndex:'2',backgroundColor: '#0f0f0f'}}>
            <div className='col-2 '>
                <center><img style={{height:"50px"}} src={icon} className="rounded-circle" alt="logo" /></center>
            </div>
            <div className='col-2 order-md-3'>
                <center><a  rel="noreferrer" href={resume} target="_blank" className="btn btn-success rounded-pill border border-3 my-4" role="button" >Resume</a></center>
            </div>
            <div className='container col-md-8 order-md-2 '>
                <div className='row justify-content-between '>
                    <div className='col-sm-2'>
                        <center><a href="#home" className="text-decoration-none text-light">About</a></center>
                    </div>
                    <div className='col-sm-2'>
                        <center><a href="#projects" className="text-decoration-none text-light">Projects</a></center>
                    </div>
                    <div className='col-sm-2'>
                        <center><a href="#achievements" className="text-decoration-none text-light">Achievements</a></center>
                    </div>
                    <div className='col-sm-2'>
                        <center><a href="#skills" className="text-decoration-none text-light">Skills</a></center>
                    </div>
                    <div className='col-sm-2'>
                        <center><a href="#coding" className="text-decoration-none text-light">Coding Profiles</a></center>
                    </div>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Navbar
