import React, { useState, useEffect } from 'react';
import {motion}  from "framer-motion";
// import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
// import { FaSquareInstagram } from "react-icons/fa6";

const HeroPage: React.FC = () => {
  // Define an array of background image URLs
  const backgroundImageUrls = [
    'url("/hero/ayoawe3.jpg")',
    'url("/hero/ayoawe2.jpg")',
    'url("/hero/ayoawe.jpg")',
  ];

  // State to manage the index of the current background image
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  // Function to handle changing the background image
  const changeBackground = () => {
    setCurrentBackgroundIndex(prevIndex => (prevIndex + 1) % backgroundImageUrls.length);
  };

  useEffect(() => {
    // Automatically change background every 2 seconds
    const intervalId = setInterval(changeBackground, 3000);

    // Clean up the interval to avoid memory leaks
    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <motion.div
      className="bg-cover bg-center w-full h-screen flex justify-center items-center font-pop relative overflow-hidden"  

      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}

      style={{
        backgroundImage: backgroundImageUrls[currentBackgroundIndex],
        transition: 'background-image 2s ease',
      }}
      >
        <div className="absolute bg-black h-full w-full top-0 left-0 opacity-60 "></div>

        <div className="w-[90%] h-full z-30 text-white flex flex-col gap-4 justify-center items-center md:items-star mt-[60px] md:mt-[100px]">
            
            <h1 className='text-4xl md:text-6xl font-bold leading-tight text-center'> THE <br />AYO AWE <br /> MINISTRIES <br />INTERNATIONAL</h1>

            <motion.p
            className="mt-4 text-lg md:text-xl max-w-2xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            >
                Equipping young ministers for the work of the Kingdom.
            </motion.p>

            {/* <div className="flex gap-3 items-center">
                <motion.a href="" className="text-white text-[20px] md:text-[30px]"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
            >
                    <FaSquareInstagram />
                </motion.a>
                <motion.a href="" className="text-white text-[20px] md:text-[30px]"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.5 }}
            >
                    <FaFacebookSquare />
                </motion.a>
                <motion.a href="" className="text-white text-[20px] md:text-[30px]"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.8 }}
            >
                    <FaTwitter />
                </motion.a>
                <motion.a href="" className="text-white text-[20px] md:text-[30px] "
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3.1 }}
            >
                    <FaYoutube />
                </motion.a>
            </div>   */}


        </div>
    </motion.div>
  );
};

export default HeroPage;