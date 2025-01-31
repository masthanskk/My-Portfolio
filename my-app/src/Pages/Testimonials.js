import React from "react";

export default function Testimonials(){
    return(
        <div className="flex min-h-screen ">
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

            <div className="w-3/4 p-8  mt-4">
                <div className="bg-slate-300 rounded-s-2xl shadow-lg p-8">
                    <h1 className="text-4xl font-bold min-h-20 mb-4 text-gray-800">Masthan Shaik</h1>
                    <h2 className="text-2xl font-semibold mb-6 text-gray-600">
                        Front End Developer, 
                        <a href='https://www.zakboys.com/' alt='' className="text-blue-600"> ZakBoys IT Company </a>
                    </h2>

                    <h3 className="w-3/4 text-gray-700"> 
                       - With four years of experience as a Front End Developer specializing in React.js, 
                        I have successfully completed three major projects at ZakBoys IT Company, along with two personal projects.
                        At ZakBoys, I have had the opportunity to work on innovative projects that pushed my boundaries and allowed 
                        me to develop robust, user-friendly applications. My passion for creating seamless and intuitive user experiences 
                        drives me to produce high-quality, maintainable code and achieve exceptional project outcomes.
                        I am proud of my contributions to ZakBoys and look forward to continuing my journey in crafting superior front-end solutions. 
                        ZakBoys provides a supportive environment and a commitment to excellence, which I highly value.
                    </h3>
                </div>
            </div>
        </div>
    )
}