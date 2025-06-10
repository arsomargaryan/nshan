import { useEffect, useState } from 'react';
import moment from 'moment';

const Countdown = () => {
    const deadline = moment('2025-06-29T17:00:00'); // Установите ваш дедлайн здесь

    const calculateTimeLeft = () => {
        const now = moment();
        const difference = moment.duration(deadline.diff(now));
        return {
            days: difference.days(),
            hours: difference.hours(),
            minutes: difference.minutes(),
            seconds: difference.seconds()
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className=' flex flex-col justify-center items-center '>
            <h1 className='text-2xl text-center'>Նշանադրության արարողությանը մնացել է </h1>
            <div className=' flex justify- items-center '>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-3xl'>{timeLeft.days} <span className='text-2xl m-2'>:</span></div>
                    <div className='text-xs mr-7'>Օր</div>
                </div>


                 <div className='flex flex-col justify-center items-center'>
                    <div className='text-3xl'>{timeLeft.hours} <span className='text-2xl m-2'>:</span></div>
                    <div className='text-xs mr-7'>Ժամ</div>
                </div>

                

                 <div className='flex flex-col justify-center items-center'>
                    <div className='text-3xl'>{timeLeft.minutes} <span className='text-2xl ml-2'>:</span></div>
                    <div className='text-xs mr-5'>Րոպե</div>
                </div>
                
                

                 <div className='flex flex-col justify-center items-center'>
                    <div className='text-3xl'>{timeLeft.seconds} </div>
                    <div className='text-xs'>Վարյկյան</div>
                </div>
            </div>
             <h1>29/06/2025</h1>

        </div>
    );
};

export default Countdown;
