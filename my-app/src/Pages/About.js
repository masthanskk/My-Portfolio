import React from 'react';


export default function About() {
  return (
    <div className="flex min-h-screen">   
      {/* Sidebar */}
      <div className="w-1/4 bg-yellow-500 flex flex-col items-center py-8">
      <img alt=''
       className="h-24 w-24 rounded-full mb-4"
       src="https://i.ibb.co/4FKbFsq/IMG-0185-1.jpg"
        border="0" />
        <nav className="flex flex-col space-y-4">
          <a href="/" className="text-white text-xl">Home</a>
          <a href="/about" className="text-white text-xl">About Me</a>
          <a href="/resume" className="text-white text-xl">Resume</a>
          <a href="/portfolio" className="text-white text-xl">Portfolio</a>
          <a href="/testimonials" className="text-white text-xl">Testimonials</a>
          <a href="/contact" className="text-white text-xl">Contact</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-16 bg-gray-100 flex flex-col space-y-8">
        <h1 className="text-5xl font-bold">ABOUT ME</h1>
        <h2 className="text-2xl font-bold">
          I'm <span className="text-yellow-500">Mathan Shaik </span>, Front-End / Developer
        </h2>
        <p className="text-gray-700">
        Passionate and results-driven frontend developer with over four years of experience specializing in React JS. Proficient in crafting modern, responsive web applications with a keen eye on user experience and performance optimization.
        </p>

        {/* Statistics */}
        <div className=" flex   space-x-4 ">
          <div className="bg-black  text-white p-8 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold">4+</h3>
            <p>Years Experience</p>
          </div>
          <div className="bg-black  text-white p-8 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold">2</h3>
            <p>Projects Done</p>
          </div>
          <div className="bg-black  text-white p-8 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold">2</h3>
            <p>Happy Clients</p>
          </div>
          <div className="bg-black  text-white p-8 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold">165</h3>
            <p>Followers</p>
          </div>
        </div>

      
        <div>
          <h3 className="text-2xl font-bold mb-4">What I Do?</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-yellow-500 flex mr-2 ">➤
                <h1 className='text-black'>  Seasoned Frontend Developer with 4 years of experience in React.js, specializing in building responsive, 
                     high-performance web applications. Proficient in state management, API integration, and performance optimization. 
                     Adept at collaborating with cross-functional teams to deliver exceptional user experiences. 
                </h1>
              </span> 
             
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500  flex mr-2">➤
              <p className='text-black'> As a frontend developer with 4 years of experience in React, I have extensively utilized modern styling tools
                  and frameworks such as Tailwind CSS, Bootstrap, and CSS-in-JS libraries like styled-components to create visually
                  appealing and responsive user interfaces. I have a strong proficiency in writing clean and maintainable CSS,
                  integrating design systems, and ensuring cross-browser compatibility. Additionally, I collaborate closely
                   with UX/UI designers to implement pixel-perfect designs, enhancing the overall user experience
              </p>
              </span>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
}