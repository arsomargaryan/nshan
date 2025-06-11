"use client";
import React, { useEffect, useState } from 'react'
import SizePC from './SizePC';
import Loading from './Loading';
import MobileContent from './MobileContent';


export default function Content() {

    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);


  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);
    setTimeout(() => setIsLoading(false), 500);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return(
    <div className="flex justify-center items-center n">
      {isLoading ? (
        <Loading />
      ) : (
        isMobile ? <MobileContent/> : <SizePC />
      )}
    </div>
  )
}
