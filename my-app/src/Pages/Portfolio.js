import React from 'react';


export default function Portfolio() {
  
    return (
      <div className=" flex min-h-screen">
      <div className="w-1/4 bg-yellow-500 flex flex-col items-center py-8">
      <img  className="h-24 w-24 rounded-full mb-4" src="https://i.ibb.co/4FKbFsq/IMG-0185-1.jpg"  alt='' border="0" />
        <nav className="flex flex-col space-y-4">
          <a href="/" className="text-white text-xl">Home</a>
          <a href="/about" className="text-white text-xl">About Me</a>
          <a href="/resume" className="text-white text-xl">Resume</a>
          <a href="/portfolio" className="text-white text-xl">Portfolio</a>
          <a href="/testimonials" className="text-white text-xl">Testimonials</a>
          <a href="/contact" className="text-white text-xl">Contact</a>
        </nav> 
      </div>
       

        <div className="w-3/4 p-8 bg-gray-100">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">My Portfolio</h1> <br/>
                <p className="text-lg text-gray-600">Showcasing Four Years of Front-End Development Excellence</p>
            </header>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Introduction</h2>
                <p className="text-gray-700">
                    Hi, I'm Masthan Shaik, a passionate Front-End Developer with four years of experience in creating dynamic,<br/>
                    responsive, and user-friendly web applications. With a strong background in React.js and a keen eye for design,<br/>
                     I have successfully delivered numerous projects that enhance user experiences and meet business goals.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Skills</h2>
                <ul className="list-disc  list-inside text-gray-700 ">
                    <li>HTML5</li>
                    <li>CSS3 </li>
                    <li>JavaScript (ES6+)</li>
                    <li>React.js</li>
                    <li>React Router</li>
                    <li>REST APIs</li>
                    <li>Redux</li>
                    <li>React Hooks</li>
                    <li> NPM </li>
                    <li>Next.js</li>
                    <li>Bootstrap</li>
                    <li>Tailwind CSS</li>
                    <li>Responsive Design</li>
                    <li>Web Accessibility</li>
                    <li>Version Control (Git)</li>
                    <li>Agile Methodologies</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Professional Experience</h2>
                <div className="bg-white border rounded-2xl shadow-lg p-6 mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">ZakBoys IT Company (Current)</h3>
                    <p className="text-gray-600">Position: Front-End Developer<br />Duration: [May - 2020] – Present</p>
                    <h4 className="text-xl font-semibold text-gray-800 mt-4">Responsibilities:</h4>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Develop and maintain user-friendly web applications using React.js.</li>
                        <li>Collaborate with designers and back-end developers to create seamless UI/UX.</li>
                        <li>Optimize applications for maximum speed and scalability.</li>
                        <li>Implement responsive designs ensuring compatibility across various devices and browsers.</li>
                        <li>Participate in code reviews and agile ceremonies.</li>
                    </ul> <br/>
                    
                </div>

                
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Projects Showcase</h2>
                <div className="bg-white border rounded-2xl shadow-lg p-6 mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">Project 1:  Employee Attendance Payroll Management (EAPM)</h3>
                    <p className="text-gray-700">
                        - Employee Attendance Payroll Management (EAPM) is a software solution that streamlines employee attendance tracking, payroll 
                          processing,and expense management for companies.<br />
                        - Role: Front-End Developer<br />
                        - Highlights: Designed an intuitive user interface that boosted sales conversion by 25%.
                    </p>
                </div>

                <div className="bg-white border rounded-2xl shadow-lg p-6 mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">Project 2:  Karkinos Healthcare Admin Portal</h3>
                    <p className="text-gray-700">
                        - Description: Developed the Admin Portal Dashboard for Karkinos Healthcare, a comprehensive healthcare management system.<br />
                        - Role: Front-End Developer<br />
                        - Highlights: Ensured smooth real-time communication with a scalable architecture.
                    </p>
                </div>

               
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Testimonials</h2>
                <div className="bg-white border rounded-2xl shadow-lg p-6">
                    <p className="text-gray-700">
                        - "Masthan's expertise in React.js transformed our project. His attention to detail and commitment to quality are matched." –  ZakBoys IT Company.<br />
                        - "Working with Masthan was a pleasure. He brought innovative solutions to the table and delivered beyond our expectations." –  ZakBoys IT Company.<br />
                       
                    </p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Education</h2>
                <div className="bg-white border rounded-2xl shadow-lg p-6">
                    <p className="text-gray-700">
                        Degree: Bachelor of Science in Computer Science<br />
                        Institution: [Sri Harshini Degree College,Ongole]<br />
                        Graduation Year: [2020]
                    </p>
                </div>
            </section>

           

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                <div className="bg-white border rounded-2xl shadow-lg p-6">
                    <p className="text-gray-700">
                        Email: [Skmasthan.1999@gmail.com]<br />
                      <a href="https://www.linkedin.com/in/sk-masthan/">  LinkedIn: [sk-masthan] </a> <br />
                    </p>
                </div>
            </section>
        </div>
        </div>
    );
}