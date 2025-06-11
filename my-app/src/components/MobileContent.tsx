import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import Countdown from './CountDown';
import ArmenianCalendar from './ArmenianCalendar';
import Loading from './Loading';


export default function MobileContent() {
        const [isLoading, setIsLoading] = useState<boolean>(true);
        const [isPlaying, setIsPlaying] = useState(false);
        const audioRef = useRef<HTMLAudioElement | null>(null);
        const comboPhoto = useRef(null)
        const [isVisible, setIsVisible] = useState(false);


        // setTimeout(() => setIsLoading(false), 1000);

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

  const timeoutId = setTimeout(() => {
    setIsLoading(false);
    document.body.classList.remove('overflow-hidden');
  }, 300);

  return () => {
    clearTimeout(timeoutId);
    document.body.classList.remove('overflow-hidden'); 
  };
}, []);

    useEffect(() => {
        if (!comboPhoto.current) return; 
      const observer = new IntersectionObserver((entries)=>{
        const entry = entries[0]
        setIsVisible(entry.isIntersecting)
      })
    
     observer.observe(comboPhoto.current)

       return () => {
    if (comboPhoto.current) {
      observer.unobserve(comboPhoto.current);
    }
  };

    }, [])
    


    
  return (
    <div>
        {isLoading?<Loading />:null}
        <div className='relative rounded-b-2xl w-full h-[590px] mb-7'>
            <Image src="/Aram.jpg" alt="Nshan" fill className=' rounded-b-2xl '/>
            <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-white via-transparent to-transparent" />
            <div className=' absolute text-black text-3xl bottom-25 gap-1 w-full flex flex-col justify-center items-center '>
                <div>Արամ</div>
                <div>&</div>
                <div>Արմինե</div>
                {/* Արամ և Արմինե */}
            </div>
            <div className=' absolute w-full bottom-0 text-white font-bold'>
            </div>
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
                <div className='text-center text-5xl'>Սիրելի հյուրեր</div>
                <div className='h-0.5 w-25 bg-black float-end mt-1.5'></div>
                <div className='text-center mt-7 mx-5 text-lg'>
                    Մեր կյանքում գեղեցիկ իրադարձություն է սպասվում։
                    Մենք ընտանիք ենք կազմում և հրավիրում ենք Ձեզ կիսելու մեր կյանքի այս լուսավոր օրը։
                </div>
        </div>

        <div className='relative mt-10 h-80' ref={comboPhoto}>
            <Image src="/Aram.jpg" alt="Nshan" width={200} height={215} 
                className={` rounded-2xl absolute -left-10  -rotate-8 z-10 ${isVisible?"photoRight":''}`}/>
        
            <Image src="/Aram.jpg" alt="Nshan" width={200} height={215} 
            className={` absolute -right-10 bottom-0 rounded-2xl rotate-8 ${isVisible?"photoLeft":''}`}/>
        </div>
         


        <div className='flex justify-center items-center mt-15'>
            <ArmenianCalendar />  
        </div>
        <div className='intersectionFirts'></div>
    </div>
    
  )
}
