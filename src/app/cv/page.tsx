'use client';
import { useEffect } from 'react';
import Head from 'next/head';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const Resume = () => {
    useEffect(() => {
        const downloadButton = document.getElementById('download-cv');

        if (!downloadButton) {
            console.error("Download button not found!");
            return;
        }

        downloadButton.addEventListener('click', async (event) => {
            event.preventDefault(); 
            const resume = document.getElementById('resume-content');

            if (!resume) {
                console.error("Resume content not found!");
                return;
            }

            // Hide the download button before capturing
            downloadButton.style.display = 'none';

            try {
                // Use html2canvas to create a canvas from the resume content
                const canvas = await html2canvas(resume, { scale: 2 });
                const imgData = canvas.toDataURL('image/png');

                const pdf = new jsPDF('p', 'mm', 'a4');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                
                
                const pdfHeight = 300; 

                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('Hadiqa_Gohar_Resume.pdf');
            } catch (error) {
                console.error("Error generating PDF:", error);
            } finally {
                // Show the download button again after capturing
                downloadButton.style.display = 'inline-block';
            }
        });
    }, []);

    return (
        <div className="bg-[#1C315E] h-full min-h-screen pt-6">
            <Head>
                <title>Resume</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
           
        

            {/* Resume Content */}
            <div className='bg-[#1C315E]'>
                <div id="resume-content" className="border-[#19A7CE] bg-[#0B2447] border-2 text-gray-100 max-w-3xl mx-auto p-6 md:p-10 rounded-lg shadow-lg">
                    <h3 className="text-3xl text-[#19A7CE] font-bold mb-4 mt-6">Hadiqa Gohar</h3>
                    <p className="text-lg font-medium mb-8">Frontend Developer | Programmer | Artist</p>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold border-b-2 pb-2 border-[#19A7CE]">About Me</h2>
                        <p className="text-base mt-4">
                        Hadiqa Gohar is a skilled developer with expertise in HTML, CSS, JavaScript, Node.js, and TypeScript. She is currently focused on building projects using Python, Next.js and React.js, including a personal portfolio website and an interactive resume for a hackathon. Hadiqa is dedicated to enhancing her skills in web development and design, employing tools like Tailwind CSS for styling and ensuring responsive layouts through media queries. She values functionality, accessibility, and user experience in her projects.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold border-b-2 pb-2 border-[#19A7CE]">Education</h2>
                        <p className="mt-4"><strong>Matric of Science Biology</strong> - EABGGSS, 2021 - 2022</p>
                        <p><strong>Intermediate (pre-medical)</strong> - GISACC, 2023 - 2024</p>
                        <p><strong>Generative AI</strong> - GIAIC, 2024 - 2025</p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold border-b-2 pb-2 border-[#19A7CE]">Skills</h2>
                        <p className="mt-4">JavaScript, HTML, CSS, Node.js, TypeScript, Python, NextJS, Tailwind CSS</p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold border-b-2 pb-2 border-[#19A7CE]">Work Experience</h2>
                        <p className="mt-4"><strong>Frontend Developer Intern</strong> - GIAIC, 2024 - 2025</p>
                        <p>Worked on various frontend projects, including building responsive websites using JavaScript and Next.js.</p>
                    </div>

                    {/* Glowing Button */}
                    <a
                        href="#"
                        role="button"
                        aria-label="Download Resume"
                        className="inline-block bg-[#19A7CE] text-white py-2 px-4 rounded mt-6 transition-colors 
                        hover:bg-[#19A7CE] hover:shadow-[0_0_15px_5px_rgba(173,73,225,0.7)] 
                        focus:outline-none focus:ring-4 focus:ring-[#19A7CE]"
                        id="download-cv"
                    >
                        Download CV
                    </a>
                </div>
                
            </div>
        
      
        </div>
    );
};

export default Resume;



// git remote add origin https://github.com/HadiqaGohar/nextjs-purple-portfolio.git