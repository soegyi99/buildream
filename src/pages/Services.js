import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import building from '../assets/New folder/skyline.png'
import worker from '../assets/New folder/construction-worker.png'
import infra from '../assets/New folder/infrastructure.png'
import { Helmet } from 'react-helmet-async'

function Services() {
  return (
    <div className='about mb-20' >
      <Helmet>
        <title>Buildream|Services</title>
      </Helmet>
      
      <div className='about-head flex flex-col w-100 justify-center items-center relative' >
      <div className='overlayabout' ></div>
      <div  className='absolute z-10 text-white '>
      <div className=' uppercase text-center font-semibold flex items-center px-16' >
        <Link to={'/'}className='flex items-center mr-3 hover:text-amber-500' > Home <FaArrowRight /> </Link>
        Services<FaArrowRight />
      </div>
      <h1 className='text-6xl font-semibold uppercase mt-6 tracking-wider' >Services</h1>
      </div>
      </div>

      <div className=' bg-white md:px-10 md:py-20 px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-5' >

      <div className='flex  p-10 service-card3 ' >
          <div className=' w-44 px-3 py-2' >
            <img  src={building} alt='building' />
          </div>

          <div>
            <h3 className='text-3xl font-semibold mb-3' >Construction Services</h3>
            <p className='leading-relaxed font-semibold' >
              Far far away, behind the word mountains, 
              far from the countries Vokalia and Consonantia, there live the blind.
            </p>
            <button className='bg-white p-2 font-sm mt-4 font-bold uppercase first-color' >Learn more</button>
          </div>
        </div>


        <div className='flex  p-10 service-card3 ' >
          <div className=' w-44 px-3 py-2' >
            <img  src={worker} alt='building' />
          </div>

          <div>
            <h3 className='text-3xl font-semibold mb-3' >Architecture Services</h3>
            <p className='leading-relaxed font-semibold' >
              Far far away, behind the word mountains, 
              far from the countries Vokalia and Consonantia, there live the blind.
            </p>
            <button className='bg-white p-2 font-sm mt-4 font-bold uppercase first-color' >Learn more</button>
          </div>
        </div>


        <div className='flex  p-10 service-card3 ' >
          <div className=' w-44 px-3 py-2' >
            <img  src={infra} alt='building' />
          </div>

          <div>
            <h3 className='text-3xl font-semibold mb-3' >Infrastructure Services</h3>
            <p className='leading-relaxed font-semibold' >
              Far far away, behind the word mountains, 
              far from the countries Vokalia and Consonantia, there live the blind.
            </p>
            <button className='bg-white p-2 font-sm mt-4 font-bold uppercase first-color' >Learn more</button>
          </div>
        </div>


        <div className='flex  p-10 service-card3 ' >
          <div className=' w-44 px-3 py-2' >
            <img  src={building} alt='building' />
          </div>

          <div>
            <h3 className='text-3xl font-semibold mb-3' >Construction Services</h3>
            <p className='leading-relaxed font-semibold' >
              Far far away, behind the word mountains, 
              far from the countries Vokalia and Consonantia, there live the blind.
            </p>
            <button className='bg-white p-2 font-sm mt-4 font-bold uppercase first-color' >Learn more</button>
          </div>
        </div>


        <div className='flex  p-10 service-card3 ' >
          <div className=' w-44 px-3 py-2' >
            <img  src={worker} alt='building' />
          </div>

          <div>
            <h3 className='text-3xl font-semibold mb-3' >Architecture Services</h3>
            <p className='leading-relaxed font-semibold' >
              Far far away, behind the word mountains, 
              far from the countries Vokalia and Consonantia, there live the blind.
            </p>
            <button className='bg-white p-2 font-sm mt-4 font-bold uppercase first-color' >Learn more</button>
          </div>
        </div>


        <div className='flex  p-10 service-card3 ' >
          <div className=' w-44 px-3 py-2' >
            <img  src={infra} alt='building' />
          </div>

          <div>
            <h3 className='text-3xl font-semibold mb-3' >Infrastructure Services</h3>
            <p className='leading-relaxed font-semibold' >
              Far far away, behind the word mountains, 
              far from the countries Vokalia and Consonantia, there live the blind.
            </p>
            <button className='bg-white p-2 font-sm mt-4 font-bold uppercase first-color' >Learn more</button>
          </div>
        </div>


      </div>
     
    </div>
  )
}

export default Services
