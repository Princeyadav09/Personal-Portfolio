import React from 'react'

const ProfileCard = (props) => {
  return (
    <div class="card bg-dark rounded-3" >
        <center><a className="text-decoration-none text-light" href={props.link} rel="noreferrer" target="_blank"><img src={props.icon} style={{width:"30%",height:"100px"}} className="mt-4 mb-3" alt="Not Found"/></a></center>
        <div class="card-body" >
            <center><h5 className="card-title text-white">{props.name}</h5></center>
            <center><p className="card-text text-white" >{props.description}</p></center>
        </div>
   </div>
  )
}

export default ProfileCard
