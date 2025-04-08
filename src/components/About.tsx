
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-50 section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="h-1 w-20 bg-primary mb-8"></div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-700 mb-4">
                Hello! I'm Tun Tun Nyein, a software engineer with a passion for creating 
                clean, efficient, and user-friendly applications. My journey in software 
                development began over 5 years ago, and I've been in love with coding ever since.
              </p>
              <p className="text-gray-700 mb-4">
                I focus on building scalable applications with modern technologies
                and best practices. I enjoy tackling complex problems and turning them into 
                simple, elegant solutions.
              </p>
              <p className="text-gray-700">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge through technical writing and mentoring.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Education & Experience</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-medium">Senior Software Engineer</h4>
                  <p className="text-gray-500">Tech Company Inc. | 2021 - Present</p>
                </div>
                <div className="border-l-2 border-gray-300 pl-4">
                  <h4 className="font-medium">Software Engineer</h4>
                  <p className="text-gray-500">Digital Solutions LLC | 2018 - 2021</p>
                </div>
                <div className="border-l-2 border-gray-300 pl-4">
                  <h4 className="font-medium">BSc Computer Science</h4>
                  <p className="text-gray-500">University of Technology | 2014 - 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
