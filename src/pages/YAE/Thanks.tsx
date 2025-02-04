// import React from 'react'

import { MdVerified } from "react-icons/md";

const Thanks = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[90%] md:w-[50%] lg:w-[35%]  rounded-[20px] p-4 flex flex-col justify-center items-center gap-2 shadow-lg bg-gray-300">
            <div className="text-[100px]">
                <MdVerified />
            </div>

            <p className="font-bold text-[20px]">Registration Successful</p>

            <p className="text-center text-[15px]">Thank you for taking the time to fill this form.</p>

            <p className="text-center text-[15px]">Keep checking your mail for your Admission status</p>

        </div>
    </div>
  )
}

export default Thanks