import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Testimoinial.css";

import myImage from "../../ImageFile/Team-5.png";

// import required modules
import { Pagination } from "swiper";

const Testimoinial = () => {
  return (
    <div className="text-left container mx-auto">
      <div className="text-center py-10">
        <h1 className="text-2xl text-gray-400">TESTIMOINIALS</h1>
        <h3 className="text-5xl font-bold">What Parents Say</h3>
      </div>
      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-slate-700 rounded">
              <div className="clientMsg">
                <p className="text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Earum ea saepe, dolor doloribus minima aliquid cupiditate,
                  accusamus quae vel voluptas nostrum provident fuga voluptatum
                  voluptates? Provident laborum cupiditate iste necessitatibus?
                </p>
              </div>
              <div className="flex justify-center items-center pb-5">
                <div className="px-2">
                  <img
                    src={myImage}
                    alt="client review"
                    className="w-24 h-24 rounded-full border-spacing-2"
                  />
                </div>
                <div className="clientData text-left text-white">
                  <p>Joon Do</p>
                  <p>Entrepreneur</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-slate-700 rounded">
              <div className="clientMsg">
                <p className="text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Earum ea saepe, dolor doloribus minima aliquid cupiditate,
                  accusamus quae vel voluptas nostrum provident fuga voluptatum
                  voluptates? Provident laborum cupiditate iste necessitatibus?
                </p>
              </div>
              <div className="flex justify-center items-center pb-5">
                <div className="px-2">
                  <img
                    src={myImage}
                    alt="client review"
                    className="w-24 h-24 rounded-full border-spacing-2"
                  />
                </div>
                <div className="clientData text-left text-white">
                  <p>Joon Do</p>
                  <p>Entrepreneur</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-slate-700 rounded">
              <div className="clientMsg">
                <p className="text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Earum ea saepe, dolor doloribus minima aliquid cupiditate,
                  accusamus quae vel voluptas nostrum provident fuga voluptatum
                  voluptates? Provident laborum cupiditate iste necessitatibus?
                </p>
              </div>
              <div className="flex justify-center items-center pb-5">
                <div className="px-2">
                  <img
                    src={myImage}
                    alt="client review"
                    className="w-24 h-24 rounded-full border-spacing-2"
                  />
                </div>
                <div className="clientData text-left text-white">
                  <p>Joon Do</p>
                  <p>Entrepreneur</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-slate-700 rounded">
              <div className="clientMsg">
                <p className="text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Earum ea saepe, dolor doloribus minima aliquid cupiditate,
                  accusamus quae vel voluptas nostrum provident fuga voluptatum
                  voluptates? Provident laborum cupiditate iste necessitatibus?
                </p>
              </div>
              <div className="flex justify-center items-center pb-5">
                <div className="px-2">
                  <img
                    src={myImage}
                    alt="client review"
                    className="w-24 h-24 rounded-full border-spacing-2"
                  />
                </div>
                <div className="clientData text-left text-white">
                  <p>Joon Do</p>
                  <p>Entrepreneur</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimoinial;
