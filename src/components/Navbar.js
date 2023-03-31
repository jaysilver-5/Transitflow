import React from "react";
import { AiOutlineDown } from 'react-icons/ai'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <div className='bg-secondary'>
    <nav className="container bg-secondary mx-auto absolute w-screen bg-cover bg-opacity-25 text-white z-50 top-28 flex items-center justify-between h-16">
      <div className="flex items-center w-full">
        <a href="#" className="px-3.5 text-[14px] border-r border-gray-400 hover:text-gray-300">
          Home
        </a>
        <a href="#" className="px-3.5 text-[14px] border-r border-gray-400 hover:text-gray-300">
          About
        </a>
    
        <a href="#" className="px-3.5 text-[14px] flex items-center border-r border-gray-400 hover:text-gray-300">
          Pages <AiOutlineDown className="" />
        </a>
    
        <a href="#" className="px-3.5 text-[14px] border-r border-gray-400 hover:text-gray-300">
          Project
        </a>
    
        <a href="#" className="px-3.5 text-[14px] hover:text-gray-300">
          Contact
        </a>
    
      </div>
      <div className="flex items-center">
        <a href="#">
          <FaFacebook className="text-2xl h-[19px] mx-4 hover:text-gray-300" />
        </a>
        <a href="#">
          <FaTwitter className="text-2xl h-[19px] mx-4 hover:text-gray-300" />
        </a>
        <a href="#">
          <FaInstagram className="text-2xl h-[19px] mx-4 hover:text-gray-300" />
        </a>
        <a href="#">
          <FaLinkedin className="text-2xl h-[19px] mx-4 hover:text-gray-300" />
        </a>
        <div className="ml-5 flex items-center text-black w-72 h-16 w-16 bg-white"><h1 className="mx-auto font-secondary font-medium">Request quote</h1></div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
