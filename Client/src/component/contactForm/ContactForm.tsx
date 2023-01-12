import React from 'react';
import Lottie from "lottie-react";
import contact from '../contactForm/contactAssets/75663-call-center-support-lottie-animation.json'

const ContactForm = () => {
    const handleSubmitForm = (e: any) => {
        e.preventDefault()
        const name = e.target.name.value 
        const email = e.target.email.value 
        const message = e.target.message.value 
        console.log(name, email, message);

    }
    return (
        <div className="flex flex-col md:flex-row items-center justify-center w-[90%] mx-auto min-h-screen">
            <div className='flex-1 w-full'>
                <Lottie animationData={contact} ></Lottie>
            </div>
            <div className='flex-1 w-full'>
                <form onSubmit={handleSubmitForm}>
                    <div>
                        <h1 className="uppercase text-xl mb-4 text-gray-600 font-bold">Contact Us</h1>
                    </div>
                    <div>
                        <span className="uppercase text-sm text-gray-600 font-bold">Full Name
                        </span>
                        <input name='name' className="shadow form-textarea mt-1 block border rounded w-full py-2 px-3 bg-gray-300 text-gray-700 leading-tight   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            type="text" />
                    </div>
                    <div className="mt-4">
                        <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                        <input name='email' className="shadow form-textarea mt-1 block border rounded w-full py-2 px-3 bg-gray-300 text-gray-700 leading-tight   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            type="email" />
                    </div>
                    <div className="mt-4">
                        <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                        <textarea
                            name='message'
                            className="shadow form-textarea mt-1 block border rounded w-full py-2 px-3 bg-gray-300 text-gray-700 leading-tight   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
                    </div>
                    <div className="mt-4">
                        <button
                            className="uppercase text-sm font-bold tracking-wide hover:bg-indigo-400 bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;