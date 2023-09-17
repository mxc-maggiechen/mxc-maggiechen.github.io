import React from 'react'
import ReactLogo from '../assets/devicon_react.png'
import Cpp from '../assets/Vector.png'
import Python from '../assets/skills.py.png'
import Github from '../assets/github.png'
import Javascript from '../assets/blog.js.png'
import Contact from '../assets/noto-v1_letter-j.png'
import VSCode from '../assets/devicon_vscode.png'
import Exit from '../assets/Exit.png'
import File from '../assets/Group.png'
import Email from '../assets/Vector (1).png'
import Settings from '../assets/pepicons-pencil_gear.png'
import Linkedin from '../assets/circum_linkedin.png'
import GithubLine from '../assets/teenyicons_github-outline.png'
import Down from '../assets/uiw_down.png'
import { useLocation } from 'react-router-dom';

function useCurrentPage() {
  const location = useLocation();
  return location.pathname;
}


export const NavbarH = () => {

  const currentPage = useCurrentPage();
  
  
  return (
    <div className='fixed h-screen w-screen font-ubuntu'>

      {/* Top File */}
      <div className='fixed w-full h-7 flex items-center px-4 bg-[#3C3C3C]  text-gray-300' style={{ fontSize: '14px', zIndex:10}}>
        <div>
          <img src={VSCode} alt="VSCode Logo" style={{ width: '16px' }} />
        </div>

        <div>
          <ul className="flex justify-left space-x-custom">
            <li>File</li>
            <li>Edit</li>
            <li>Selection</li>
            <li>View</li>
            <li>Go</li>
            <li>Run</li>
            <li>Terminal</li>
            <li>Help</li>
          </ul>
        </div>

        <div className="flex-grow flex items-center justify-center ml-[-23%]"> {/* Center-align "Maggie Chen - Visual Studio Code" */}
          Maggie Chen - Visual Studio Code
        </div>

        <div className="ml-auto">
          <img src={Exit} alt="Exit" style={{ width: '60px' }} className="pr-4" />
        </div>
      </div>

      {/* Navbar */}
      <div className="flex h-screen fixed">

        {/* Socials */}
        <div className='w-12 h-screen flex flex-col left-0 bg-[#333333] items-center '>
          <img src={File} alt="File icon" style={{ width: '23px'}} className="mt-12" />

          <a href="mailto:m29chen@uwaterloo.ca">
            <img src={Email} alt="Email icon" style={{ width: '23px'}} className="mt-[1.75rem]" />
          </a>
          
          <a href="https://www.linkedin.com/in/mxc-maggiechen/">
            <img src={Linkedin} alt="Linkedin icon" style={{ width: '32px'}} className="mt-[1.25rem]" />
          </a>

          <a href="https://github.com/mxc-maggiechen">
            <img src={GithubLine} alt="Github line icon" style={{ width: '32px'}} className="mt-[1.2rem]" />
          </a>

          <a href="/settings" className="mt-auto mb-2">
            <img src={Settings} alt="Settings icon" style={{ width: '32px'}}/>
          </a>
          
        </div>

        {/* Vertical Navbar*/}
        <div className='w-[16rem] h-screen flex flex-col bg-[#252526] ' style={{zIndex:3}}>
          <div className='flex justify-between items-center text-gray-300 mt-[2.5rem] ml-4 ' style={{ fontSize: '14px' }}>
            EXPLORE
          </div>
          <div className='flex items-center text-gray-300 mt-[0.7rem] ml-4 font-bold'style={{ fontSize: '14px' }}>
            <img src={Down} alt="Down icon" style={{ width: '16px', marginRight: '7px'}}/>
            PORTFOLIO
          </div>

          <ul>
              <li>
                <a href='/'  className={`py-[0.15rem] flex items-center w-[16rem] ml-[-1rem] text-gray-300 mt-[0.25rem] bg-${currentPage === '/' ? 'bg-[#37373C]' : 'bg-[#252526]'} hover:bg-[#37373C] `} style={{ fontSize: '14px', }}>
                  <img src={ReactLogo} alt="React icon" style={{ width: '16px', marginRight: '8px', marginLeft:'1rem'}}/>
                home.jsx</a>

               
                
              </li>

              <li >
              <a href='/about'  className={`py-[0.15rem] flex items-center w-[16rem] ml-[-1rem] text-gray-300 mt-0 ${currentPage === '/about' ? 'bg-[#37373C]' : 'bg-[#252526]'} hover:bg-[#37373C] `} style={{ fontSize: '14px', }}>
                  <img src={Cpp} alt="React icon" style={{ width: '16px', marginRight: '8px',  marginLeft:'1rem'}}/>
                  about.cpp
                </a>
                
              </li>

              <li>
              <a href='/skills'  className={`py-[0.15rem] flex items-center w-[16rem] ml-[-1rem] text-gray-300 mt-0 ${currentPage === '/skills' ? 'bg-[#37373C]' : 'bg-[#252526]'} hover:bg-[#37373C] `} style={{ fontSize: '14px', }}>
                  <img src={Python} alt="React icon" style={{ width: '16px', marginRight: '8px',  marginLeft:'1rem'}}/>
                  skills.py
                </a>
                
              </li>

              <li>
              <a href='/projects'  className={`py-[0.15rem] flex items-center w-[16rem] ml-[-1rem] text-gray-300 mt-0 ${currentPage === '/projects' ? 'bg-[#37373C]' : 'bg-[#252526]'} hover:bg-[#37373C] `} style={{ fontSize: '14px', }}>
                  <img src={Github} alt="React icon" style={{ width: '16px', marginRight: '8px',  marginLeft:'1rem'}}/>
                  .projects
                </a>
                
              </li>
              <li>
              <a href='/blog'  className={`py-[0.15rem] flex items-center w-[16rem] ml-[-1rem] text-gray-300 mt-0 ${currentPage === '/blog' ? 'bg-[#37373C]' : 'bg-[#252526]'} hover:bg-[#37373C] `} style={{ fontSize: '14px', }}>
                  <img src={Javascript} alt="React icon" style={{ width: '16px', marginRight: '8px',  marginLeft:'1rem'}}/>
                  blog.js
                </a>
               
              </li>
              <li>
              <a href='/contact'  className={`py-[0.15rem] flex items-center w-[16rem] ml-[-1rem] text-gray-300 mt-0 ${currentPage === '/contact' ? 'bg-[#37373C]' : 'bg-[#252526]'} hover:bg-[#37373C] `} style={{ fontSize: '14px', }}>
                  <img src={Contact} alt="React icon" style={{ width: '16px', marginRight: '8px',  marginLeft:'1rem'}}/>
                  contact.java
                </a>
              </li>
          </ul>
        </div>

        {/* Horizontal Navbar*/}
        <div className='w-screen h-16 flex items-center bg-[#252626] text-gray-300' style={{ fontSize: '14px'}}>
          <ul className='flex h-[75%] justify-center items-center'>
            <li className='ml-[-1rem] mt-[1.7rem]'>
              <a href="/">
                <div className={`nav-item flex items-center  py-2 px-4 ${currentPage === '/' ? 'bg-[#1E1E1E]' : 'bg-[#2D2D2D]'}`}>
                  <img src={ReactLogo} alt="React icon" style={{ width: '16px', marginRight: '8px' }} />
                  <span>home.jsx</span>
                </div>
              </a>
              
                
            </li>
            <li className='ml-[-1.95rem]  mt-[1.7rem]'>
              <a href="/about">
                <div className={`nav-item flex items-center  py-2 px-4 ${currentPage === '/about' ? 'bg-[#1E1E1E]' : 'bg-[#2D2D2D]'}`}>
                  <img src={Cpp} alt="Cpp icon" style={{ width: '16px', marginRight: '8px'}} />
                  <span>about.cpp</span>
                </div>
              </a>
            </li>

            <li className='ml-[-1.95rem]  mt-[1.7rem]'>
              <a href="/skills">
                <div className={`nav-item flex items-center  py-2 px-4 ${currentPage === '/skills' ? 'bg-[#1E1E1E]' : 'bg-[#2D2D2D]'}`}>
                <img src={Python} alt="Cpp icon" style={{ width: '16px', marginRight: '8px'}} />
                <span>skills.py</span>
                </div>
              </a>
              
            </li>

            <li className='ml-[-1.95rem]  mt-[1.7rem]'>
              <a href="/projects">
                <div className={`nav-item flex items-center  py-2 px-4 ${currentPage === '/projects' ? 'bg-[#1E1E1E]' : 'bg-[#2D2D2D]'}`}>
                  <img src={Github} alt="Cpp icon" style={{ width: '16px', marginRight: '8px'}} />
                  <span>.projects</span>
                </div>
              </a>
            </li>

            <li className='ml-[-1.95rem]  mt-[1.7rem]'>
              <a href="/blog">
                <div className={`nav-item flex items-center  py-2 px-4 ${currentPage === '/blog' ? 'bg-[#1E1E1E]' : 'bg-[#2D2D2D]'}`}>
                  <img src={Javascript} alt="Cpp icon" style={{ width: '16px', marginRight: '8px'}} />
                  <span>blog.js</span>
                </div>
              </a>
            </li>

            <li className='ml-[-1.95rem]  mt-[1.7rem]'>
              <a href="/contact">
                <div className={`nav-item flex items-center  py-2 px-4 ${currentPage === '/contact' ? 'bg-[#1E1E1E]' : 'bg-[#2D2D2D]'}`}>
                  <img src={Contact} alt="Cpp icon" style={{ width: '16px', marginRight: '8px'}} />
                  <span>contact.java</span>
                </div>
              </a>
             
            </li>
          </ul>
        </div>
      </div>
     
      
  
  </div>

    
  

    

        
  )
}

export default NavbarH
