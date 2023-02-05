import React from 'react'
import Hero from './Hero'
import About from './About'
import './home.css' 
import worker from '../../assets/New folder/construction-worker.png'
import building from '../../assets/New folder/skyline.png'
import infra from '../../assets/New folder/infrastructure.png'


import cl1 from '../../assets/New folder/batman.jpg'
import cl2 from '../../assets/New folder/supe.jpg'
import cl3 from '../../assets/New folder/ms lane.jpg'
import cl4 from '../../assets/New folder/ironman.jpg'
import cl5 from '../../assets/New folder/spider.jpg'
import cl6 from '../../assets/New folder/flash.jpg'


import { FaQuoteLeft} from 'react-icons/fa'
import Staffs from './Staffs'
import Projects from './Projects'
import Blogs from './Blog'
import { Helmet } from 'react-helmet-async'






function Home() {
  return (
    <div>
                  <Helmet>
                    <title>Buildream|home</title>
                  </Helmet>
                  
                    
                    <Hero />
                    <About />


                                {/* Service Section */}

                  <div className=' bg-white py-20'>
                    <div className=' w-52 mx-auto text-center m-5' >
                      <h4 className='first-color font-bold' >What We Do</h4>
                      <h1 className='text-6xl font-semibold'>Services</h1>
                    </div>

                    <div className='grid gap-6 md:grid-cols-2 grid-cols-1 md:px-20 py-16 px-5' >
                    <div className='relative' >
                      <img src='https://preview.colorlib.com/theme/buildream/images/services.jpg' alt='service' className='w-full h-full object-cover  md:block hidden' />
                    </div>

                    <div className='flex flex-col gap-6 ' >

                      <div className='flex bg-sec p-10  ' >
                        <div className=' w-44 px-3 py-2' >
                          <img src={building} alt='building' />
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

                      <div className='flex bg-first text-white p-10  ' >
                        <div className=' w-44 px-3 py-2' >
                          <img src={infra} alt='building' />
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
                          <h3 className='text-3xl font-semibold mb-3' >Construction Services</h3>
                          <p className='leading-relaxed font-semibold' >
                            Far far away, behind the word mountains, 
                            far from the countries Vokalia and Consonantia, there live the blind.
                          </p>
                          <button className='bg-white p-2 font-sm mt-4 font-bold uppercase first-color' >Learn more</button>
                        </div>
                      </div>

                    

                    </div>

                    </div>
                  </div>


                                  {/* Counter Section  */}
                  
                  <div className='counter relative' >
                    <div className='overlay' ></div>

                    <div className=' counter-content z-10 absolute w-full  ' >

                    <div  className='grid md:grid-cols-4 gap-6 grid-cols-1 md:mx-20 '>

                    <div className='flex items-center mb-4' >
                    <div className='counter-pic' >
                        <img src={worker} alt='worker' />
                      </div>
                      <div>
                        <h2 className='first-color text-5xl font-bold ' >3,000</h2>
                        <h2 className='truncate uppercase text-lg font-semibold text-white' >complete projects</h2>
                      </div>
                    </div>

                    <div className='flex items-center mb-4' >
                    <div className='counter-pic' >
                        <img src={worker} alt='worker' />
                      </div>
                      <div>
                        <h2 className='first-color text-5xl font-bold mb-3' >320</h2>
                        <h2 className='truncate uppercase text-lg font-semibold text-white' >happy clients</h2>
                      </div>
                    </div>

                    <div className='flex items-center mb-4' >
                    <div className='counter-pic' >
                        <img src={worker} alt='worker' />
                      </div>
                      <div>
                        <h2 className='first-color text-5xl font-bold mb-3' >1,000</h2>
                        <h2 className='truncate uppercase text-lg font-semibold text-white' >cup of coffee</h2>
                      </div>
                    </div>

                    <div className='flex items-center mb-4' >
                    <div className='counter-pic' >
                        <img src={worker} alt='worker' />
                      </div>
                      <div>
                        <h2 className='first-color text-5xl font-bold mb-3' >587</h2>
                        <h2 className='truncate uppercase text-lg font-semibold text-white' >engineers and staffs</h2>
                      </div>
                    </div>

                    </div>

                    </div>

                  </div>

                  <Staffs />  
                  
                  <Projects />
    


                    {/* Clients */}

                    <div className='clients bg-white px-6 md:px-20' >

                    <div className='mx-auto md:w-1/3 w-2/3 text-center py-8' >
                      <h3 className='first-color font-semibold text-lg mb-5' >Testimonial</h3>
                      <h1 className='text-5xl mx-auto font-semibold' >Happy Clients</h1> 
                    </div>


                              <div className="carousel w-full mb-3">


                                  <div id="item1" className="carousel-item w-full">
                                  
                                  <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-12' >

                                <div className='flex flex-col gap-5 bg-gray-100 p-5' >

                                  <div className='flex items-center gap-3' >

                                    <div className='relative' >
                                      <img src={cl1} alt='client' className=' cli-img ' />
                                      <div className='absolute  text-white  bg-first p-2 rounded-full right-0 bottom-0' >
                                        <FaQuoteLeft />
                                      </div>
                                    </div>
                                    
                                    <div>
                                      <h2 className='text-xl font-semibold mb-3' >BATMAN</h2>
                                      <p className='text-sm first-color font-semibold' >MARKETING MANAGER</p>
                                    </div>
                                  </div>

                                  <div>
                                    <p className=' leading-relaxed tracking-wider text-gray-600 font-semibold text-lg' >
                                    Far far away, behind the word mountains, 
                                    far from the countries Vokalia and Consonantia,
                                    there live the blind texts.
                                    </p>
                                  </div>

                                </div>


                                <div className='flex flex-col gap-5 bg-gray-100 p-5' >

                                <div className='flex items-center gap-3' >

                                <div className='relative' >
                                <img src={cl2} alt='client' className=' cli-img ' />
                                <div className='absolute  text-white  bg-first p-2 rounded-full right-0 bottom-0' >
                                  <FaQuoteLeft />
                                </div>
                                </div>

                                <div>
                                <h2 className='text-xl font-semibold mb-3' >SUPERMAN</h2>
                                <p className='text-sm first-color font-semibold' >MARKETING MANAGER</p>
                                </div>
                                </div>

                                <div>
                                <p className=' leading-relaxed tracking-wider text-gray-600 font-semibold text-lg' >
                                Far far away, behind the word mountains, 
                                far from the countries Vokalia and Consonantia,
                                there live the blind texts.
                                </p>
                                </div>

                                </div>

                                <div className='flex flex-col gap-5 bg-gray-100 p-5' >

                                <div className='flex items-center gap-3' >

                                <div className='relative' >
                                <img src={cl3} alt='client' className=' cli-img ' />
                                <div className='absolute  text-white  bg-first p-2 rounded-full right-0 bottom-0' >
                                  <FaQuoteLeft />
                                </div>
                                </div>

                                <div>
                                <h2 className='text-xl font-semibold mb-3' >LOIS LANE</h2>
                                <p className='text-sm first-color font-semibold' >MARKETING MANAGER</p>
                                </div>
                                </div>

                                <div>
                                <p className=' leading-relaxed tracking-wider text-gray-600 font-semibold text-lg' >
                                Far far away, behind the word mountains, 
                                far from the countries Vokalia and Consonantia,
                                there live the blind texts.
                                </p>
                                </div>
                                </div>
                                </div>
                                  </div> 


                                <div id="item2" className="carousel-item w-full"> 

                                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-12' >

                                <div className='flex flex-col gap-5 bg-gray-100 p-5' >

                                  <div className='flex items-center gap-3' >

                                    <div className='relative' >
                                      <img src={cl4} alt='client' className=' cli-img ' />
                                      <div className='absolute  text-white  bg-first p-2 rounded-full right-0 bottom-0' >
                                        <FaQuoteLeft />
                                      </div>
                                    </div>
                                    
                                    <div>
                                      <h2 className='text-xl font-semibold mb-3' >IRONMAN</h2>
                                      <p className='text-sm first-color font-semibold' >MARKETING MANAGER</p>
                                    </div>
                                  </div>

                                  <div>
                                    <p className=' leading-relaxed tracking-wider text-gray-600 font-semibold text-lg' >
                                    Far far away, behind the word mountains, 
                                    far from the countries Vokalia and Consonantia,
                                    there live the blind texts.
                                    </p>
                                  </div>

                                </div>


                                <div className='flex flex-col gap-5 bg-gray-100 p-5' >

                                <div className='flex items-center gap-3' >

                                <div className='relative' >
                                <img src={cl5} alt='client' className=' cli-img ' />
                                <div className='absolute  text-white  bg-first p-2 rounded-full right-0 bottom-0' >
                                  <FaQuoteLeft />
                                </div>
                                </div>

                                <div>
                                <h2 className='text-xl font-semibold mb-3' >SPIDERMAN</h2>
                                <p className='text-sm first-color font-semibold' >MARKETING MANAGER</p>
                                </div>
                                </div>

                                <div>
                                <p className=' leading-relaxed tracking-wider text-gray-600 font-semibold text-lg' >
                                Far far away, behind the word mountains, 
                                far from the countries Vokalia and Consonantia,
                                there live the blind texts.
                                </p>
                                </div>

                                </div>

                                <div className='flex flex-col gap-5 bg-gray-100 p-5' >

                                <div className='flex items-center gap-3' >

                                <div className='relative' >
                                <img src={cl6} alt='client' className=' cli-img ' />
                                <div className='absolute  text-white  bg-first p-2 rounded-full right-0 bottom-0' >
                                  <FaQuoteLeft />
                                </div>
                                </div>

                                <div>
                                <h2 className='text-xl font-semibold mb-3' >FLASH</h2>
                                <p className='text-sm first-color font-semibold' >MARKETING MANAGER</p>
                                </div>
                                </div>

                                <div>
                                <p className=' leading-relaxed tracking-wider text-gray-600 font-semibold text-lg' >
                                Far far away, behind the word mountains, 
                                far from the countries Vokalia and Consonantia,
                                there live the blind texts.
                                </p>
                                </div>

                                </div>





                                </div>



                                  </div> 
                  


                                </div> 
                                <div className="flex justify-center w-full py-2 gap-2">
                                  <a href="#item1" className="btn btn-xs">1</a> 
                                  <a href="#item2" className="btn btn-xs">2</a> 
                                
                                </div>


                      
                    </div>

                  {/* Recent Blogs */}
    
                    <div className='bg-white px-6 md:px-20 md:py-36 ' >
                    <div className='mx-auto md:w-1/3 w-2/3 text-center py-8 mb-10' >
                      <h3 className='first-color font-semibold text-lg mb-5' >Our Blog</h3>
                      <h1 className='text-5xl mx-auto font-semibold' >Recent Blogs</h1> 
                    </div>

                                  <Blogs />

                    </div>
    
                  {/* FAQ */}

                    <div className='faq ' >
                      <div className='grid grid-cols-1 md:grid-cols-2' >

                        <div className='py-10 md:px-20 px-6 bg-white  pb-12 ' >

                          <div>
                            <p className='font-bold first-color uppercase' >drop a message</p>
                            <h2  className='text-2xl font-bold uppercase mt-4 ' >request a quote</h2>
                          </div>

                          <form className=' form-control py-10 ' >

                            <div className='flex gap-8 md:flex-row flex-col w-full' >

                            <div className='flex flex-col gap-2 w-full' >
                              <label className='text-xs font-bold  uppercase tracking-wider' >Your Full Name</label> <br/>
                              <input className='px-3 py-2 faq-input ' type='name' placeholder='Your Full Name' />
                            </div>

                            <div className='flex flex-col gap-2 w-full' >
                              <label className='text-xs font-bold  uppercase tracking-wider' >Email Address</label> <br/>
                              <input className='px-3 py-2 faq-input ' type='email' placeholder='Email' />
                            </div>

                            </div>

                            <div className=' my-8 w-full flex flex-col gap-3' >
                              <label className='text-xs font-bold  uppercase tracking-wider' >Message</label>
                              <textarea placeholder='Message ' rows={6} className='p-3 faq-input ' ></textarea>
                            </div>

                            <button className='p-4 uppercase bg-first mt-4 w-40 font-bold text-xs rounded-md' >Send Message</button>
                          </form>
                        </div>

                        <div className='faq-accordion pr-12 hidden md:block  pb-12 ' >

                          
                          <div className=' p-12' >
                            <h3 className='first-color font-semibold text-lg mb-5' >Frequently Ask Question</h3>
                            <h1 className='text-6xl mx-auto font-semibold leading-relaxed ' >You Want To Ask Something From Us?</h1> 
                          </div>

                          <div className='px-12 text-lg' >
                            <p className='text-gray-500 font-semibold leading-relaxed mb-6' >
                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country,
                            in which roasted parts of sentences fly into your mouth.
                            </p>


                            <div className="collapse bg-white faq-input">
                              <input type="checkbox" /> 
                              <div className="collapse-title text-xl px-7 active:bg-amber-600 faq-collapse font-bold ">
                              What are the problems in construction?
                              </div>
                              <div className="collapse-content  text-gray-500 "> 
                                <p className='p-4' >
                                <span className='font-bold' >This is the first item's accordion body.</span>
                                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                                It's also worth noting that just about any HTML can go within the .accordion-body,
                                though the transition does limit overflow. 
                                </p>
                              </div>
                            </div>


                            <div className="collapse bg-white faq-input">
                              <input type="checkbox" /> 
                              <div className="collapse-title text-xl px-7 active:bg-amber-600 faq-collapse font-bold ">
                              What is the best practice in construction?
                              </div>
                              <div className="collapse-content  text-gray-500 "> 
                                <p className='p-4' >
                                <span className='font-bold' >This is the first item's accordion body.</span>
                                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                                It's also worth noting that just about any HTML can go within the .accordion-body,
                                though the transition does limit overflow. 
                                </p>
                              </div>
                            </div>


                            <div className="collapse bg-white faq-input">
                              <input type="checkbox" /> 
                              <div className="collapse-title text-xl px-7 active:bg-amber-600 faq-collapse font-bold ">
                              What is the best practice in construction?
                              </div>
                              <div className="collapse-content  text-gray-500 "> 
                                <p className='p-4' >
                                <span className='font-bold' >This is the first item's accordion body.</span>
                                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                                It's also worth noting that just about any HTML can go within the .accordion-body,
                                though the transition does limit overflow. 
                                </p>
                              </div>
                            </div>


                          </div>

                        </div>

                      </div>
                    </div>

   

  
    </div>
  )
}

export default Home
