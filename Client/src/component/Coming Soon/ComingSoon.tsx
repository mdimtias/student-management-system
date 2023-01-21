import React from 'react';
import { useTimer } from 'react-timer-hook';

const ComingSoon = ({ expiryTimestamp }: any) => {
    const {
        seconds,
        minutes,
        hours,
        days,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') })
    return (
        <div className='p-10 flex flex-col justify-center items-center h-screen bg-gradient-to-r from-[#611187] , via-[#c054f4] , to-[#a743d8] text-white'>
            <div className='text-6xl md:text-9xl flex gap-1 md:gap-10'>
                <div className="flex flex-col border-2 p-3 rounded-2xl">
                    <span>{days}</span><span className="text-xl">Days</span>
                </div>
                <div className="flex flex-col border-2 p-3 rounded-2xl">
                    <span>{hours}</span><span className="text-xl">Hours</span>
                </div>

                <div className="flex flex-col border-2 p-3 rounded-2xl">
                    <span>{minutes}</span><span className="text-xl">Minutes</span>
                </div>

                <div className="flex flex-col border-2 p-3 rounded-2xl">
                    <span>{seconds}</span><span className="text-xl">Seconds</span>
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-semibold mt-10">
                    We Are Coming Very Soon, Please stay tuned
                </h1>
            </div>
        </div>

    );
};

export default ComingSoon;