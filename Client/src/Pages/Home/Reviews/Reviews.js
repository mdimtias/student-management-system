import React from "react";
// import Carousel from "react-elastic-carousel";
import Review from "../Review/Review";

const Reviews = () => {
//   const breakPoints = [
//       { width: 1, itemsToShow: 1 },
//       { width: 300, itemsToShow: 1 },
//       { width: 768, itemsToShow: 2, itemsToScroll: 1 },
//       { width: 1024, itemsToShow: 3, itemsToScroll: 1 },
//       { width: 1280, itemsToShow: 4, itemsToScroll: 2 },
//       { width: 1536, itemsToShow: 5 },
//       { width: 1750, itemsToShow: 6 },
//     ];
  return (
    <div className="review-section bg-[#0E1629] py-20 md:px-20 overflow-hidden">
      <div className="container mx-auto flex flex-col">
        <div className="review-header text-center">
          <h2 className="font-bold text-white text-4xl">Latest News</h2>
          <p className="text-base text-[#dedede] py-5">
            School management systems include information related to the staff.
            Student <br />
            management software is information limited to students.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-5">
          {/* <Carousel breakPoints={breakPoints} itemPadding={[20, 20]}> */}
            <Review></Review>
            <Review></Review>
            <Review></Review>
            <Review></Review>
          {/* </Carousel> */}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
