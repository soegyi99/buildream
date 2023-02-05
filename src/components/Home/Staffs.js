import React from 'react'
import eng1 from '../../assets/engineer_1.webp'
import eng2 from '../../assets/engineer_2.webp'
import eng3 from '../../assets/engineer_3.webp'
import eng4 from '../../assets/engineer_4.webp'
import {FaTwitter,FaFacebookF,FaInstagram, FaGoogle} from 'react-icons/fa'

function Staffs() {
  return (
    <div>
      <div className='team py-20 bg-white ' >

<div className='mx-auto md:w-1/3 w-2/3 text-center' >
  <h3 className='first-color font-semibold text-lg mb-5' >Team & staffs</h3>
  <h1 className='text-5xl mx-auto font-semibold' >Qualified Engineers</h1> 
</div>

<div className='grid md:grid-cols-4 grid-cols-1 gap-5 mt-12 container mx-auto' >

  <div className=' staff-card' >
  <div className='relative' >
  <div  className='absolute bottom-6 left-5   w-16 flex flex-col gap-3 z-4 social-group' >
    <a href='/' className='bg-sec text-white rounded-full staff-social mx-auto p-3 block' >
      <FaTwitter />
    </a>
    <a href='/' className='bg-sec text-white rounded-full staff-social mx-auto p-3 block' >
      <FaFacebookF />
    </a>
    <a href='/' className='bg-sec text-white rounded-full staff-social mx-auto p-3 block' >
      <FaInstagram />
    </a>
    <a href='/' className='bg-sec text-white rounded-full staff-social mx-auto p-3 block' >
      <FaGoogle />
    </a>
  </div>
  <img  src={eng1} alt='eng1' />
  </div>
  
  <div className='flex flex-col text-center gap-3 items-center py-4 ' >
    <h2 className='text-xl font-semibold ' >
    Lionel Wurtchbach
    </h2>
    <p className='uppercase text-gray-400 font-semibold text-sm' >
      Senior Engineer
    </p>
  </div>
  </div>


  <div className=' staff-card' >
  <div className='relative' >
  <div  className='absolute bottom-6 left-5   w-16 flex flex-col gap-3 z-4 social-group' >
    <a href='/' className='bg-sec text-white rounded-full staff-social mx-auto p-3 block' >
      <FaTwitter />
    </a>
    <a href='/' className='bg-sec text-white rounded-full staff-social mx-auto p-3 block' >
      <FaFacebookF />
    </a>
    <a href='/' className='bg-sec text-white rounded-full staff-social mx-auto p-3 block' >
      <FaInstagram />
    </a>
    <a href='/' className='bg-sec text-white rounded-full staff-social mx-auto p-3 block' >
      <FaGoogle />
    </a>
  </div>
  <img  src={eng2} alt='eng1' />
  </div>
  

  <div className='flex flex-col text-center gap-3 items-center py-4 ' >
    <h2 className='text-xl font-semibold ' >
    Mike Nintido
    </h2>
    <p className='uppercase text-gray-400 font-semibold text-sm' >
      Senior Engineer
    </p>
  </div>
  </div>


  <div className=' staff-card' >
  <div className='relative' >
  <div  className='absolute bottom-6 left-5   w-16 flex flex-col gap-3 z-4 social-group' >
    <a href='/' className='bg-sec text-white rounded-full staff-social mx-auto p-3 block' >
      <FaTwitter />
    </a>
    <a href='/' className='bg-sec text-white rounded-full staff-social mx-auto p-3 block' >
      <FaFacebookF />
    </a>
    <a href='/' className='bg-sec text-white rounded-full staff-social mx-auto p-3 block' >
      <FaInstagram />
    </a>
    <a href='/' className='bg-sec text-white rounded-full staff-social mx-auto p-3 block' >
      <FaGoogle />
    </a>
  </div>
  <img  src={eng3} alt='eng1' />
  </div>
  

  <div className='flex flex-col text-center gap-3 items-center py-4 ' >
    <h2 className='text-xl font-semibold ' >
    Bea Alam
    </h2>
    <p className='uppercase text-gray-400 font-semibold text-sm' >
      Senior Engineer
    </p>
  </div>
  </div>


  <div className=' staff-card' >
  <div className='relative' >
  <div  className='absolute bottom-6 left-5   w-16 flex flex-col gap-3 z-4 social-group' >
    <a href='/' className='bg-sec text-white rounded-full staff-social mx-auto p-3 block' >
      <FaTwitter />
    </a>
    <a href='/' className='bg-sec text-white rounded-full staff-social mx-auto p-3 block' >
      <FaFacebookF />
    </a>
    <a href='/' className='bg-sec text-white rounded-full staff-social mx-auto p-3 block' >
      <FaInstagram />
    </a>
    <a href='/' className='bg-sec text-white rounded-full staff-social mx-auto p-3 block' >
      <FaGoogle />
    </a>
  </div>
  <img  src={eng4} alt='eng1' />
  </div>
  

  <div className='flex flex-col text-center gap-3 items-center py-4 ' >
    <h2 className='text-xl font-semibold ' >
    John Buffer
    </h2>
    <p className='uppercase text-gray-400 font-semibold text-sm' >
      Senior Engineer
    </p>
  </div>
  </div>
  

</div>


</div>   
    </div>
  )
}

export default Staffs
