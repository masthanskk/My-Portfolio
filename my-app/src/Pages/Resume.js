import React from 'react';

const Resume = () => {
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="w-1/4 bg-yellow-500 flex flex-col items-center py-8">
        <img src="https://i.ibb.co/4FKbFsq/IMG-0185-1.jpg" alt="Profile" className="rounded-full w-24 h-24 mb-4" />
        <nav className="flex flex-col space-y-4">
          <a href="/" className="text-white text-xl">Home</a>
          <a href="/about" className="text-white text-xl">About Me</a>
          <a href="/resume" className="text-white text-xl">Resume</a>
          <a href="/portfolio" className="text-white text-xl">Portfolio</a>
          <a href="/testimonials" className="text-white text-xl">Testimonials</a>
          <a href="/contact" className="text-white text-xl">Contact</a>
        </nav>
      </div>

      <div className="flex-1 p-8">
        <header className="bg-gray-800 text-white p-6 mb-8">
          <h1 className="text-3xl">Masthan Shaik</h1>
          <p>Software Engineer, Hyderabad, India</p>
          <p>Email: <a href="mailto:shahul85198@gmail.com" className="text-blue-400">skmasthan.1999@gmail.com</a> | Phone: +91-8897692954</p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Profile Summary</h2>
          <p>Experienced React Engineer with 4 years of expertise in modern web technologies. Skilled in crafting resilient, responsive, and accessible user interfaces using JavaScript (ES6+), HTML5, CSS3,  React, React Router, Redux, Context API, and Hooks.</p>
          <p>Dedicated to advancing React development education, I foster collaborative, inclusive teams that prioritize pair programming and constructive code reviews. Committed to product excellence, I thrive on collaborating with product managers, designers, and back-end developers throughout the React Software Development Life Cycle (SDLC).</p>
          <p>My development methodology emphasizes automated testing, thorough documentation, and maintainable code. Proficient in Git, Webpack, Visual Studio Code, and Agile/Scrum methodologies, I am poised to contribute effectively as a team player in dynamic and innovative tech environments.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Key Skills</h2>
          <ul className="list-none p-0">
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              <strong>Front-End Development Mastery:</strong> Expertly architected and developed significant front-end projects using React, showcasing proficiency in modern JavaScript and React's component-based architecture.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              <strong>User-Centric Testing Excellence:</strong> Utilized user feedback to craft comprehensive end-to-end test suites, employing JavaScript expertise and React testing tools for testing, thus enhancing application reliability.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              <strong>Effective Error Management:</strong> Implemented an advanced error-tracking system, leading to a substantial reduction in production bugs and highlighting adept problem-solving skills within the React ecosystem.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              <strong>Boosting Developer Productivity:</strong> Tripled developer productivity through the development of a React-compatible design system and the adoption of a utility-first CSS architecture, showcasing proficiency in CSS3, HTML5, and scalable front-end practices.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              <strong>Comprehensive React Ecosystem Proficiency:</strong> Demonstrated deep understanding and practical application of React features including Hooks, Context API, and Redux for efficient state management, thereby contributing to dynamic user interfaces.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
          <ul className="list-none p-0">
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              <strong>Languages:</strong> Proficient in JavaScript (ES6+), HTML5, CSS3, TypeScript - crucial for robust React-based front-end architectures.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              <strong>Frameworks/Libraries:</strong> Skilled in React, React Router, NextJS, Bootstrap, Tailwind CSS, Material-UI - crafting responsive and dynamic user interfaces.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              <strong>Tools:</strong> Experienced with Git, Webpack, Babel, ESLint, Visual Studio Code, NPM - tailored for efficient React project execution and maintenance.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              <strong>API Integration:</strong> Adept in integrating and managing RESTful APIs and JSON for seamless data exchange and enhanced application functionality in React projects.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              <strong>Version Control:</strong> Experienced in Git, GitHub, and Bitbucket - facilitating collaborative and error-free coding practices in React projects.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              <strong>Agile/Scrum Methodologies:</strong> Practiced in Agile and Scrum methodologies, fostering a team-oriented, flexible, and effective approach to React development project management.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <h3 className="text-xl font-bold mb-2">
             <a href='https://www.zakboys.com/' className='pl-4 rounded-xl bg-gradient-to-r from-pink-500 to-yellow transform hover:scale-105 hover:bg-[#21e065] '> ZakBoys IT Solutions</a> ,
              Hyderabad (May 2020 - Present)</h3>
          <h4 className="font-bold mb-2">Role and Responsibilities:</h4>
          <ul className="list-none p-0">
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              Frontend Development: Specializing in ReactJS and NextJS, leading the creation of dynamic and responsive user interfaces.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              Web Technologies Expertise: Utilizing JavaScript libraries, HTML, CSS, and JSON to enhance web application functionality and user experience.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              Collaborative Development: Working closely with backend teams to ensure seamless integration of front-end and back-end technologies.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              Responsive Design Implementation: Crafting web layouts that are adaptable to various devices and screen sizes, ensuring a seamless user experience.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              Cross-Browser Compatibility: Ensuring that web applications function consistently across different browsers.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              Code Maintenance: Writing clean, maintainable code and conducting regular code reviews to uphold high-quality standards.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              Technical Problem-Solving: Identifying and resolving technical issues, enhancing the overall functionality of the applications.
            </li>
          </ul>

          <h4 className=" text-2xl font-bold mb-2">Projects:</h4>
          <h5 className="text-lg font-bold mb-1 pt-4">Project 1: Employee Attendance Payroll Management (EAPM)</h5>
          <p><strong>Role:</strong> Software Engineer</p>
          <p><strong>Project Description:</strong></p>
          <p> Employee Attendance Payroll Management (EAPM) is a software solution that streamlines employee attendance tracking, payroll 
              processing, and expense management for companies. It maintains a centralized database of employee information, tracks 
              attendance, automates payroll calculations, manages expenses, and provides insightful reports and analytics. EAPM enhances 
              efficiency and accuracy in managing workforce-related processes, contributing to better financial control and decision-making within 
              the organization. </p>

          <h5 className="text-lg font-bold mb-1 pt-4">Project 2: Karkinos Healthcare Admin Portal</h5>
          <p><strong>Role:</strong> Software Engineer</p>
          <p><strong>Project Description:</strong></p>
          <p>Developed the Admin Portal Dashboard for Karkinos Healthcare, a comprehensive healthcare management system. The dashboard 
             serves as a centralized hub for administrative tasks, including user management, hospital and location setup, and bulk patient data 
             import. The data seamlessly integrates with the Kare 360 Application, providing a cohesive healthcare ecosystem.</p>
          
          </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <ul className="list-none p-0">
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              Sri Harshini Degree College in Year-2020 with 79%.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              MPC from Board of Intermediate Education in Year-2017 with 77.7%.
            </li>
            <li className="bg-gray-100 p-4 mb-2 border-l-4 border-blue-400">
              SSC from Board of Secondary Education in Year-2015 with 73%.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;