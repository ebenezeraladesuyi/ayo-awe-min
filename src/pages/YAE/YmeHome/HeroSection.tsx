import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center text-center px-6 md:px-12 lg:px-24" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="relative z-10 text-white max-w-3xl "
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-[70px] md:mt-[50px]">
          Equip. Train. Impact. 
        </h1>

        <p className="mt-4 text-lg md:text-xl">
          Join the <span className="text-[#FFA500] font-bold">YOUNG MINISTERS EQUIP</span> program and be prepared for the unique calling God has placed on your life.
        </p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6"
        >
          <Link 
            to="/yme/register">
           <button className="px-6 py-3 bg-[#FFA500] hover:bg-[fff] text-black font-bold text-lg rounded-lg shadow-md transition duration-800 ease-in-out animate-bounce mt-[20px"
            >
                Apply Now
            </button>
          </Link>

          <p className="mt-[20px] text-[13px] md:text-[15px] font-semibold">(Commitment Fee: ₦20,000)</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
