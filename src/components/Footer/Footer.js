import React from 'react'
import './footer.css'
import blog1 from '../../assets/blog_1.webp'
import blog2 from '../../assets/blog_2.webp'
import blog3 from '../../assets/blog_3.webp'
import { FaTelegram, FaPhone, FaAddressCard,FaUser,FaComment,FaTwitter,FaFacebookF,FaInstagram,FaArrowRight } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer bg-sec flex md:items-center  justify-center ' >

    <div className='flex footer-contents justify-center items-start  md:flex-row flex-col gap-10 py-10 ' >

      <div className='px-3 column-1 md:w-1/4' >
        <h2 className='text-white text-3xl hover:text-amber-600  uppercase font-bold mb-10 ' >Buildream</h2>
        <p className='text-gray-400 text-lg font-semibold' >
          A small river named Duden flows by their place and
           supplies it with the necessary regelialia.
        </p>

        <div className='my-4' >
          <ul className='list-none flex' >
              <li  className=''>
                  <a className=' block mx-2 p-3 first-color bg-gray-700' href='/' >
                      <FaTwitter />
                  </a>
              </li>

              <li  className=''>
                  <a className=' block mx-2 p-3 first-color bg-gray-700' href='/' >
                    <FaFacebookF />
                  </a>
              </li>

              <li  className=''>
                  <a className=' block mx-2 p-3 first-color bg-gray-700' href='/' >
                      <FaInstagram />
                  </a>
              </li>
          </ul>
        </div>

      </div>

      <div className='col-2 px-3 md:w-1/4' >
        <h3 className='text-2xl mb-10' >Servies</h3>

        <div className='flex flex-col gap-5' >


          <div className='flex items-center gap-6' >
            <img src={blog1} alt='service' className=' w-20 h-20' />

            <div>
              <a className='hover:text-amber-600 text-lg mb-4 block' href='/' >Biggest Construction in New York, USA</a>
              
              <div className='flex gap-4 mb-5' >
                <div className='flex items-center  text-gray-600 text-xs font-bold gap-2' >
                  <FaUser className='first-color' />
                  Admin
                </div>
                <div className='flex items-center first-color text-xs font-bold gap-2' >
                  <FaComment />
                  19
                </div>
              
              </div>
            </div>
          </div>

          <div className='flex items-center gap-6' >
            <img src={blog2} alt='service' className=' w-20 h-20' />

            <div>
              <a className='hover:text-amber-600 text-lg mb-4 block' href='/' >Biggest Construction in New York, USA</a>
              
              <div className='flex gap-4 mb-5' >
                <div className='flex items-center  text-gray-600 text-xs font-bold gap-2' >
                  <FaUser className='first-color' />
                  Admin
                </div>
                <div className='flex items-center first-color text-xs font-bold gap-2' >
                  <FaComment />
                  19
                </div>
              
              </div>
            </div>
          </div>

          <div className='flex items-center gap-6' >
            <img src={blog3} alt='service' className=' w-20 h-20' />

            <div>
              <a className='hover:text-amber-600 text-lg mb-4 block' href='/' >Biggest Construction in New York, USA</a>
              
              <div className='flex gap-4 mb-5' >
                <div className='flex items-center  text-gray-600 text-xs font-bold gap-2' >
                  <FaUser className='first-color' />
                  Admin
                </div>
                <div className='flex items-center first-color text-xs font-bold gap-2' >
                  <FaComment />
                  19
                </div>
              
              </div>
            </div>
          </div>




        </div>

      </div>

     <div className='col-3 px-3' >

     <h2 className='text-white text-xl text-left font-semibold mb-10 ' >Quick Links</h2>

     <div className='flex flex-col gap-4' >

        <a href='/' className='flex hover:text-amber-600 text-lg font-semibold items-center gap-3' >
          <FaArrowRight />
          Home
        </a>

        <a href='/about' className='flex hover:text-amber-600 text-lg font-semibold items-center gap-3' >
          <FaArrowRight />
          About
        </a>

        <a href='/services' className='flex hover:text-amber-600 text-lg font-semibold items-center gap-3' >
          <FaArrowRight />
          Services
        </a>

        <a href='/project' className='flex hover:text-amber-600 text-lg font-semibold items-center gap-3' >
          <FaArrowRight />
          Project
        </a>

      </div>
     </div>

     <div className='column-4 px-3 md:w-1/4' >

     <h2 className='text-white text-xl text-left font-semibold mb-10 ' >Have a question?</h2>

     <div className='flex flex-col gap-5 ' >
      <div className='flex items-center gap-4' >
        <FaAddressCard className='text-4xl first-color' />
        <p className='text-lg' >203 Fake St. Mountain View, San Francisco, California, USA</p>
      </div>

      <div className='flex items-center gap-4' >
        <FaPhone className='text-2xl first-color' />
        <p className='text-lg' >+959750456545</p>
      </div>

      <div className='flex items-center gap-4' >
        <FaTelegram className='text-2xl first-color' />
        <p className='text-lg' >sss@buildream.com</p>
      </div>

     </div>

     </div>

    </div>

  </div>                    

  )
}

export default Footer
