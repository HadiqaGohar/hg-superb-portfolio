'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        // You can add any functionality you want here when a link is clicked
        // For example, close the mobile menu if it's open
        if (isOpen) {
            toggleMenu();
        }
    };

    return (
        <div className='bg-[#0B2447] w-full text-white '>
            <header className='md:mx-32 flex flex-row justify-between items-center p-4'>
                <div>
                    <h1 className='text-white  text:sm md:text-2xl font-bold '>Hadiqa <span className='text-[#19A7CE]'>Gohar</span></h1>
                </div>
                {/* Desktop Menu */}
                <nav className='hidden lg:flex'>
                    <ul className='text-sm md:text-xl flex flex-row gap-6 animate-slide'>
                        <li>
                            <Link href="/" passHref onClick={handleLinkClick} className='hover:text-[#19A7CE] font-medium hover:underline  underline-offset-8'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" passHref onClick={handleLinkClick} className='hover:text-[#19A7CE] font-medium hover:underline underline-offset-8'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/education" passHref onClick={handleLinkClick} className='hover:text-[#19A7CE] font-medium hover:underline underline-offset-8'>
                                Education
                            </Link>
                        </li>
                        <li>
                            <Link href="/skills" passHref onClick={handleLinkClick} className='hover:text-[#19A7CE] font-medium hover:underline underline-offset-8'>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" passHref onClick={handleLinkClick} className='hover:text-[#19A7CE] font-medium hover:underline underline-offset-8'>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" passHref onClick={handleLinkClick} className='hover:text-[#19A7CE] font-medium hover:underline underline-offset-8'>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" passHref onClick={handleLinkClick} className='hover:text-[#19A7CE] font-medium hover:underline underline-offset-8'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* "Hire Me" Button with Glowing Animation */}
                <div className='hidden lg:block animate-slide'>
                    <Link href="mailto:tasleemhadiqa76@gmail.com">
                        <button className="bg-[#19A7CE] font-bold hover:bg-transparent hover:border-[#19A7CE] hover:border-2 hover:text-[#19A7CE] text-black px-4 py-2 rounded">
                            HIRE ME
                        </button>
                    </Link>
                </div>

                {/* Hamburger Icon for Small Devices */}
                <div className='lg:hidden'>
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className='lg:hidden bg-[#0B2447]  text-white p-4'>
                    <ul className='flex flex-col gap-4'>
                        <li>
                            <Link href="/" passHref onClick={handleLinkClick} className='hover:text-[#19A7CE] font-bold'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="about" passHref onClick={handleLinkClick} className='hover:text-[#19A7CE] font-bold'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/education" passHref onClick={handleLinkClick} className='hover:text-[#19A7CE] font-bold'>
                                Education
                            </Link>
                        </li>
                        <li>
                            <Link href="/skills" passHref onClick={handleLinkClick} className='hover:text-[#19A7CE] font-bold'>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" passHref onClick={handleLinkClick} className='hover:text-[#19A7CE] font-bold'>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" passHref onClick={handleLinkClick} className='hover:text-[#19A7CE] font-bold'>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" passHref onClick={handleLinkClick} className='hover:text-[#19A7CE] font-bold'>
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Hire Me Button with Glowing Animation in Mobile */}
                    <div className='mt-4'>
                    <Link href="mailto:tasleemhadiqa76@gmail.com">
                        <button className="bg-[#19A7CE] w-full font-bold  hover:bg-transparent hover:border-[#19A7CE] hover:border-2 hover:text-[#19A7CE] text-black px-4 py-2 rounded">
                            Hire Me
                        </button>
                    </Link>
                    </div>
                </nav>
            )}
        </div>
    );
}

export default Navbar;
