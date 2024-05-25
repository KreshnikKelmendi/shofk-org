import React from 'react'
import poster from "../img/Shofk_Poster.png"

const Banner = () => {
  return (
    <div className='w-full lg:h-[100vh]'>
        <img className='w-full lg:h-[100%]' alt='' src={poster} />
    </div>
  )
}

export default Banner