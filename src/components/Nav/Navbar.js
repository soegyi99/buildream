import React,{useState} from 'react'
import './nav.css'
import {BiMenu} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [showMenu,setShowMenu] = useState(false)
  const activeClass = 'sec-color md:px-6 px-48 py-5 block uppercase nav-link bg-first w-full md:w-auto '

  return (
    <div className='bg-gray-800 text-white overflow-hidden' >
     <div className=' flex justify-between items-center' >
     <div className='uppercase text-gray-700 text-2xl p-4 logo z-10' >
        <h1>
          Buildream
        </h1>
      </div>
      <button onClick={() => setShowMenu(!showMenu)} className='text-xl mx-3 pr-3  md:hidden' >
        <BiMenu />
      </button>
      <div className={` ${showMenu ? '' : 'hidden md:block'} z-20 fixed md:static bg-gray-800 w-full md:top-0 top-[152px] md:w-auto`} >
        <ul className='flex items-center w-100 justify-center flex-col md:flex-row lg:gap-6 md:pr-3 ' >
          <li className='md:w-auto  ' >
            <NavLink to={'/'} onClick={() => setShowMenu(!showMenu)} className={({isActive}) => isActive ? activeClass : 'px-3 py-5 block uppercase text-gray-200' } >Home</NavLink>
          </li>

          <li>
            <NavLink to={'/about'} onClick={() => setShowMenu(!showMenu)}  className={({isActive}) => isActive ? activeClass : 'px-3 py-5 block uppercase text-gray-200' } >About</NavLink>
          </li>

          <li>
            <NavLink to={'/services'} onClick={() => setShowMenu(!showMenu)}  className={({isActive}) => isActive ? activeClass : 'px-3 py-5 block uppercase text-gray-200' } >Services</NavLink>
          </li>

          <li>
            <NavLink to={'/project'} onClick={() => setShowMenu(!showMenu)}  className={({isActive}) => isActive ? activeClass : 'px-3 py-5 block uppercase text-gray-200' } >Projects</NavLink>
          </li>
         
          <li>
            <NavLink to={'/blog'} onClick={() => setShowMenu(!showMenu)}  className={({isActive}) => isActive ? activeClass : 'px-3 py-5 block uppercase text-gray-200' } >Blog</NavLink>
          </li>

         
        </ul>
      </div>
     </div>
    </div>
  )
}

export default Navbar
