// import React from 'react'


import { FaLinkedinIn } from "react-icons/fa";
// import { FaStackOverflow } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
// import { FaSlack } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { SiBuymeacoffee } from 'react-icons/si';

const Footer = () => {


  return (
    <div className="w-full bg-footer-bg bg-center bg-cover lg:min-h-[50vh md:min-h-[40vh flex flex-col justify-center items-center gap-6 py-[30px]">
        {/* <div className="w-[90%] flex flex-col gap-5 md:gap-6">
            <h1 className="text-[25px] font-bold text-white text-center">SIGN UP FOR MY MONTHLY NEWSLETTER</h1>
            
        </div> */}

        <hr className="border-[1px] border-[#e4e4e4bc] w-[70%]" />

        <div className="flex flex-wrap w-[70%] justify-center items-center gap-3 text-black">

            {/* <a className="text-white text-[25px] md:text-[30px] mr-[5px] md:mr-[10px]" href="https://buymeacoffee.com/akeempositive">
                <SiBuymeacoffee />
            </a>  */}

            {/* <a className="text-white text-[25px] md:text-[30px] mr-[5px] md:mr-[10px]" href="https://adplist.org/mentors/akeem-suara">
                <img src={adp} alt="" className="w-[27px] lg:w-[40px]" />
            </a>  */}
            
            {/* <a className="text-white text-[25px] md:text-[30px] mr-[5px] md:mr-[10px]" href="">
                <FaStackOverflow />
            </a> */}

            <a className=" text-[25px] md:text-[30px] mr-[5px] md:mr-[10px]" href="">
                <FaTwitter />
            </a>

            {/* <a className="text-white text-[25px] md:text-[30px] mr-[5px] md:mr-[10px]" href="">
                <FaSlack />
            </a> */}

            {/* <a className="text-white text-[25px] md:text-[30px] mr-[5px] md:mr-[10px]" href="">
                <FaThreads />
            </a> */}

            <a className=" text-[25px] md:text-[30px] mr-[5px] md:mr-[10px]" href="">
                <FaFacebook />
            </a>

            <a className=" text-[25px] md:text-[30px] mr-[5px] md:mr-[10px]" href="">
                <FaInstagram />
            </a>
            
            <a className=" text-[25px] md:text-[30px] mr-[5px] md:mr-[10px]" href="https://linkedin.com/in/akeem-suara">
                <FaLinkedinIn />
            </a> 
        </div>

        <div className=" w-full flex items-center justify-center z-20">
            <h5 className="text-[13px] md:text-[17px] text-black w-[90%] text-center">
            Copyright &#169; 2025 Ayo Awe 
            </h5>
        </div>
    </div>
  )
}

export default Footer;