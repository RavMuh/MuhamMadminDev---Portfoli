import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, Coffee, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Code2 />, value: '5+', label: 'Years of Experience' },
    { icon: <Coffee />, value: '100+', label: 'Projects Completed' },
    { icon: <Globe />, value: '20+', label: 'Countries Reached' },
    { icon: <BookOpen />, value: '50+', label: 'Articles Written' },
  ];

  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 85 },
    { name: 'AWS', level: 70 },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>

        {/* Bio Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I'm a passionate full-stack developer with over 5 years of experience in
            building web applications. I specialize in React, Node.js, and modern web
            technologies. My approach combines technical expertise with creative
            problem-solving to deliver exceptional digital experiences.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            When I'm not coding, you can find me writing technical articles,
            contributing to open-source projects, or exploring new technologies. I
            believe in continuous learning and sharing knowledge with the developer
            community.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg"
            >
              <div className="text-blue-600 mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="bg-blue-600 h-2.5 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;