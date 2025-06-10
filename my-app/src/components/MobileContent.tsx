import React from 'react'
import Image from "next/image";
import Countdown from './CountDown';
import ArmenianCalendar from './ArmenianCalendar';


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
    </div>
    
  )
}
