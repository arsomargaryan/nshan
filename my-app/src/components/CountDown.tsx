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
            <div className='text-4xl'>25 ՀՈՒՆԻՍ 2025</div>

            {/* <h1 className='text-2xl text-center'>Նշանադրության արարողությանը մնացել է </h1> */}
            <div className=' flex justify- items-center '>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-xl'>{timeLeft.days} <span className='text-lg m-1'>:</span></div>
                    <div className='text-xs mr-5'>Օր</div>
                </div>


                 <div className='flex flex-col justify-center items-center'>
                    <div className='text-xl'>{timeLeft.hours} <span className='text-lg m-1'>:</span></div>
                    <div className='text-xs mr-5'>Ժամ</div>
                </div>

                

                 <div className='flex flex-col justify-center items-center'>
                    <div className='text-xl'>{timeLeft.minutes} <span className='text-lg ml-1'>:</span></div>
                    <div className='text-xs mr-3'>Րոպե</div>
                </div>
                
                

                 <div className='flex flex-col justify-center items-center'>
                    <div className='text-xl'>{timeLeft.seconds} </div>
                    <div className='text-xs'>Վարյկյան</div>
                </div>
            </div>

        </div>
    );
};

export default Countdown;
