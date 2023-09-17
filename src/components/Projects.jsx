import React from 'react';
import { data } from "../data/data.js";
import {TypeAnimation} from 'react-type-animation';


export const Projects = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
    <div className="h-screen w-screen bg-[#1E1E1E] text-gray-300 font-courier-prime ">
      <div className="flex-col justify-center ml-[20rem] mt-[7rem] px-12">
            <div className="block flex-col">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Projects',
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
                     Check out some of my recent works
                    </div>
                </div>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-12">
                
                {/* Gird Item */}
                {project.map((item, index) => (
         <div
            key={{index}}
            style={{ backgroundImage: `url(${item.image})`, zIndex: 2  }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                    flex justify-center text-center items-center mx-auto content-div "
        >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
            <span className="text-2xl font bold text-white tracking-wider ">
                {item.name}
            </span>
            <div className="pt-8 text-center ">
                {/* eslint-disable-next-line */}
                <a href={item.github} target="_blank">
                <button
                    className="text-center rounded-lg px-4 py-3 m-2
                            bg-white text-gray-700 font-bold text-lg"
                >
                    Code
                </button>
                </a>
                {/* eslint-disable-next-line */}
                <a href={item.live} target="_blank">
                <button
                    className="text-center rounded-lg px-4 py-3 m-2
                            bg-white text-gray-700 font-bold text-lg"
                >
                    Live
                </button>
                </a>
            </div>
            </div>
        </div>
        ))}


        </div>
    </div>
</div>
  );
};

export default Projects;