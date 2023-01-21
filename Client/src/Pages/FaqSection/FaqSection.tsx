import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const FaqSection = () => {
    return (
        <div className='pt-20 flex flex-col  w-full text-start'>
            <h1 className='text-start ml-3 md:ml-16'>Home | <span className='font-bold text-blue-500'>FAQ</span></h1>

            <h1 className='text-4xl font-bold pb-10 pt-5 ml-3 md:ml-16'>
                Frequently ask questions.
            </h1>

            <Tabs>
                <TabList className='flex w-full justify-center font-semibold '>
                    <Tab className='border focus:border-blue-600 mr-3 focus:rounded-2xl ease-in-out duration-300 p-10 rounded-2xl '>
                        <div className=' flex flex-col justify-center items-center '>
                            <img src="https://iteck-html.themescamp.com/assets/img/icons/users.png" alt="" />
                            <h1>About Account</h1>
                        </div>
                    </Tab>
                    <Tab className='border focus:border-blue-600 mr-3 focus:rounded-2xl ease-in-out duration-300 p-10 rounded-2xl '>
                        <div className=' flex flex-col justify-center items-center '>
                            <img src="https://iteck-html.themescamp.com/assets/img/icons/protect.png" alt="" />
                            <h1>Privacy Policy </h1>
                        </div>
                    </Tab>
                    <Tab className='border focus:border-blue-600 mr-3 focus:rounded-2xl ease-in-out duration-300 p-10 rounded-2xl '>
                        <div className=' flex flex-col justify-center items-center '>
                            <img src="https://iteck-html.themescamp.com/assets/img/icons/dollar.png" alt="" />
                            <h1>Refund Option</h1>
                        </div>
                    </Tab>
                    <Tab className='border focus:border-blue-600 mr-3 focus:rounded-2xl ease-in-out duration-300 p-10 rounded-2xl '>
                        <div className=' flex flex-col justify-center items-center '>
                            <img src="https://iteck-html.themescamp.com/assets/img/icons/24hour.png" alt="" />
                            <h1>Support and more</h1>
                        </div>
                    </Tab>



                </TabList>

                <TabPanel>

                    <div className='pt-10 flex flex-col justify-center items-center w-full text-start'>
                        <div tabIndex={0} className="collapse w-full  md:mx-0 md:w-1/2 collapse-arrow rounded-lg text-black bg-base-100    mb-1">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title  peer-checked:bg-blue-500 peer-checked:text-white peer-checked:rounded-lg rounded-lg font-semibold">
                                How do I login to the student management site?
                            </div>
                            <div className="collapse-content peer-checked:mt-2 text-black/70 ">
                                <p>To login to the student management site, you will need to use your student ID and password. If you are having trouble logging in, you can contact the IT department for assistance.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse w-full md:mx-0 md:w-1/2 collapse-arrow  text-black  bg-base-100 rounded-lg  mb-1">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title  peer-checked:bg-blue-500 peer-checked:text-white peer-checked:rounded-lg rounded-lg font-semibold">
                                How do I change my password?
                            </div>
                            <div className="collapse-content peer-checked:mt-2">
                                <p>To change your password, you will need to log in to the student management site and navigate to the "Settings" or "Account" section. From there, you will be able to change your password. If you have trouble changing your password, you can contact the IT department for assistance.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse w-full md:mx-0 md:w-1/2 collapse-arrow  text-black  bg-base-100 rounded-lg  mb-1">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title  peer-checked:bg-blue-500 peer-checked:text-white peer-checked:rounded-lg rounded-lg font-semibold">
                                How do I update my personal information?
                            </div>
                            <div className="collapse-content peer-checked:mt-2">
                                <p>To update your personal information, you will need to log into the student management site and navigate to the "Settings" or "Account" section. From there, you will be able to update your personal information, such as your address and phone number. If you have any trouble updating your personal information, you can contact the registrar's office for assistance.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse w-full md:mx-0 md:w-1/2 collapse-arrow  text-black  bg-base-100 rounded-lg  mb-1">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title  peer-checked:bg-blue-500 peer-checked:text-white peer-checked:rounded-lg rounded-lg font-semibold">
                                How do I contact my advisor?
                            </div>
                            <div className="collapse-content peer-checked:mt-2">
                                <p>To contact your advisor, you will need to log into the student management site and navigate to the "Advising" or "Contact" section. From there, you will be able to find your advisor's contact information, such as their email address or office phone number. If you have any trouble finding your advisor's contact information, you can contact the advising office for assistance.</p>
                            </div>
                        </div>
                    </div>

                </TabPanel>

                <TabPanel>
                    <div className='pt-10 flex flex-col justify-center items-center w-full text-start'>
                        <div tabIndex={0} className="collapse w-full md:mx-0 md:w-1/2 collapse-arrow  text-black  bg-base-100 rounded-lg  mb-1">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title  peer-checked:bg-blue-500 peer-checked:text-white peer-checked:rounded-lg rounded-lg font-semibold">
                                How do I access my grades and transcripts?
                            </div>
                            <div className="collapse-content peer-checked:mt-2">
                                <p>You can access your grades and transcripts by logging into the student management site and navigating to the "Grades" or "Transcripts" section. If you have any trouble accessing your grades, you can contact your instructor or the registrar's office for assistance.</p>
                            </div>
                        </div>

                        <div tabIndex={0} className="collapse w-full md:mx-0 md:w-1/2 collapse-arrow  text-black  bg-base-100 rounded-lg  mb-1">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title  peer-checked:bg-blue-500 peer-checked:text-white peer-checked:rounded-lg rounded-lg font-semibold">
                                How do I change my password?
                            </div>
                            <div className="collapse-content peer-checked:mt-2">
                                <p>To change your password, you will need to log in to the student management site and navigate to the "Settings" or "Account" section. From there, you will be able to change your password. If you have trouble changing your password, you can contact the IT department for assistance.</p>
                            </div>
                        </div>

                        <div tabIndex={0} className="collapse w-full md:mx-0 md:w-1/2 collapse-arrow  text-black  bg-base-100 rounded-lg  mb-1">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title  peer-checked:bg-blue-500 peer-checked:text-white peer-checked:rounded-lg rounded-lg font-semibold">
                                How do I register for classes?
                            </div>
                            <div className="collapse-content peer-checked:mt-2">
                                <p>To register for classes, you will need to log into the student management site and navigate to the "Registration" or "Classes" section. From there, you will be able to search for and select the classes you want to take. If you have any trouble registering for classes, you can contact your advisor for assistance.</p>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='pt-10 flex flex-col justify-center items-center w-full text-start'>
                        <div tabIndex={0} className="collapse w-full md:mx-0 md:w-1/2 collapse-arrow  text-black  bg-base-100 rounded-lg  mb-1">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title  peer-checked:bg-blue-500 peer-checked:text-white peer-checked:rounded-lg rounded-lg font-semibold">
                                How do I pay my tuition?
                            </div>
                            <div className="collapse-content peer-checked:mt-2">
                                <p>To pay your tuition, you will need to log into the student management site and navigate to the "Billing" or "Tuition" section. From there, you will be able to view your tuition bill and make a payment. If you have any trouble paying your tuition, you can contact the bursar's office for assistance.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse w-full md:mx-0 md:w-1/2 collapse-arrow  text-black  bg-base-100 rounded-lg  mb-1">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title  peer-checked:bg-blue-500 peer-checked:text-white peer-checked:rounded-lg rounded-lg font-semibold">
                                How do I view my class schedule?
                            </div>
                            <div className="collapse-content peer-checked:mt-2">
                                <p>To view your class schedule, you will need to log into the student management site and navigate to the "Schedule" or "Classes" section. From there, you will be able to view your current class schedule. If you have any trouble viewing your schedule, you can contact your advisor for assistance.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse w-full md:mx-0 md:w-1/2 collapse-arrow  text-black  bg-base-100 rounded-lg  mb-1">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title  peer-checked:bg-blue-500 peer-checked:text-white peer-checked:rounded-lg rounded-lg font-semibold">
                                How do I withdraw from a class?
                            </div>
                            <div className="collapse-content peer-checked:mt-2">
                                <p>To withdraw from a class, you will need to log into the student management site and navigate to the "Registration" or "Classes" section. From there, you will be able to withdraw from a class. Please keep in mind that withdrawing from a class may have an impact on your academic progress and financial aid.</p>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='pt-10 flex flex-col justify-center items-center w-full text-start'>
                        <div tabIndex={0} className="collapse w-full  md:mx-0 md:w-1/2 collapse-arrow rounded-lg text-black bg-base-100    mb-1">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title  peer-checked:bg-blue-500 peer-checked:text-white peer-checked:rounded-lg rounded-lg font-semibold">
                                How do I login to the student management site?
                            </div>
                            <div className="collapse-content peer-checked:mt-2 text-black/70 ">
                                <p>To login to the student management site, you will need to use your student ID and password. If you are having trouble logging in, you can contact the IT department for assistance.</p>
                            </div>
                        </div>


                        <div tabIndex={0} className="collapse w-full md:mx-0 md:w-1/2 collapse-arrow  text-black  bg-base-100 rounded-lg  mb-1">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title  peer-checked:bg-blue-500 peer-checked:text-white peer-checked:rounded-lg rounded-lg font-semibold">
                                How do I pay my tuition?
                            </div>
                            <div className="collapse-content peer-checked:mt-2">
                                <p>To pay your tuition, you will need to log into the student management site and navigate to the "Billing" or "Tuition" section. From there, you will be able to view your tuition bill and make a payment. If you have any trouble paying your tuition, you can contact the bursar's office for assistance.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse w-full md:mx-0 md:w-1/2 collapse-arrow  text-black  bg-base-100 rounded-lg  mb-1">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title  peer-checked:bg-blue-500 peer-checked:text-white peer-checked:rounded-lg rounded-lg font-semibold">
                                How do I view my class schedule?
                            </div>
                            <div className="collapse-content peer-checked:mt-2">
                                <p>To view your class schedule, you will need to log into the student management site and navigate to the "Schedule" or "Classes" section. From there, you will be able to view your current class schedule. If you have any trouble viewing your schedule, you can contact your advisor for assistance.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse w-full md:mx-0 md:w-1/2 collapse-arrow  text-black  bg-base-100 rounded-lg  mb-1">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title  peer-checked:bg-blue-500 peer-checked:text-white peer-checked:rounded-lg rounded-lg font-semibold">
                                How do I withdraw from a class?
                            </div>
                            <div className="collapse-content peer-checked:mt-2">
                                <p>To withdraw from a class, you will need to log into the student management site and navigate to the "Registration" or "Classes" section. From there, you will be able to withdraw from a class. Please keep in mind that withdrawing from a class may have an impact on your academic progress and financial aid.</p>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>






        </div>
    );
};

export default FaqSection;