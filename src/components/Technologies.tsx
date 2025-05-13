import React from 'react';
import { Code2, Database, Globe2, Laptop, Layout, Server } from 'lucide-react';

const Technologies = () => {
  const technologies = [
    {
      icon: <Code2 className="w-12 h-12 text-blue-600" />,
      title: "Web Development",
      description: "Modern, responsive websites built with React, Next.js, and other cutting-edge technologies."
    },
    {
      icon: <Layout className="w-12 h-12 text-purple-600" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed with user experience in mind."
    },
    {
      icon: <Server className="w-12 h-12 text-green-600" />,
      title: "Backend Development",
      description: "Robust server-side solutions using Node.js, Python, and modern frameworks."
    },
    {
      icon: <Database className="w-12 h-12 text-red-600" />,
      title: "Database Design",
      description: "Efficient database architectures using SQL and NoSQL solutions."
    },
    {
      icon: <Globe2 className="w-12 h-12 text-yellow-600" />,
      title: "API Development",
      description: "RESTful and GraphQL APIs built for scalability and performance."
    },
    {
      icon: <Laptop className="w-12 h-12 text-indigo-600" />,
      title: "Mobile Development",
      description: "Cross-platform mobile applications using React Native and Flutter."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;