import React from 'react'
import hr from '../image/hr.svg';
import ProfileCard from './ProfileCard';
import leetcode from '../image/profiles/leetcode.svg';
import codeforces from'../image/profiles/code-forces.svg'
import codechef from '../image/profiles/codechef.svg'
import gfg from '../image/profiles/gfg.svg'

const CodingProfiles = () => {
  return (
    <div id="coding" className='row m-auto'>
      <div className="row m-auto ">
          <div className="col ">
            <h1 className='fw-bold text-white'>Coding Profiles</h1>
            <h4 className='text-white-50'>Here are some of my coding profiles</h4>
          </div>
      </div>
      <div className="row m-auto">
            <div className="col-md-6 col-lg-3 my-2 my-lg-0">
                <ProfileCard icon={leetcode} name="leetcode" link="https://leetcode.com/Princeyadav09/" description="With 1713 rating top 10% coders on leetcode"/>
            </div>
            <div className="col-md-6 col-lg-3 my-2 my-lg-0">
                <ProfileCard icon={codeforces} name="Codeforces" link="https://codeforces.com/profile/princeyadav09" description="With 1375 max rating (Pupil) on codeforces"/>
            </div>
            <div className="col-md-6 col-lg-3 my-2 my-lg-0">
                <ProfileCard icon={codechef} name="Codechef" link="https://www.codechef.com/users/princeyadav09" description="With 1667 max rating (3 star) on codechef"/>
            </div>
            <div className="col-md-6 col-lg-3 my-2 my-lg-0">
                <ProfileCard icon={gfg} name="Geeksforgeeks" link="https://auth.geeksforgeeks.org/user/princeyadav09" description="Overall 839 coding score with institute rank 6"/>
            </div>
      </div>
      <div className='row mt-md-5' >
         <center>  <img src={hr} style={{width:"80%"}}  alt="hr" />  </center> 
       </div>
    </div>
  )
}

export default CodingProfiles
