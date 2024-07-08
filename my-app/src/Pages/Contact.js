import React from 'react';
import { IoLogoLinkedin } from "react-icons/io";
import { IoPerson } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="flex h-screen ">
      <div className="w-1/4 bg-yellow-500 flex flex-col items-center py-8">
        <img src="https://i.ibb.co/4FKbFsq/IMG-0185-1.jpg" alt="Profile" className="rounded-full w-24 h-24 mb-4" />
        <nav className="flex flex-col space-y-4">
          <a href="/" className="text-white text-xl">Home</a>
          <a href="/about" className="text-white text-xl">About Me</a>
          <a href="/resume" className="text-white text-xl">Resume</a>
          <a href="/portfolio" className="text-white text-xl">Portfolio</a>
          <a href="/testimonials" className="text-white text-xl">Testimonials</a>
          <a href="/contact" className=" text-white text-xl">Contact</a>
        </nav>
      </div>

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">CONTACT</h1>
        <p className="mb-4">Feel free to contact me!</p>
        <p className="mb-8 text-gray-600">
          If you have any questions, suggestions, or just want to say hello, do not hesitate to reach out.
          I'll try to respond as soon as possible.
        </p>
      
        <div className="flex pt-8 space-x-8">
         
          <div className="flex ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDpTf0mf3UUmxcaU8qQKAlOMPvfV1rm2mBozyrh7mBLurkDOYdQI1IBK_3p0AzHF30Sc&usqp=CAU" alt="Phone" 
            className="w-16 h-16 mx-auto mb-2 " />
            <p className=' m-4'>+91-8897692954</p>
          </div>
          <div className=" flex text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjvSW9F-SgglIDyk4MAH-83R1HPc-ZTxH8Pg&usqp=CAU" alt="Email" className="w-16 h-16 mx-auto mb-2" />
            <p className=' m-4'>Skmasthan.1999@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p>THANKS FOR PATIENCE!</p>
        </div>
      </div>
      
      <div className=" bg-yellow-500 flex flex-col justify-center items-center space-y-4 w-12 my-40 h-40 rounded-2xl text-white">
      <a href="https://www.linkedin.com/in/sk-masthan/" className="text-white"><IoLogoLinkedin className="h-6 w-6" /></a>
          <a href='/about' className='text-white'> <IoPerson className='h-6 w-6'/> </a>
          
      </div>
    </div>
  );
};

export default Contact;