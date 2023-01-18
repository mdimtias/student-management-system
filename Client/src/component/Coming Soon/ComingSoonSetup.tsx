import React from 'react';
import ComingSoon from './ComingSoon';
import './backgroundStyle.css'

const ComingSoonSetup = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 6000000); // 10 minutes timer
    return (
        <div>
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            <ComingSoon expiryTimestamp={time}/>
        </div>
    );
};

export default ComingSoonSetup;