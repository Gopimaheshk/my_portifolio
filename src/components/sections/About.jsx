export const About = () => {
    const frontendSkills = ["React.js", "Tailwind CSS", "JavaScript"];
    const backendSkills = ["Node.js", "Express.js", "MongoDB","Java","AWS"];

  return (
    <section 
    id="about" 
    className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">About Me</h2>
        <div 
        className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-400 mb-6">
             I’m Gopi Mahesh Kamidi — a frontend developer and competitive programmer 
             passionate about building responsive, accessible, and high-performance web 
             interfaces. With a strong foundation in React.js, Tailwind CSS, and JavaScript, 
             I turn ideas into scalable, pixel-perfect experiences. I’ve also explored backend 
             tools like Node.js and enjoy solving algorithmic challenges that sharpen my 
             problem-solving skills. Always learning, always building — let’s create something impactful.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="rounded-xl p-6 hover:-translate-y-1 transition">
                 <h3 className="text-xl font-bold mb-4">Frontend</h3>
                 <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((tech, index) => (
                       <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                          {tech}
                        </span>
                    ))}
                 </div>
             </div>
             <div className="rounded-xl p-6 hover:-translate-y-1 transition">
                 <h3 className="text-xl font-bold mb-4">Backend</h3>
                 <div className="flex flex-wrap gap-2">
                    {backendSkills.map((tech, index) => (
                       <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                          {tech}
                        </span>
                    ))}
                 </div>
             </div>
          </div>
        </div>
        <h3 className="text-2xl font-bold mt-12 mb-6">More About Me</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
           <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🎓Education</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>
                    <strong>Bachelor of Technology</strong> - Aditya University (2022-2026)
                      <br /> in Computer Science
                </li>
                 <li>
                    <strong>Intermediate</strong> - JNV (2020-2022)
                      <br /> PCMB - 83 percent
                </li>
                 <li>
                    <strong>Metriculation</strong> - JNV (2019-2020)
                        <br /> 86 percent
                </li>
                
            </ul>
           </div>
           <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">💼Work Experience</h3>
            <div className="list-disc list-inside text-gray-400 space-y-2">
               <div>
                  <strong>Frontend Developer Intern</strong> - Academor Company (2023)
                  <br /> Worked on building responsive web applications using React.js and Tailwind CSS.
               </div>
               <div>
                  <strong>MERN Stack Intern</strong> - SmartBridge Company (2025)
                  <br /> Assisted in developing RESTful APIs using Node.js and Express.js.
               </div>
            </div>
           </div>
        </div>
      </div>
    </section>
  );
};
