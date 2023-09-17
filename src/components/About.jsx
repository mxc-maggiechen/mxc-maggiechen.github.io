import React from 'react'
import Dino from '../assets/mdi_dinosaur-pixel.png'
import {TypeAnimation} from 'react-type-animation'

export const About = () => {
  return (
    <div className="h-screen w-screen bg-[#1E1E1E] text-gray-300 font-courier-prime ">
        <div className="flex justify-center ml-[20rem] mt-[7rem] px-12">
            <div className="block flex-col">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Hello World!',
                        7000,
                        "",
                        1000
                    ]}
                    cursor={true}
                    wrapper="span"
                    speed={1}
                    style={{ fontSize: '45px', display: 'inline-block'}}
                    repeat={Infinity}
                />
                <div style={{fontSize:"24px"}}>
                    <div>
                        My name is Maggie Chen: 
                    </div>
                    <div>
                        2nd year Software Engineering Student at the University of Waterloo 
                    </div>
                </div>

                <div>
                    <div className="mt-8"style={{fontSize:"24px"}}>
                        My Journey
                    </div>
                    <div>
                    I'm a second-year undergraduate student at the University of Waterloo, on a mission to carve out a path in the software industry. Along my academic journey, I've been captivated by the realms of full-stack web development and artificial intelligence.
                    Recently, I embarked on my first co-op adventure with SnapPea Design, where I wore the hat of a Software Engineer. My time there involved crafting full-stack React applications, diving into IoT projects, and exploring the intricate world of machine learning. 
                    This experience ignited my passion for technology and broadened my skill set, leaving me eager for what's next.
                    </div>
                </div>

                <div>
                    <div className="mt-8"style={{fontSize:"24px"}}>
                        My Interests
                    </div>
                    <div>
                        Beyond the world of code, I have a diverse set of interests. I find solace in pencil sketching and find creativity in playing the piano. My fascination with AI and machine learning continues to grow as I explore their potential applications. 
                        These interests, combined with my academic pursuits, reflect my commitment to lifelong learning and my eagerness to contribute to the ever-evolving tech landscape.
                    </div>
                </div>

                <div >
                    <div className="mt-8"style={{fontSize:"24px"}}>
                        My Cat
                    </div>
                    <div>
                        I love my cat. His name is Raccoon.
                    </div>
                </div>


            </div>
            
        </div>

    </div>
  )
}

export default About