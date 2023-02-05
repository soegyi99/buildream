import React from 'react'
import {FaTwitter,FaFacebookF,FaInstagram} from 'react-icons/fa'

function Header() {
  return (
    <div className='flex w-100 bg-sec px-3 mx-auto py-2 md:gap-x-2 items-center ' >

    <div className='container flex md:mx-auto' >
    <div className='flex-1' >
    <div className=' w-100 flex justify-between md:flex-row flex-col' >

      <div >
        <span className='first-color font-semibold' >Free Call:</span>
        <span>+959474647483</span>
      </div>

      <div>
        <span className='first-color font-semibold' >Email Address:</span>
        <span>example@gmail.com</span>
      </div>

    </div>

    </div>
      <div>
        <ul className='list-none flex items-center' >
            <li  className=''>
                <a className=' block mx-2 p-2 first-color bg-gray-700' href='/' >
                    <FaTwitter />
                </a>
            </li>

            <li  className=''>
                <a className=' block mx-2 p-2 first-color bg-gray-700' href='/' >
                   <FaFacebookF />
                </a>
            </li>

            <li  className=''>
                <a className=' block mx-2 p-2 first-color bg-gray-700' href='/' >
                    <FaInstagram />
                </a>
            </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Header
