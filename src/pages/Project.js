import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import '../components/css/about.css'
import Projects from '../components/Home/Projects'
import { Helmet } from 'react-helmet-async'

function Project() {
  return (
    <div className='about mb-20'> 
    <Helmet>
        <title>Buildream|projects</title>
      </Helmet>

       <div className='about-head flex flex-col w-100 justify-center items-center relative' >
      <div className='overlayabout' ></div>
      <div  className='absolute z-10 text-white '>
      <div className=' uppercase text-center font-semibold flex items-center px-16' >
        <Link to={'/'}className='flex items-center mr-3 hover:text-amber-500' > Home <FaArrowRight /> </Link>
        About Us <FaArrowRight />
      </div>
      <h1 className='text-6xl font-semibold uppercase mt-6 tracking-wider' >projects</h1>
      </div>
      </div>

      <Projects />

    </div>
  )
}

export default Project
