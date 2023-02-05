import React from 'react'
import blog1 from '../../assets/blog_1.webp'
import blog2 from '../../assets/blog_2.webp'
import blog3 from '../../assets/blog_3.webp'
import {  FaUser, FaComment} from 'react-icons/fa'

function Blogs() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 ' >

      <div className='flex flex-col shadow-lg ' >
        <div className='relative' >
          <img src={blog1} alt='blog'  />
          <div className='absolute flex flex-col text-white bg-gray-700 p-4 bottom-0 left-6' >
            <h2 className='text-2xl' >16</h2>
            <h3 className='text-sm' >JAN</h3>
          </div>
        </div>

        <div className='flex flex-col p-5' >

        <div className='flex gap-4 mb-5' >
          <div className='flex items-center uppercase text-gray-600 text-xs font-bold gap-2' >
            <FaUser className='first-color' />
            Admin
          </div>
          <div className='flex items-center uppercase first-color text-sm font-bold gap-2' >
            <FaComment />
            3 Comments
          </div>
        </div>

        <div className='flex flex-col  gap-4' >
          <a href='/' className=' text-3xl hover:text-amber-500 ' >
            Biggest Construction in New York, USA
          </a>
          <p className='text-gray-500 text-lg pb-5' >
          A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
        </div>
      </div>


      </div>

      <div className='flex flex-col shadow-lg ' >
        <div className='relative' >
          <img src={blog2} alt='blog'  />
          <div className='absolute flex flex-col text-white bg-gray-700 p-4 bottom-0 left-6' >
            <h2 className='text-2xl' >16</h2>
            <h3 className='text-sm' >JAN</h3>
          </div>
        </div>

        <div className='flex flex-col p-5' >

        <div className='flex gap-4 mb-5' >
          <div className='flex items-center uppercase text-gray-600 text-xs font-bold gap-2' >
            <FaUser className='first-color' />
            Admin
          </div>
          <div className='flex items-center uppercase first-color text-sm font-bold gap-2' >
            <FaComment />
            3 Comments
          </div>
        </div>

        <div className='flex flex-col  gap-4' >
          <a href='/' className=' text-3xl hover:text-amber-500 ' >
            Biggest Construction in New York, USA
          </a>
          <p className='text-gray-500 text-lg pb-5' >
          A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
        </div>
      </div>


      </div>

      <div className='flex flex-col shadow-lg ' >
        <div className='relative' >
          <img src={blog3} alt='blog'  />
          <div className='absolute flex flex-col text-white bg-gray-700 p-4 bottom-0 left-6' >
            <h2 className='text-2xl' >16</h2>
            <h3 className='text-sm' >JAN</h3>
          </div>
        </div>

        <div className='flex flex-col p-5' >

        <div className='flex gap-4 mb-5' >
          <div className='flex items-center uppercase text-gray-600 text-xs font-bold gap-2' >
            <FaUser className='first-color' />
            Admin
          </div>
          <div className='flex items-center uppercase first-color text-sm font-bold gap-2' >
            <FaComment />
            3 Comments
          </div>
        </div>

        <div className='flex flex-col  gap-4' >
          <a href='/' className=' text-3xl hover:text-amber-500 ' >
            Biggest Construction in New York, USA
          </a>
          <p className='text-gray-500 text-lg pb-5' >
          A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
        </div>
      </div>


      </div>

     
    </div>
  )
}

export default Blogs
