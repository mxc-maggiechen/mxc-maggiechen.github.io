import React from 'react'
import {TypeAnimation} from 'react-type-animation'

export const Settings = () => {
  return (
    <div className="h-screen w-screen bg-[#1E1E1E] text-gray-300 font-courier-prime ">
         <div className="flex justify-center ml-[20rem] mt-[7rem] px-12 flex-col">
            <div className="block" >
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Settings',
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
            </div>
            <div style={{fontSize:"24px"}}>
                <div>
                    Coming soon...
                </div>
            </div>
        </div>
    </div>
  )
}

export default Settings