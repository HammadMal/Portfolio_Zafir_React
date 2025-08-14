import React from 'react';
import { User, Briefcase, Heart, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-4">About Me</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Get to <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">know me!</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-amber-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-500/10 rounded-lg">
                  <User className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Hey, I'm Muhammad Zafir — a Bachelors student who's really into building cool things with tech. 
                I've worked on AI projects, built systems that detect brain tumors, and explored some pretty 
                futuristic stuff like next-gen networks.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-amber-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-500/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">My Background</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                I'm studying Electrical Engineering at NUST and along the way, I've built an AI research assistant, 
                a brain tumor detection system, and worked on advanced communication technologies. These experiences 
                have shaped how I approach tech — not just as a tool, but as a way to make something meaningful.
              </p>
            </div>
          </div>

          {/* Right Column - Stats & Interests */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-amber-600/10 to-amber-500/5 p-6 rounded-2xl border border-amber-500/20 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-amber-400 mb-2">5+</div>
                <p className="text-gray-400 text-sm">AI/ML Projects</p>
              </div>
              <div className="bg-gradient-to-br from-amber-600/10 to-amber-500/5 p-6 rounded-2xl border border-amber-500/20 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-amber-400 mb-2">10+</div>
                <p className="text-gray-400 text-sm">Technologies</p>
              </div>
              <div className="bg-gradient-to-br from-amber-600/10 to-amber-500/5 p-6 rounded-2xl border border-amber-500/20 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-amber-400 mb-2">NUST</div>
                <p className="text-gray-400 text-sm">University</p>
              </div>
              <div className="bg-gradient-to-br from-amber-600/10 to-amber-500/5 p-6 rounded-2xl border border-amber-500/20 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-amber-400 mb-2">85%</div>
                <p className="text-gray-400 text-sm">HSSC Score</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-500/10 rounded-lg">
                  <Heart className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Beyond Code</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Outside the technical bubble, I love hosting events, leading teams, and getting involved in 
                anything that brings people together. Whether it's brainstorming wild ideas, solving real-world 
                problems, or just geeking out over something new — I'm all in.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Leadership', 'Photography', 'Video Editing', 'Public Speaking', 'Innovation'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl md:text-2xl text-gray-400 italic">
            "Always curious, always creating — and always up for something exciting."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;