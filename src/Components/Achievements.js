import React from 'react'
import icpc from '../image/Achievements/icpc-logo.png'
import gate from '../image/Achievements/gate.png'
import hr from '../image/hr.svg'

const Achievements = () => {
  return (
    <div id="achievements" className='row m-auto '>
      <div className="row m-auto ">
          <div className="col ">
            <h1 className='fw-bold text-white'>Achievements</h1>
            <h4 className='text-white-50'>Here are some of my achievements</h4>
          </div>
      </div>
      <div className="row m-auto ">
          <div className="card mb-3 bg-dark " >
            <div className="row g-0 ">
              <div className="col-md-2 ">
                <img src={icpc} style={{width:"80%",height:"100%"}} className="img-fluid rounded-start" alt="Not Found"/>
              </div>
              <div className="col-md-8 ">
                <div className="card-body ">
                  <h5 className="card-title text-white">ICPC'22 Regionalist</h5>
                  <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="row m-auto ">
          <div className="card mb-3 bg-dark " >
            <div className="row g-0 ">
              <div className="col-md-2">
                <img src={gate} style={{width:"80%",height:"150px"}} className="img-fluid rounded-start" alt="Not Found"/>
              </div>
              <div className="col-md-8 ">
                <div className="card-body ">
                  <h5 className="card-title text-white">Gate'23 Qualified</h5>
                  <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className='row mt-md-5' >
         <center>  <img src={hr} style={{width:"80%"}}  alt="hr" />  </center> 
       </div>
    </div>
  )
}

export default Achievements
