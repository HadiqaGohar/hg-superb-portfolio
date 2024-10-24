import React from 'react';
import Image from 'next/image';

function About() {
    return (
        <div className='bg-[#1C315E] w-full h-[85vh] flex flex-col items-center justify-center p-4'>
            {/* Image Section with Circular Loader */}
            <div className='relative flex justify-center items-center mb-6'>
                <div className='absolute w-[240px] h-[240px] xl:w-[340px] xl:h-[340px] border-4 border-t-[#19A7CE] border-b-transparent border-l-transparent border-r-transparent rounded-full animate-spin-slow'></div>
                <div className='absolute w-[200px] h-[200px] xl:w-[300px] xl:h-[300px] border-4 border-t-[#19A7CE] border-b-transparent border-l-transparent border-r-transparent rounded-full animate-spin-slow'></div>
                <Image
                    src="https://image.cdn2.seaart.ai/2024-02-21/cnapr1de878c73fl2fig/623a0f7df5eba777b6db438a71567979c8f9a57f_high.webp"
                    alt="Hadiqa Gohar"
                    height={200}
                    width={200}
                    className="relative w-[200px] h-[200px] xl:w-[300px] xl:h-[300px] rounded-full outline-double outline-2 outline-[#19A7CE]"
                />
            </div>

            {/* Text Section */}
            <div className='text-center space-y-4'>
                <h1 className='md:text-4xl text-2xl mt-5 text-white font-bold animate-fade-in-top'>
                    About <span className='text-[#19A7CE]'>Me</span>
                </h1>
                <h2 className='md:text-3xl text-xl text-white font-bold animate-fade-in-top'>
                    Frontend Developer!
                </h2>
                <p className='italic md:text-xl text-4 text-white mx-4 md:mx-32 animate-fade-in-bottom delay-200'>
                    I am Hadiqa Gohar, a driven and curious senior student at the Governor Initiative, where I&apos;m immersed in the exciting world of Cloud Applied Generative AI, Web 3.0, and Metaverse. With a strong foundation in science and a passion for programming, I&apos;m constantly learning and exploring new possibilities in JavaScript, TypeScript, Python, HTML, CSS, Tailwind CSS, ReactJS, NextJS, and NodeJS. I'm excited to share my journey and projects with you; visit my social media accounts.
                </p>
            </div>
        </div>
    );
}

export default About;
