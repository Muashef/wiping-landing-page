import React from 'react';
import {BsEmojiSmile} from 'react-icons/bs'



function GetInTouch() {
    return (
        <div className='bg-white py-22 px-4'>
            <div className='w-full h-full flex flex-col items-center justify-center mx-auto '>
                <h1 className='text-[#2F80ED] text-3xl font-bold text-center mb-2'>Get In Touch</h1>
                <p className='flex flex-row items-center justify-center text-center text-black font-medium gap-2'>Don't be shy, feel free to reach out to us. <BsEmojiSmile /> </p>
                <form className='w-[full] lg:w-[70%] mt-10'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
                        <input type="text" placeholder="Name" className='bg-[#EFEFEF] py-3 px-4 outline-none rounded-md md:rounded-none' />
                        <input type="email" placeholder="Email" className='bg-[#EFEFEF] py-3 px-4 outline-none rounded-md md:rounded-none' />
                        <textarea
                        className="w-full md:col-span-2 bg-[#EFEFEF] outline-none py-2 px-4 rounded-md md:rounded-none"
                        placeholder="Message"
                        cols="30"
                        rows="10"
                        ></textarea>
                    </div>
                    <button className="mt-5 rounded-2xl shadow-md py-4 w-[222px] text-white bg-[#2F80ED] flex items-center justify-center mx-auto gap-2">
                        <span>SEND</span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default GetInTouch