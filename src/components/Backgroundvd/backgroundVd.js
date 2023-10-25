import React from 'react'
import bgv from '../Assets/bgv.mp4'

const BackgroundVd = () => {
  return (
    <div className='bgvideo'>
        <video src={bgv} autoPlay loop muted/>
        </div>
  )
}

export default BackgroundVd;