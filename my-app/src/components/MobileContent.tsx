import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import Countdown from './CountDown';
import ArmenianCalendar from './ArmenianCalendar';
import Loading from './Loading';
import { useInView } from 'react-intersection-observer';
import Locations from './Locations';
import FormInvitetion from './FormInvitetion';
import { Ballet, Lavishly_Yours } from 'next/font/google';

const ballet = Ballet({
  weight: '400', // Ballet imeet tol'ko odin variant
  subsets: ['latin'],
  display: 'swap',
});

export const lavishlyYours = Lavishly_Yours({
  weight: '400', // Etot font imeet tol'ko odin ves
  subsets: ['latin'],
  display: 'swap',
});

export default function MobileContent() {
        const [isLoading, setIsLoading] = useState<boolean>(true);
        const [isPlaying, setIsPlaying] = useState(false);
        const audioRef = useRef<HTMLAudioElement | null>(null);
        const { ref: firstRef, inView: firstInView } = useInView();
        const { ref: scaleRef, inView: secondInView } = useInView();




          const togglePlay = () => {
            if(audioRef.current !==null){
              if (isPlaying) {
                audioRef.current.pause();
                } else {
                audioRef.current.play();
                }
                setIsPlaying(!isPlaying);
            }
      
    };

    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        return () => {
        document.body.classList.remove('overflow-hidden');
        };
    }, []);

    const handleImageLoad = () => {
        setTimeout(() => {
        setIsLoading(false);
        document.body.classList.remove('overflow-hidden');
        }, 200);
    };


    
  return (
    <div>
        {isLoading?<Loading />:null}
        
        <div className='relative rounded-b-2xl w-full h-[590px] mb-7'>
            <Image src="/Aram.jpg" alt="Nshan" fill className='rounded-b-2xl ' onLoadingComplete={handleImageLoad}
          priority/>
            <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-white via-transparent to-transparent" />
            <div className={`absolute text-black text-5xl bottom-20 gap-1 w-full flex flex-col justify-center items-center ${ballet.className}`}>
                <div className='mr-10'>Aram</div>
                <div>&</div>
                <div className='ml-10 mt-3'>Armine</div>
            </div>
            <div className=' absolute w-full bottom-0 text-white font-bold'></div>
        </div>
        <Countdown />
        <div className='flex justify-center items-center'>
            <div className='rounded-full bg-gray-300 w-20 h-20 flex justify-center items-center mt-3'>
                <div className='rounded-full bg-white w-18 h-18 flex justify-center items-center'>
                    <audio ref={audioRef} src={'/wedding.mp3'} loop />
                    {isPlaying ? <i className="fa-solid fa-volume-high text-4xl text-gray-600" onClick={togglePlay}></i> :
                    <i className="fa-solid fa-volume-xmark text-4xl text-gray-600" onClick={togglePlay}></i>}
                </div>
            </div>
    </div>


        <div className='felx justify-center items-center mt-10 mx-8'>
                <div className='h-0.5 w-25 bg-black'></div>
                <div className={`text-center text-5xl ${lavishlyYours.className}`}>Dear Guests</div>
                <div className='h-0.5 w-25 bg-black float-end mt-1.5'></div>
                <div className='text-center mt-7 mx-5 text-lg'>
                    Մեր կյանքում գեղեցիկ իրադարձություն է սպասվում։
                    Մենք ընտանիք ենք կազմում և հրավիրում ենք Ձեզ կիսելու մեր կյանքի այս լուսավոր օրը։
                </div>
        </div>

        <div className='relative mt-5 h-90 overflow-hidden' ref={firstRef}>
            <Image src="/Aram.jpg" alt="Nshan" width={200} height={215} 
                className={` rounded-2xl absolute -left-10 top-10  -rotate-8 z-10 ${firstInView?"photoRight":''}`}/>
        
            <Image src="/Aram.jpg" alt="Nshan" width={200} height={215} 
            className={` absolute -right-10 bottom-0 rounded-2xl rotate-8  ${firstInView?" photoLeft":''}`}/>
        </div>
         


        <div className='flex justify-center items-center mt-15'>
            <ArmenianCalendar />  
        </div>

        <Locations />

        <FormInvitetion />
             <div className='flex justify-center items-center' ref={scaleRef}>
            <Image src="/Aram.jpg" alt="Nshan" width={300} height={315} 
                className={` rounded-2xl ${secondInView?"photoScale":''}`}/>
        </div>
        <div className='text-4xl text-center my-20'>Անհանբեր կսպասենք մեր հանդիպմանը</div>
    </div>
    
  )
}
