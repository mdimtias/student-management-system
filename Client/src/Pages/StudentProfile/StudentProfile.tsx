import React from "react";
import { useTitle } from "../../hooks/useTitle";
import "./StudentProfile.css";

const StudentProfile = () => {
  useTitle("Student Profile")
  return (
    <div className="flex flex-col lg:flex-row pt-20 mx-2 md:mx-0">
      <div className="lg:w-1/5 md:w-[400px] md:block md:mx-auto p-5 shadow-2xl block rounded-2xl h-fit mb-5 mx-5 lg:ml-5">
        <img
          src="https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=740"
          alt=""
        />
        <h1 className="font-semibold text-center">Will byers</h1>
        <h2 className="text-sm text-center font-medium">Student</h2>

        <p className="text-sm text-justify py-3 text-black/80">
          A dedicated and hardworking student with a strong passion for
          learning. Consistently achieves high grades in academic subjects and
          actively participates in class discussions. Demonstrates strong
          critical thinking and problem-solving skills. Involved in
          extracurricular activities and community service. Driven to succeed
          and determined to reach their goals.
        </p>
        {/* <h1 className='font-semibold '>Social Address</h1>
                <div>
                    icons
                </div> */}
      </div>
      <div className="w-full md:w-full lg:w-4/5">
        <div>
          <button className="bg-blue-500 px-3 py-1 font-semibold text-white text-center rounded-l-md ">
            Favorites(6)
          </button>
          <button className="bg-blue-100 px-3 py-1 font-semibold text-blue-500 text-center rounded-r-md ">
            Owned
          </button>
        </div>

        {/* cards 1  start here*/}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 mx-5">
          <div className="shadow-xl hover:border-blue-500 hover:shadow-2xl rounded-2xl ease-in-out duration-500">
            <div className="wrap-image">
              <img
                className="rounded-t-2xl hover:transform[translate-y]]"
                src="https://img.freepik.com/free-photo/sad-female-workaholic-keeps-hands-chin-busy-making-project-work-studies-papers-wears-elegant-white-shirt-sits-desktop-unknown-people-stretch-hands-with-notes-alarm-clock-smartphone_273609-26174.jpg?w=740&t=st=1673601887~exp=1673602487~hmac=a5c57ce73a8fbd5954d51baa8982f0904d52a009f9fbd63229976b086a310798"
                alt=""
              />
            </div>

            <div className="px-5 pb-5 pt-2">
              <h1 className="font-semibold">
                Time management and organization
              </h1>

              <div className="flex mt-2 items-center">
                <img
                  className="w-10 rounded-full mr-5"
                  src="https://www.jordanharbinger.com/wp-content/uploads/2018/10/108-james-clear-showart.jpg"
                  alt=""
                />
                <h1 className="font-semibold text-sm">James Clear </h1>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-blue-500 font-bold text-xl">Free</h1>
                  <del className="font-semibold  mt-1">$9.99</del>
                </div>
                <div>
                  <h1>⭐4.8(2450)</h1>
                  <button className="text-white bg-amber-500 hover:bg-amber-400 ease-in-out duration-300 text-center px-3 mt-1 py-1 font-semibold rounded-2xl">
                    GET NOW
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow-xl hover:shadow-2xl rounded-2xl ease-in-out duration-500">
            <div className="wrap-image">
              <img
                className="rounded-t-2xl"
                src="https://img.freepik.com/free-photo/top-view-smilimg-business-team-sitting-round-table-white-background-concept-successful-transaction_155003-16562.jpg?w=740&t=st=1673602201~exp=1673602801~hmac=096c11eb5f64fc9ecbb2fc37fc80c527c12e880361ba0d49ce5da8d2356f4e41"
                alt=""
              />
            </div>
            <div className="px-5 pb-5 pt-2">
              <h1 className="font-semibold">Effective communication </h1>

              <div className="flex mt-2 items-center">
                <img
                  className="w-10 rounded-full mr-5"
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRY5ch3pSRAQPn_rmxgwdwPhnrrf24dqRl3VmZo5xIjpHnIusVI"
                  alt=""
                />
                <h1 className="font-semibold text-sm">Risa Williams</h1>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-blue-500 font-bold text-xl">$19.99</h1>
                  <del className="font-semibold  mt-1">$29.99</del>
                </div>
                <div>
                  <h1>⭐4.5(1550)</h1>
                  <button className="text-white bg-amber-500 hover:bg-amber-400 ease-in-out duration-300 text-center px-3 mt-1 py-1 font-semibold rounded-2xl">
                    GET NOW
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow-xl hover:shadow-2xl rounded-2xl ease-in-out duration-500">
            <div className="wrap-image">
              <img
                className="rounded-t-2xl"
                src="https://img.freepik.com/free-photo/elderly-man-with-bulbs_1134-476.jpg?w=740&t=st=1673602533~exp=1673603133~hmac=553679b970f6b29ef8444e7b158d33f4f398165201edaa9b91a269d735ba0578"
                alt=""
              />
            </div>

            <div className="px-5 pb-5 pt-2">
              <h1 className="font-semibold">
                Problem solving and critical thinking
              </h1>

              <div className="flex mt-2 items-center">
                <img
                  className="w-10 rounded-full mr-5"
                  src="https://images-na.ssl-images-amazon.com/images/I/81jO9ah8-6L.jpg"
                  alt=""
                />
                <h1 className="font-semibold text-sm">Kevin Kruse</h1>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-blue-500 font-bold text-xl">29.99</h1>
                  <del className="font-semibold  mt-1">$49.99</del>
                </div>
                <div>
                  <h1>⭐4.8(2450)</h1>
                  <button className="text-white bg-amber-500 hover:bg-amber-400 ease-in-out duration-300 text-center px-3 mt-1 py-1 font-semibold rounded-2xl">
                    GET NOW
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow-xl hover:shadow-2xl rounded-2xl ease-in-out duration-500">
            <div className="wrap-image">
              <img
                className="rounded-t-2xl"
                src="https://img.freepik.com/free-photo/elderly-man-with-bulbs_1134-476.jpg?w=740&t=st=1673602533~exp=1673603133~hmac=553679b970f6b29ef8444e7b158d33f4f398165201edaa9b91a269d735ba0578"
                alt=""
              />
            </div>

            <div className="px-5 pb-5 pt-2">
              <h1 className="font-semibold">
                Problem solving and critical thinking
              </h1>

              <div className="flex mt-2 items-center">
                <img
                  className="w-10 rounded-full mr-5"
                  src="https://images-na.ssl-images-amazon.com/images/I/81jO9ah8-6L.jpg"
                  alt=""
                />
                <h1 className="font-semibold text-sm">Kevin Kruse</h1>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-blue-500 font-bold text-xl">29.99</h1>
                  <del className="font-semibold  mt-1">$49.99</del>
                </div>
                <div>
                  <h1>⭐4.8(2450)</h1>
                  <button className="text-white bg-amber-500 hover:bg-amber-400 ease-in-out duration-300 text-center px-3 mt-1 py-1 font-semibold rounded-2xl">
                    GET NOW
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow-xl hover:shadow-2xl rounded-2xl ease-in-out duration-500">
            <div className="wrap-image">
              <img
                className="rounded-t-2xl"
                src="https://img.freepik.com/free-photo/top-view-smilimg-business-team-sitting-round-table-white-background-concept-successful-transaction_155003-16562.jpg?w=740&t=st=1673602201~exp=1673602801~hmac=096c11eb5f64fc9ecbb2fc37fc80c527c12e880361ba0d49ce5da8d2356f4e41"
                alt=""
              />
            </div>

            <div className="px-5 pb-5 pt-2">
              <h1 className="font-semibold">Effective communication </h1>

              <div className="flex mt-2 items-center">
                <img
                  className="w-10 rounded-full mr-5"
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRY5ch3pSRAQPn_rmxgwdwPhnrrf24dqRl3VmZo5xIjpHnIusVI"
                  alt=""
                />
                <h1 className="font-semibold text-sm">Risa Williams</h1>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-blue-500 font-bold text-xl">$19.99</h1>
                  <del className="font-semibold  mt-1">$29.99</del>
                </div>
                <div>
                  <h1>⭐4.5(1550)</h1>
                  <button className="text-white bg-amber-500 hover:bg-amber-400 ease-in-out duration-300 text-center px-3 mt-1 py-1 font-semibold rounded-2xl">
                    GET NOW
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow-xl hover:shadow-2xl rounded-2xl ease-in-out duration-500">
            <div className="wrap-image">
              <img
                className="rounded-t-2xl"
                src="https://img.freepik.com/free-photo/sad-female-workaholic-keeps-hands-chin-busy-making-project-work-studies-papers-wears-elegant-white-shirt-sits-desktop-unknown-people-stretch-hands-with-notes-alarm-clock-smartphone_273609-26174.jpg?w=740&t=st=1673601887~exp=1673602487~hmac=a5c57ce73a8fbd5954d51baa8982f0904d52a009f9fbd63229976b086a310798"
                alt=""
              />
            </div>

            <div className="px-5 pb-5 pt-2">
              <h1 className="font-semibold">
                Time management and organization
              </h1>

              <div className="flex mt-2 items-center">
                <img
                  className="w-10 rounded-full mr-5"
                  src="https://www.jordanharbinger.com/wp-content/uploads/2018/10/108-james-clear-showart.jpg"
                  alt=""
                />
                <h1 className="font-semibold text-sm">James Clear </h1>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-blue-500 font-bold text-xl">Free</h1>
                  <del className="font-semibold  mt-1">$9.99</del>
                </div>
                <div>
                  <h1>⭐4.8(2450)</h1>
                  <button className="text-white bg-amber-500 hover:bg-amber-400 ease-in-out duration-300 text-center px-3 mt-1 py-1 font-semibold rounded-2xl">
                    GET NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
