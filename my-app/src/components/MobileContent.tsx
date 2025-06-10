import React from 'react'
import Image from "next/image";
import Countdown from './CountDown';

export default function MobileContent() {
  return (
    <div>
        <div className='relative'>
            <Image src="/Aram.jpg" alt="Nshan" width={390} height={844}  className=' rounded-b-2xl'/>
            <div className=' absolute text-white text-3xl top-3 w-full flex justify-center items-center'>
                Արամ և Արմինե
            </div>
            <div className=' absolute w-full bottom-0 text-white font-bold'>
               <Countdown />
            </div>
        </div>
    </div>
    
  )
}
