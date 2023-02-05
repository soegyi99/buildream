import React from 'react'
import prj1 from '../../assets/project_1.webp'
import prj2 from '../../assets/project_2.webp'
import prj3 from '../../assets/project_3.webp'
import prj4 from '../../assets/project_4.webp'
import prj5 from '../../assets/project_5.webp'
import prj6 from '../../assets/project_6.webp'
import { FaSearch} from 'react-icons/fa'

function Projects() {
  return (
    <div className='bg-white py-10' >

    <div className='mx-auto md:w-1/3 w-2/3 text-center py-8' >
      <h3 className='first-color font-semibold text-lg mb-5' >Portfolio</h3>
      <h1 className='text-5xl mx-auto font-semibold' >Projects</h1> 
    </div>

    <div className=' mt-8  grid md:grid-cols-3 grid-cols-1 ' >

      <div className='relative prj-card ' >
        <div className='overlay prj-overlay ' ></div>
        <div className='absolute  p-3 top-0 right-0 text-white bg-first z-10 prj-overlay ' >
          <FaSearch />
        </div>
        <div className=' absolute z-10 text-white bottom-5 left-5   prj-overlay ' >
          <h2 className='uppercase font-semibold text-lg' >building</h2>
          <h1 className='text-4xl ' >High Tower Works</h1>
        </div>
        <img src={prj1} className=' object-cover h-full w-full' alt='prj' />
      </div>

      <div className='relative prj-card ' >
        <div className='overlay prj-overlay ' ></div>
        <div className='absolute  p-3 top-0 right-0 text-white bg-first z-10 prj-overlay ' >
          <FaSearch />
        </div>
        <div className=' absolute z-10 text-white bottom-5 left-5   prj-overlay ' >
          <h2 className='uppercase font-semibold text-lg' >building</h2>
          <h1 className='text-4xl ' >High Tower Works</h1>
        </div>
        <img src={prj2} alt='prj' />
      </div>

      <div className='relative prj-card ' >
        <div className='overlay prj-overlay ' ></div>
        <div className='absolute  p-3 top-0 right-0 text-white bg-first z-10 prj-overlay ' >
          <FaSearch />
        </div>
        <div className=' absolute z-10 text-white bottom-5 left-5   prj-overlay ' >
          <h2 className='uppercase font-semibold text-lg' >building</h2>
          <h1 className='text-4xl ' >High Tower Works</h1>
        </div>
        <img src={prj3} alt='prj' />
      </div>

      <div className='relative prj-card ' >
        <div className='overlay prj-overlay ' ></div>
        <div className='absolute  p-3 top-0 right-0 text-white bg-first z-10 prj-overlay ' >
          <FaSearch />
        </div>
        <div className=' absolute z-10 text-white bottom-5 left-5   prj-overlay ' >
          <h2 className='uppercase font-semibold text-lg' >building</h2>
          <h1 className='text-4xl ' >High Tower Works</h1>
        </div>
        <img src={prj4} alt='prj' />
      </div>

      <div className='relative prj-card ' >
        <div className='overlay prj-overlay ' ></div>
        <div className='absolute  p-3 top-0 right-0 text-white bg-first z-10 prj-overlay ' >
          <FaSearch />
        </div>
        <div className=' absolute z-10 text-white bottom-5 left-5   prj-overlay ' >
          <h2 className='uppercase font-semibold text-lg' >building</h2>
          <h1 className='text-4xl ' >High Tower Works</h1>
        </div>
        <img src={prj5} alt='prj' />
      </div>

      <div className='relative prj-card ' >
        <div className='overlay prj-overlay ' ></div>
        <div className='absolute  p-3 top-0 right-0 text-white bg-first z-10 prj-overlay ' >
          <FaSearch />
        </div>
        <div className=' absolute z-10 text-white bottom-5 left-5   prj-overlay ' >
          <h2 className='uppercase font-semibold text-lg' >building</h2>
          <h1 className='text-4xl ' >High Tower Works</h1>
        </div>
        <img src={prj6} alt='prj' />
      </div>
  
    </div>


    </div>
  )
}

export default Projects
