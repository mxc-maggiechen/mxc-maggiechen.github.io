import React from 'react'
import Dino from '../assets/mdi_dinosaur-pixel.png'
import {TypeAnimation} from 'react-type-animation'

export const Contact = () => {
  return (
    <div className="h-screen w-screen bg-[#1E1E1E] text-gray-300 font-courier-prime min-h-screen">
    
        <div className='flex items-center'>
            <div>
                <form action="https://getform.io/f/2ef68379-5e38-4deb-b81e-0fdf105fefa7" method="POST" className='flex flex-col max-w-[600px] w-full ml-[20rem] mt-[7rem] px-12'>
                    <div className='pb-8'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Contact',
                                7000,
                                "",
                                500
                            ]}

                            wrapper="span"
                            speed={1}
                            style={{ fontSize: '45px', display: 'inline-block' }}
                            repeat={Infinity}
                        />

                        <p style={{fontSize:'20px'}}>
                            Submit the form below or shoot me an email at m29chen@uwaterloo.ca
                        </p>
                    </div>

                    <input className='bg-[#1E1E1E] p-2 border-2 ' type="text" placeholder="Name" name="name" style={{ zIndex: 2 }}/>
                    <input className='my-4 bg-[#1E1E1E] p-2 border-2' type="email" placeholder="Email" name="email" style={{ zIndex: 2 }}/>
                    <textarea className='bg-[#1E1E1E] p-2 border-2' type="message" rows="10" placeholder="Message" style={{ zIndex: 2 }}/>
                    <button className='text-white font-ubuntu group  px-4 py-3 mx-auto my-4 flex items-center justify-center bg-[#2D6198] hover:bg-[#3675B6]'style={{ zIndex: 2 }}>Contact Me</button>
                </form>

            </div>
            <div>
                <img src={Dino} alt="Dinosaur" style={{ width: '475px' }} className="ml-22 mt-[11rem]"/>
            </div>
            
        </div>
        
    </div>
  )
}

export default Contact