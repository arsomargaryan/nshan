import Image from 'next/image'
import React, { useState } from 'react'
import MapRestaurant from './MapRestaurant'

export default function Locations() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex flex-col justify-center items-center m-10'>
        <div className='text-6xl'>Location</div>
        <div className='text-xl text-center'>Նշանադրության արարողությունը տեղի կունենա <b>ԼԵ ՄԱՆ </b> հանդիսությունների համալիրում</div>
        <Image  src={'/restaurant.png'} alt={'restaurant'} width={300} height={300}  className='  rounded-2xl mt-5 hover:transform'/>
        <button className='mt-2 text-lg bg-gray-700 text-white p-1.5 rounded-2xl px-15' onClick={()=>setIsOpen(!isOpen)}>Քարտեզ</button>
        {isOpen && <MapRestaurant onClose={() => setIsOpen(false)} />}
    </div>
  )
}
