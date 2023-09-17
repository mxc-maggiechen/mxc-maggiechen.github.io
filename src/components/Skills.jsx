import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import Java from '../assets/logos_java.png'
import HTMLCSS from '../assets/HTML_CSS.png'
import CCpp from '../assets/Group 1.png'
import Node from '../assets/logos_nodejs-icon-alt.png'
import Postgresql from '../assets/logos_postgresql.png'
import Python from '../assets/logos_python.png'
import Git from '../assets/skill-icons_git.png'
import ReactIcon from '../assets/logos_react.png'


export const Skills = () => {
    return (
        <div className="h-screen w-screen bg-[#1E1E1E] text-gray-300 font-courier-prime min-h-screen">
  
          {/*Container*/}
          <div className="justify-center ml-[20rem] mt-[7rem] px-12">

          <div className="block flex-col">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Skills',
                        7000,
                        "",
                        500
                    ]}
                    cursor={true}
                    wrapper="span"
                    speed={1}
                    style={{ fontSize: '45px', display: 'inline-block'}}
                    repeat={Infinity}
                />
                <div style={{fontSize:"24px"}}>
                    <div>
                        These are the technologies I've worked with
                    </div>
                </div>
                </div>
  
              <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8' >
                  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-8" style={{ zIndex: 2 }}>
                    <img className='w-40 mx-auto' src={HTMLCSS} alt="HTML CSS icon" />
                      <p className='my-4'>HTML/CSS</p>
                  </div>
                  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-8" style={{ zIndex: 2 }}>
                    <img className='w-20 mx-auto' src={Postgresql} alt="PostgreSQL icon" />
                      <p className='my-4 mt-6'>POSTGRESQL</p>
                  </div>
                  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-8" style={{ zIndex: 2 }}>
                    <img className='w-20 mx-auto' src={Node} alt="Javascript icon" />
                      <p className='my-4 mt-[1rem]'>NODE</p>
                  </div>
                  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-8" style={{ zIndex: 2 }}>
                     <img className='w-[5.5rem] mx-auto' src={ReactIcon} alt="React icon" />
                      <p className='my-4 mt-[1.75rem]'>REACT</p>
                  </div>
                  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-8" style={{ zIndex: 2 }}>
                    <img className='w-36 mx-auto' src={CCpp} alt="C/C++ icon" />
                      <p className='my-4 mt-[0.85rem]'>C/C++</p>
                  </div>
                  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-8" style={{ zIndex: 2 }}>
                    <img className='w-20 mx-auto' src={Python} alt="Python icon" />
                      <p className='my-4'>PYTHON</p>
                  </div>
                  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-[1.9rem]" style={{ zIndex: 2 }}>
                    <img className='w-16 mx-auto' src={Java} alt="Java icon" />
                      <p className='my-4 mt-[0.6rem]'>JAVA</p>
                  </div>
                  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-[1.9rem]" style={{ zIndex: 2 }}>
                    <img className='w-20 mx-auto' src={Git} alt="Git icon" />
                      <p className='my-4'>GIT</p>
                  </div>
              </div>
          </div>
  
      </div>
  
    )
  }
  
  export default Skills