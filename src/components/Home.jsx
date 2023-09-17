import React from 'react'
import Dino from '../assets/mdi_dinosaur-pixel.png'
import {TypeAnimation} from 'react-type-animation'
import Resume from "../assets/files/Maggie Chen - Resume.pdf"

const Home = () => {
  return (
    <div className="h-screen w-screen bg-[#1E1E1E] text-gray-300 font-courier-prime min-h-screen">
        <div className="flex justify-center items-center ml-[8rem] ">
            <div className="mt-[14rem] mr-12">
                <img src={Dino} alt="Dinosaur" style={{ width: '360px' }} />
            </div>
            <div className="block flex-col mt-[14rem]">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Hello World!',
                        7000,
                        "",
                        1000
                    ]}

                    wrapper="span"
                    speed={1}
                    style={{ fontSize: '45px', display: 'inline-block' }}
                    repeat={Infinity}
                />
                <div style={{fontSize:"45px"}}>
                    My name is
                </div>
                <div style={{fontSize:"90px", marginTop:"-15px"}}>
                    Maggie Chen
                </div>
                <div className="flex">
                    <a href={Resume} download="MaggieChen_Resume.pdf"  style={{ zIndex: 2 }}>
                        <button className='text-white font-ubuntu group  px-4 py-3 my-2 flex items-center bg-[#2D6198] hover:bg-[#3675B6]' style={{fontSize:'15px', marginRight:'40px'}}>
                            Download Resume
                        </button>
                    </a>
                    

                    <a href="/#/contact"  style={{ zIndex: 2 }}>
                        <button className='text-white font-ubuntu group  px-10 py-3 my-2 flex items-center bg-[#2D6198] hover:bg-[#3675B6]' style={{fontSize:'15px'}}> Contact Me
                        </button>
                    </a>

                   
                </div>

            </div>
            
        </div>

    </div>
  )
}

export default Home