// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import Slider from 'react-slick'; // Import the react-slick carousel
// import Image from 'next/image';

// // Define the project interface
// interface Project {
//     title: string;
//     description: string;
//     link: string;
//     image: string;
// }

// // Sample project data
// const projects: Project[] = [
//     {
//         title: 'Purple Portfolio',
//         description: 'A modern and visually stunning portfolio built with Next.js. This project showcases my skills, experience, and projects in a clean and responsive layout, ensuring an optimal viewing experience across all devices.',
//         link: 'https://nextjs-purple-portfolio-scry.vercel.app/',
//         image: 'https://img.freepik.com/premium-photo/navy-blue-background-images-background-copy-space_1179130-728606.jpg',
//     },
//     {
//         title: 'Bakery Shop',
//         description: 'An elegant e-commerce website for a bakery, designed with Next.js. This project features a user-friendly interface, seamless navigation, and an attractive product display to enhance the shopping experience.',
//         link: 'https://hg-tranding-bakery-shop.vercel.app/',
//         image: 'https://img.freepik.com/premium-photo/navy-blue-background-images-background-copy-space_1179130-728606.jpg',
//     },
//     {
//         title: 'Social Media Platform',
//         description: 'A dynamic social media application developed with Next.js, enabling users to connect, share, and interact. The project emphasizes real-time updates, user profiles, and engaging features that foster community interaction.',
//         link: 'https://social-media-2s29.vercel.app/',
//         image: 'https://img.freepik.com/premium-photo/navy-blue-background-images-background-copy-space_1179130-728606.jpg',
//     },
//     {
//         title: 'Resume Builder',
//         description: 'A user-friendly tool that allows users to create and customize their resumes. Built with HTML and CSS, this project features form validation, real-time updates, and export options to help users land their dream jobs.',
//         link: 'https://milestone-3-umber.vercel.app/',
//         image: 'https://img.freepik.com/premium-photo/navy-blue-background-images-background-copy-space_1179130-728606.jpg',
//     },
//     {
//         title: 'Royal Portfolio',
//         description: 'An editable portfolio template that allows users to showcase their work effortlessly. This HTML and Tailwind CSS project offers a sleek design, customization options, and responsive layouts to highlight user achievements.',
//         link: 'https://hackathon-assignment-iota.vercel.app/',
//         image: 'https://img.freepik.com/premium-photo/navy-blue-background-images-background-copy-space_1179130-728606.jpg',
//     },
//     {
//         title: 'Rose Portfolio',
//         description: 'A beautifully designed portfolio specifically crafted for artists and creatives. This project emphasizes aesthetics and user experience, allowing for easy navigation through artwork and projects.',
//         link: 'https://rose-portfolio-two.vercel.app/',
//         image: 'https://img.freepik.com/premium-photo/navy-blue-background-images-background-copy-space_1179130-728606.jpg',
//     },
//     {
//         title: 'Burger Shop',
//         description: 'An interactive website for a burger restaurant, designed with HTML and CSS. This project highlights menu items, online ordering capabilities, and an attractive layout that draws in customers.',
//         link: 'https://food-restaurant-henna.vercel.app/',
//         image: 'https://img.freepik.com/premium-photo/navy-blue-background-images-background-copy-space_1179130-728606.jpg',
//     },
//     {
//         title: 'Rock Paper Scissors Game',
//         description: 'A fun and interactive game built using HTML and CSS, allowing users to play Rock Paper Scissors against the computer. The project includes animations, score tracking, and a simple yet engaging user interface.',
//         link: 'https://rock-paper-scissors-game2-omega.vercel.app/',
//         image: 'https://img.freepik.com/premium-photo/navy-blue-background-images-background-copy-space_1179130-728606.jpg',
//     },
//     {
//         title: 'Contact Form',
//         description: 'An interactive contact form built with HTML and CSS that features real-time validation and a responsive design, making it easy for users to submit inquiries and feedback, I like this unique Contact Form.',
//         link: 'https://vercel.com/hadiqa-gohar-s-projects/contact-form',
//         image: 'https://img.freepik.com/premium-photo/navy-blue-background-images-background-copy-space_1179130-728606.jpg',
//     },
// ];

// // Projects Component
// const Projects = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3, // Show 3 slides at a time on large screens
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2, // Show 2 slides on tablets
//                 },
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1, // Show 1 slide on mobile
//                 },
//             },
//         ],
//     };

//     return (
//         <div className="flex flex-col h-[900px] items-center justify-center py-10 bg-[#1C315E] text-white">
//             <h1 className="animate-fade-in-top text-5xl mb-10 text-center font-bold my-8">
//                 Latest <span className="text-cyan-400">Projects</span>
//             </h1>
//             <Slider {...settings} className="w-full animate-fade-in-bottom max-w-6xl">
//                 {projects.map((project, index) => (
//                     <ProjectCard key={index} project={project} />
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// // ProjectCard Component
// const ProjectCard = ({ project }: { project: Project }) => {
//     return (
//         <motion.div
//             className="bg-[#0B2447] mx-4 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 relative" // Set relative positioning
//         >
//             <Image
//                 src={project.image}
//                 alt={project.title}
//                 width={100}
//                 height={300}
//                 className="w-full h-[300px] object-cover" // Keeps image styling
//             />
//             <div className="p-4 flex flex-col h-[95%] "> {/* Use flex to ensure consistent layout */}
//                 <h3 className="text-xl font-bold animate-fade-in-top mb-2">{project.title}</h3>
//                 <p className="animate-fade-in-bottom italic mb-4">{project.description}</p>
//                 <div className="animate-fade-in-bottom flex-grow" /> {/* This flex-grow div will take remaining space */}
//                 <button
//                     onClick={() => window.open(project.link, '_blank', 'noopener noreferrer')}
//                     className="bg-[#19A7CE] font-bold text-black px-4 py-2 rounded-lg hover:bg-transparent hover:border-[#19A7CE] hover:text-[#19A7CE] hover:border-2 transition-all"
//                 >
//                     View Project
//                 </button>
//             </div>
//         </motion.div>
//     );
// };

// export default Projects;
