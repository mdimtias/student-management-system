import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import "./Review.css"

const Review = () => {
    return (
        <div className='review bg-black p-8 mx-8 my-2 md:mx-0 md:my-0 '>
            <div className="review-star flex justify-center items-center py-3 gap-1">
                <AiFillStar className='text-[#27A700]'></AiFillStar>
                <AiFillStar className="text-[#27A700]"></AiFillStar>
                <AiFillStar className="text-[#27A700]"></AiFillStar>
                <AiFillStar className="text-[#27A700]"></AiFillStar>
                <AiFillStar className="text-[#27A700]"></AiFillStar>
            </div>
            <div className="review-content">
                <p className='text-white'>“Big thanks to the team support of the Student Management System. Fast, professional, and extremely friendly. This product always update and enhance everyday.”</p>
            </div>
            <div className="review-user-info flex flex-col gap-3 pt-3">
                <div className="review-img flex justify-center items-center">
                    <img className='w-20 h-20 border-2 border-white rounded-[50%] ' src="https://images.pexels.com/photos/32976/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=180" alt="" />
                </div>
                <div className="name-and-profession">
                    <h3 className="text-lg text-bold text-white hover:text-[#0A58CA]">Hm Karim</h3>
                    <p className="text-sm text-[#666]">Vp Of Sale Development</p>
                </div>
            </div>
        </div>
    );
};

export default Review;