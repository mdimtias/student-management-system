import React from "react";
import { FcBusinessman } from "react-icons/fc";
import { BiDuplicate } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./SingleNews.css";

const SingleNews = () => {
  return (
    <div className="latest-blog bg-[#FFFFFF] mx-5 md:mx-0">
      <div className="latest-blog-img w-full">
        <img
          className="w-full cursor-pointer"
          src="https://cdn.pixabay.com/photo/2016/11/23/18/27/hummingbird-1854225__340.jpg"
          alt=""
        />
      </div>
      <div className="latest-blog-info flex gap-5 p-5">
        <div className="latest-blog-author-name flex gap-2">
          <span>
            <FcBusinessman className="text-2xl text-red-500 "></FcBusinessman>
          </span>
          <h3 className="cursor-pointer">By Admin</h3>
        </div>
        <div className="latest-blog-category flex items-center flex-wrap gap-2">
          <BiDuplicate className="text-red-500"></BiDuplicate>
          <h3 className="cursor-pointer">Category</h3>
        </div>
      </div>
      <div className="latest-blog-title px-5">
        <h2 className="text-[#121E5F] hover:text-[#0a1c7e] font-bold text-[22px] text-left cursor-pointer">
          How to create blog post in seo friendly 2023
        </h2>
      </div>
      <div className="read-more py-5 gap-5 px-5">
        <Link to="" className="learn-more md:inline-block flex flex-row flex-wrap">
          <span className="circle" aria-hidden="true">
            <BsArrowRight className="text-2xl w-12"></BsArrowRight>
          </span>
          <span className="button-text">Learn More</span>
        </Link>
      </div>
    </div>
  );
};

export default SingleNews;
