import React from 'react'

const Skillcard = (props) => {
  return (
    <div class="card bg-dark rounded-3" >
        <center><img src={props.icon} style={{width:"30%",height:"100px"}} className="mt-4 mb-3" alt="Not Found"/></center>
        <div class="card-body">
            <center><h5 className="card-title text-white">{props.name}</h5></center>
            <center><p className="card-text text-white">{props.experience} of experience </p></center>
        </div>
    </div>
  )
}

export default Skillcard
