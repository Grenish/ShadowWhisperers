import React from 'react'
import { horrorRoom1 } from '../assets'

const EntryPoint = () => {
  return (
    <div className='relative'>
      <img src={horrorRoom1} alt=""  className='h-screen w-full object-cover'/>
      <div className="absolute top-[50%] left-[50%]">
        <h1 className="text-4xl text-white">Welcome to the Horror Room</h1>
      </div>
    </div>
  )
}

export default EntryPoint
