import React from 'react'
import pic2 from '../../assets/home_page_2.webp'
import setting from '../../assets/New folder/setting.png'
import consultation from '../../assets/New folder/consultation.png'
import { BiUser } from 'react-icons/bi'
import worker from '../../assets/New folder/construction-worker.png'
import building from '../../assets/New folder/skyline.png'
import './home.css'


function AboutC() {
  return (
    <div>
      <div className=' bg-white mb:px-20 px-8 md:py-24 py-6 ' >
        <div className='grid grid-cols-1 md:grid-cols-2' > 
          
          <div className='relative w-full h-full' >
            <img src={pic2} alt='About' className='w-full h-full object-cover' />
            <div className=' absolute img-card flex items-center gap-5 bg-sec w-76  md:px-8 px-4 md:py-8 py-4 -rotate-90' >
                <BiUser className='first-color md:text-2xl text-sm ' />
                <div>
                    <span className='first-color md:text-2xl text-sm' >38</span>
                    <div className='truncate md:text-2xl text-sm ' >Years of experienced</div>
                </div>
            </div>
        </div>
          
      
       <div className='md:p-5 p-2 bg-gray-100' >
          <div className='first-color text-xl font-bold ' >
            Welcom to Buildream
          </div>
          <h2 className='text-5xl font-bold tracking-wide leading-normal mb-3 ' >
            Quality and <br/> 
            Affortable <br/>
            Constructor
          </h2>
          <p className='text-gray-500 leading-relaxed text-center md:text-left' >
            Far far away,behind the word mountains,far from the countries Vokalia and Cansonantia,there livs the blind texts.
            Separated they live in Bookmarksgrove right at the coast of semantic, a large language oceans.
          </p>
          <h2 className='text-2xl md:text-left text-center font-semibold mt-5 text-gray-700' >We Can Help You</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-8' >

            <div className=' bg-white card4 px-4 py-5 flex gap-3' >
            <div className='w-32' >            
              <img src={worker} alt='worker' />
              </div>

              <div>
                <h2 className='text-2xl mb-3 ' >
                  Construction
                </h2>
                <p className='text-gray-500 text-lg leading-relaxed' >
                Far far away, behind the word mountains.
                </p>
              </div>
            </div>

            <div className=' bg-white card4 px-4 py-5 flex gap-3 ' >
              <div className='w-32' >
              <img src={consultation} alt='consult' />
              </div>

              <div>
                <h2 className='text-2xl mb-3 '>
                  Consulting
                </h2>
                <p className='text-gray-500 text-lg leading-relaxed'>
                Far far away, behind the word mountains.
                </p>
              </div>
            </div>

            <div className=' bg-white card4 px-4 py-5 flex gap-3' >
            <div className='w-32' >
                <img src={building} alt='building' />
              </div>

              <div>
                <h2 className='text-2xl mb-3 '>
                  Mechanical
                </h2>
                <p  className='text-gray-500 text-lg leading-relaxed'>
                Far far away, behind the word mountains.
                </p>
              </div>
            </div>

            <div className=' bg-white card4 px-4 py-5 flex gap-3' >
            <div className='w-32' >
               <img src={setting} alt='setting' />
              </div>

              <div>
                <h2 className='text-2xl mb-3 '>
                  Architecture
                </h2>
                <p className='text-gray-500 text-lg leading-relaxed'>
                Far far away, behind the word mountains.
                </p>
              </div>
            </div>

          </div>
        </div>
       

        </div>
     </div>


             {/* Construction Section */}

    <div className='construction' >
      <div className='overlay' ></div>
      <div className='overlay-cover bg-first' ></div>
      <div className='flex justify-center md:flex-row flex-col md:gap-5 gap-2 z-10 absolute' >
        <div className='flex items-center justify-center flex-col md:w-1/2 w-full md:gap-3 gap-1 construction-content ' >
          <p className= 'text-white md:text-base text-sm font-bold uppercase md:tracking-wide md:text-left text-center ' >You May Contact Us For Construction & Renovation Work</p>
          <h3 className='mx-5 md:text-5xl text-3xl sec-color md:tracking-wider md:leading-relaxed md:text-left text-center' >We Are Great Construction Company</h3>
        </div>

        <div className=' flex items-center  justify-center mb-2' >
          <button className='px-10 py-6 uppercase text-sm font-bold bg-first sec-color mx-auto' >Make an appointment</button>
        </div>
      </div>

    </div>
    </div>
  )
}

export default AboutC
