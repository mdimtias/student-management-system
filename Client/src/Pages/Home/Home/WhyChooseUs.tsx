import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className='pt-20'>
            <div className=" w-full pt-16 bg-no-repeat bg-[url('https://jthemes.net/themes/html/genius-course/assets/img/banner/wc-1.jpg')]">
                <h1 className='text-5xl text-white font-bold text-center pb-10'>Why choose us?</h1>

                <div className='flex flex-col md:flex-row justify-center  items-center'>
                    <div className='w-full md:w-1/3 flex flex-col items-start'>

                        <div className='flex items-center'>
                            <img className='w-1/3' src="https://i.ibb.co/1r5CKMp/image-removebg-preview-1.png" alt="" />
                            <div className='text-white w-2/3'>
                                <h1 className='font-bold text-xl'>Expertise</h1>
                                <p className='text-blue-300/90'>Our team of educators and industry professionals have extensive knowledge and experience in their respective fields.</p>
                            </div>

                        </div>

                        <div className='flex justify-center items-center'>
                            <img className='w-1/3' src="https://i.ibb.co/QdRXZrj/image-removebg-preview-2.png" alt="" />
                            <div className='text-white w-2/3'>
                                <h1 className='font-bold text-xl'>Convenience</h1>
                                <p className='text-blue-300/90'>Our website is designed for easy navigation and access to a wide range of educational materials.</p>
                            </div>

                        </div>
                        <div className='flex justify-center items-center'>
                            <img className='w-1/3' src="https://i.ibb.co/Ns1mGZk/image-removebg-preview-3.png" alt="" />
                            <div className='text-white w-2/3'>
                                <h1 className='font-bold text-xl'>Affordability</h1>
                                <p className='text-blue-300/90'>Our courses and resources are priced competitively, making education accessible to a wider range of individuals.</p>
                            </div>

                        </div>
                    </div>

                    {/* middle image  */}
                    <div className='w-full md:w-1/4 flex items-end'>
                        <img src="https://jthemes.net/themes/html/genius-course/assets/img/banner/wc-2.png" alt="" />
                    </div>

                    <div className='text-end  w-full md:w-1/3'>
                        <div className='flex justify-center items-center '>
                            <div className='text-white w-2/3'>
                                <h1 className='font-bold text-xl'>Variety</h1>
                                <p className='text-blue-300/90'>We offer a wide range of educational materials, including courses, videos, articles, and quizzes</p>
                            </div>

                            <img className='w-1/3' src="https://i.ibb.co/T02L3S8/image-removebg-preview-4.png" alt="" />
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='text-white  w-2/3'>
                                <h1 className='font-bold text-xl'>Interactive</h1>
                                <p className='text-blue-300/90'> Our website provides interactive learning experiences, quizzes to make learning engaging and effective.</p>
                            </div>

                            <img className='w-1/3' src="https://i.ibb.co/30zDSPD/image-removebg-preview-5.png" alt="" />
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='text-white w-2/3'>
                                <h1 className='font-bold text-xl'>Support</h1>
                                <p className='text-blue-300/90'>We provide ongoing support to our students, including answering questions and providing feedback on their progress.</p>
                            </div>

                            <img className='w-1/3' src="https://i.ibb.co/TPxwWm0/image-removebg-preview-6.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhyChooseUs;