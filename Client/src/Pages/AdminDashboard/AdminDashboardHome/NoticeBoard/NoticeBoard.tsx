import React from 'react';
import "./NoticeBoard.css";

const NoticeBoard = () => {
    return (
        <div className='notice-board-section bg-white rounded-md'>
            <h3 className="p-5 text-left text-2xl font-bold">Notice Board</h3>
            <div className="dashboard-all-notice overflow-y-scroll max-h-[350px] px-5 mr-5 mb-5">
                <div className="dashboard-notice border-b-2 border-[#ededed] border-solid mb-4 pb-4">
                    <div className="notice-data text-left">
                        <p className='px-4 py-2 rounded-3xl bg-[#f939a1] text-white inline-block'>12/15/2023</p>
                    </div>
                    <div className="notice-description mt-4">
                        <p className="text-[#111111] text-lg font-medium text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eius adipisci laborum laboriosam velit esse maxime debitis dolore dolorem corporis?</p>
                    </div>
                    <div className="author-info flex mt-4">
                        <p className='text-[#646464] text-base'>Md Tanbir /</p>
                        <span className='text-[#a4a4a4] text-base'>5 Days Ago</span>
                    </div>
                </div>
                <div className="dashboard-notice border-b-2 border-[#ededed] border-solid mb-4 pb-4">
                    <div className="notice-data text-left">
                        <p className='px-4 py-2 rounded-3xl bg-[#f939a1] text-white inline-block'>12/15/2023</p>
                    </div>
                    <div className="notice-description mt-4">
                        <p className="text-[#111111] text-lg font-medium text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eius adipisci laborum laboriosam velit esse maxime debitis dolore dolorem corporis?</p>
                    </div>
                    <div className="author-info flex mt-4">
                        <p className='text-[#646464] text-base'>Md Tanbir /</p>
                        <span className='text-[#a4a4a4] text-base'>5 Days Ago</span>
                    </div>
                </div>
                <div className="dashboard-notice border-b-2 border-[#ededed] border-solid mb-4 pb-4">
                    <div className="notice-data text-left">
                        <p className='px-4 py-2 rounded-3xl bg-[#f939a1] text-white inline-block'>12/15/2023</p>
                    </div>
                    <div className="notice-description mt-4">
                        <p className="text-[#111111] text-lg font-medium text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eius adipisci laborum laboriosam velit esse maxime debitis dolore dolorem corporis?</p>
                    </div>
                    <div className="author-info flex mt-4">
                        <p className='text-[#646464] text-base'>Md Tanbir /</p>
                        <span className='text-[#a4a4a4] text-base'>5 Days Ago</span>
                    </div>
                </div>
                <div className="dashboard-notice border-b-2 border-[#ededed] border-solid mb-4 pb-4">
                    <div className="notice-data text-left">
                        <p className='px-4 py-2 rounded-3xl bg-[#f939a1] text-white inline-block'>12/15/2023</p>
                    </div>
                    <div className="notice-description mt-4">
                        <p className="text-[#111111] text-lg font-medium text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eius adipisci laborum laboriosam velit esse maxime debitis dolore dolorem corporis?</p>
                    </div>
                    <div className="author-info flex mt-4">
                        <p className='text-[#646464] text-base'>Md Tanbir /</p>
                        <span className='text-[#a4a4a4] text-base'>5 Days Ago</span>
                    </div>
                </div>
                <div className="dashboard-notice border-b-2 border-[#ededed] border-solid mb-4 pb-4">
                    <div className="notice-data text-left">
                        <p className='px-4 py-2 rounded-3xl bg-[#f939a1] text-white inline-block'>12/15/2023</p>
                    </div>
                    <div className="notice-description mt-4">
                        <p className="text-[#111111] text-lg font-medium text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eius adipisci laborum laboriosam velit esse maxime debitis dolore dolorem corporis?</p>
                    </div>
                    <div className="author-info flex mt-4">
                        <p className='text-[#646464] text-base'>Md Tanbir /</p>
                        <span className='text-[#a4a4a4] text-base'>5 Days Ago</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoticeBoard;