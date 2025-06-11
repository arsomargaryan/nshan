import React, { useState } from 'react'
import Image from "next/image";
import Countdown from './CountDown';
import ArmenianCalendar from './ArmenianCalendar';
import Loading from './Loading';


export default function MobileContent() {
        const [isLoading, setIsLoading] = useState<boolean>(true);
        setTimeout(() => setIsLoading(false), 2000);

    
  return (
    <div>
        {isLoading?<Loading />:null}
        <div className='relative rounded-b-2xl '>
            <Image src="/Aram.jpg" alt="Nshan" width={390} height={844}  className=' rounded-b-2xl w-full"
' />
<div
  className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
  style={{
    background: `linear-gradient(to top, 
      rgba(255, 192, 203, 0.6) 0%, 
      rgba(255, 255, 255, 0.6) 50%, 
      rgba(255, 255, 255, 0) 100%)`,
    backgroundImage: `linear-gradient(to right, 
      rgba(255, 192, 203, 0.6), 
      rgba(255, 255, 255, 1))`,
    maskImage: `linear-gradient(to top, black 60%, transparent)`,
    WebkitMaskImage: `linear-gradient(to top, black 60%, transparent)`,
  }}
/>

            <div className=' absolute text-white text-3xl top-3 w-full flex justify-center items-center '>
                Արամ և Արմինե
            </div>
            <div className=' absolute w-full bottom-0 text-white font-bold'>
               <Countdown />
            </div>
        </div>
        <div className='felx justify-center items-center mt-10 mx-8'>
                <div className='h-0.5 w-25 bg-black'></div>
                <div className='text-center text-5xl'>Սիրելի հյուրեր</div>
                <div className='h-0.5 w-25 bg-black float-end mt-1.5'></div>
                <div className='text-center mt-7 mx-5 text-lg'>
                    Մեր կյանքում գեղեցիկ իրադարձություն է սպասվում։
                    Մենք ընդանիք ենք կազմում և հրավիրում ենք Ձեզ կիսելու մեր կյանքի այս լուսավոր օրը
                </div>
        </div>
        <div className='flex justify-center items-center mt-15'>
            <ArmenianCalendar />  
        </div>
        <div className='intersectionFirts'></div>
    </div>
    
  )
}
