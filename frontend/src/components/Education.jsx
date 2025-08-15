import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      logo: "/nust.png",
      institution: "National University of Sciences and Technology",
      degree: "Bachelors in Electrical Engineering",
      period: "Current",
      description: "Electrical Engineering student at NUST with a proven ability to combine hardware and software skills to develop effective solutions. Core competencies include embedded systems development, programming in Python and C++, and a strong interest in leveraging AI/ML technologies.",
      achievements: ["Youth Parliament'24 : Best Delegate", "Undersecretary General for MCSMUN'24", "Research Assistant"]
    },
    {
      logo: "/akhss.jpeg",
      institution: "Aga Khan Higher Secondary School",
      degree: "Science General | HSSC",
      period: "2020 - 2022",
      description: "Achieved A grade in HSSC, with a focus on Computer Science, Mathematics, and Physics.",
      achievements: ["President of Debating Society", "Assistant Marketing Director at DCMUN. , 2nd Regional IT Webinar 2021: 1st Position.", "Committee Director UNHRC Prodigy Model United Nations"]
    },
    {
      logo: "/bvs.png",
      institution: "BVS Parsi High School",
      degree: "SSC Pre-Engineering",
      period: "2018 - 2020",
      description: "Studied SSC with a strong foundation in Mathematics, Physics and Chemistry.",
      achievements: ["Student Council", "Director of Marketing at BVSMUN"]
    }
  ];

  return (
    <section id="education" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-4">Academic Journey</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            My <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Education</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-amber-600 via-amber-500 to-transparent"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full ring-4 ring-black"></div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-amber-500/30 transition-all duration-300 hover:transform hover:scale-[1.02]">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                        <img 
                          src={edu.logo} 
                          alt={edu.institution}
                          className="w-12 h-12 object-contain"
                        />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors duration-300">
                          {edu.institution}
                        </h3>
                        <p className="text-amber-400 font-medium mb-1">{edu.degree}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-amber-500 flex-shrink-0" />
                          <span className="text-sm text-gray-400">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty Space for Timeline Layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Currently pursuing excellence in Electrical Engineering at NUST
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm">
              CGPA: 3.0+
            </span>
            <span className="px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm">
              Expected Graduation: 2027
            </span>
            <span className="px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm">
              Research Focus: AI/ML
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;