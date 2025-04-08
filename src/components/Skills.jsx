import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaNodeJs,
  FaAws,
  FaServer,
  FaDatabase,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { SiMicrosoftazure, SiAzuredevops, SiDotnet } from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    icon: <FaServer className="text-blue-400" />,
    skills: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
    ],
  },
  {
    category: "Backend",
    icon: <FaDatabase className="text-green-400" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      
    ],
  },
  {
    category: "DevOps",
    icon: <FaServer className="text-purple-400" />,
    skills: [
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
      { name: "AWS", icon: <FaAws className="text-orange-400" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
      { name: "Azure", icon: <SiMicrosoftazure className="text-blue-500" /> },
      { name: "Azure DevOps", icon: <SiAzuredevops className="text-blue-700" /> },
    ],
  },
];

const Skills = () => {
  // VS Code-inspired styling
  const vscodeStyles = {
    background: "#1e1e1e",
    sidebar: "#252526",
    activeText: "#ffffff",
    inactiveText: "#858585",
    highlight: "#0e639c",
    border: "#474747",
  };

  return (
    <div 
      className="min-h-screen py-16 px-4 md:px-8" 
      style={{ backgroundColor: vscodeStyles.background }}
    >
      <div className="max-w-6xl mx-auto">
        {/* VS Code-like title bar */}
        <div className="flex items-center mb-8 border-b" style={{ borderColor: vscodeStyles.border }}>
          <div className="flex space-x-2 px-4 py-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="ml-4 text-sm" style={{ color: vscodeStyles.inactiveText }}>
            skills.tsx
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* VS Code-like sidebar */}
          <div 
            className="w-full md:w-64 p-4 rounded-lg" 
            style={{ 
              backgroundColor: vscodeStyles.sidebar,
              border: `1px solid ${vscodeStyles.border}`
            }}
          >
            <h3 className="text-lg font-medium mb-4" style={{ color: vscodeStyles.activeText }}>
              EXPLORER
            </h3>
            <div className="space-y-2">
              {skillsData.map((section) => (
                <div key={section.category} className="flex items-center text-sm">
                  <span className="mr-2">📁</span>
                  <span style={{ color: vscodeStyles.activeText }}>
                    {section.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills content area */}
          <div className="flex-1">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2" style={{ color: vscodeStyles.activeText }}>
                // My Tech Stack
              </h2>
              <p className="text-sm" style={{ color: vscodeStyles.inactiveText }}>
                Technologies I've worked with professionally and personally
              </p>
            </div>

            {/* Skills sections */}
            <div className="space-y-12">
              {skillsData.map((section) => (
                <div key={section.category}>
                  <div className="flex items-center mb-6">
                    {section.icon}
                    <h3 
                      className="ml-2 text-xl font-semibold" 
                      style={{ color: vscodeStyles.activeText }}
                    >
                      {section.category}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {section.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -5 }}
                        className="p-4 rounded-lg flex flex-col items-center"
                        style={{ 
                          backgroundColor: vscodeStyles.sidebar,
                          border: `1px solid ${vscodeStyles.border}`
                        }}
                      >
                        <div className="text-3xl mb-2">{skill.icon}</div>
                        <span style={{ color: vscodeStyles.activeText }}>
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Status bar */}
            <div 
              className="mt-12 p-2 text-xs flex justify-between items-center rounded"
              style={{ 
                backgroundColor: vscodeStyles.sidebar,
                border: `1px solid ${vscodeStyles.border}`,
                color: vscodeStyles.inactiveText
              }}
            >
              <div>main*</div>
              <div>UTF-8</div>
              <div>TypeScript</div>
              <div>© 2023</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;