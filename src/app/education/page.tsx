import React from 'react';


const EducationPage = () => {
  const educationData = [
    { year: '2021 - 2022', title: 'Matric', description: 'Completed school with a focus on science and mathematics.' },
    { year: '2023 - 2024', title: 'Intermediate', description: 'Completed College with a focus on sci (Medical) at G.I.S.A.C.C.' },
    { year: '2024 - 2025', title: 'Artificial Intelligency', description: 'Started my journey in AI at GIAIC, gaining valuable experience.' },
    { year: '2025 - 2026', title: 'Bacholor Science', description: 'Start My Learning Journey In Science and Technology at University' },
  ];

  return (
    <section className="education py-20 bg-[#1C315E] text-white">
    <h1 className="animate-fade-in-top text-5xl mb-10 text-center font-bold">
                My <span className="text-cyan-400">Education</span>
            </h1>
    <div className="timeline-items relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full fixed-glow bg-[#00ffee] z-0"></div>
        {educationData.map((item, index) => (
          <div key={index} className={`timeline-item relative mb-10 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
            <div className="timeline-dot absolute bg-[#00ffee] rounded-full h-5 w-5 shadow-lg top-4 left-1/2 transform -translate-x-1/2 z-10"></div>
            <div className={`timeline-date font-bold text-[#00ffee] animate-fade-in-top text-xl mb-2 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
              {item.year}
            </div>
            <div className={`timeline-content relative inline-block ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} mx-4 animate-fade-in-bottom bg-[#0B2447] border-2 border-[#00ffee] rounded-lg p-5 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#00ffee]`}>
              <h3 className="text-lg font-semibold animate-fade-in-top">{item.title}</h3>
              <p className="italic text-gray-300 animate-fade-in-top">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationPage;
