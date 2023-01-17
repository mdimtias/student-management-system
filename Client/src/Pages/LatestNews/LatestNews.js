import React from "react";
import "./LatestNews.css";
import SingleNews from "./SingleNews/SingleNews";
import Carousel from "react-elastic-carousel";
const LatestNews = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 568, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 1024, itemsToShow: 3 },
    { width: 1280, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1536, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <section className="latest-news-section py-20">
      <div className="container mx-auto">
        <div className="latest-blog-header text-center">
          <h2 className="font-bold text-[#111D6C] text-4xl">Latest News</h2>
          <p className="text-base text-[#555555] py-5">
          School management systems include information related to the staff. Student <br />management software is information limited to students.
          </p>
        </div>

        <Carousel breakPoints={breakPoints} itemPadding={[10, 10]}>
          <SingleNews></SingleNews>
          <SingleNews></SingleNews>
          <SingleNews></SingleNews>
          <SingleNews></SingleNews>
          <SingleNews></SingleNews>
        </Carousel>
      </div>
    </section>
  );
};

export default LatestNews;
