import React from 'react'
import { BiArrowToRight } from 'react-icons/bi'
import './home.css'


function Hero() {
  return (
    <div className='home' >
    <div className='overlay' ></div>
    <div className='border' ></div>
       
       <div className='text-white heading mx-auto flex flex-col items-center justify-center gap-5 z-10' >
           
           
           <h3 className='md:text-2xl text-md font-bold' >SINCE 1982</h3>
           <h1 className='md:text-6xl text-3xl text-center font-bold tracking-widest' >WE  WILL BE <span className='first-color'>HAPPY</span> 
           <br/>TO TAKE CARE OF YOUR WORK</h1>

           <div className='flex' >
               <button style={{color:'rgb(54,59,56)'}} className=' truncate md:font-semibold md:text-base text-sm md:px-5 px-2 mx-1 md:py-3 py-1 gap-1 flex items-center bg-first rounded text-gray ' >Contact Us<BiArrowToRight/></button>
               <button className='truncate md:font-semibold md:text-base md:px-5 px-2 mx-1 gap-1 flex items-center bg-sec py-3 rounded ' >Request a quote <BiArrowToRight/></button>
           </div>
           
           
       </div>
       

        
    </div>
  )
}

export default Hero


