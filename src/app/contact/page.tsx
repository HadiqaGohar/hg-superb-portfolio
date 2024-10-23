import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <section className="contact py-20  bg-[#1C315E]" id="contact">
     <h1 className="animate-fade-in-top text-5xl mb-10 text-center font-bold">
                Contact <span className="text-cyan-400">Me</span>
            </h1>
      <form 
        action="https://api.web3forms.com/submit" 
        method="POST" 
        className="contact-left max-w-md mx-auto p-5 animate-fade-in-top bg-[#0B2447]  border-[#00ffee] border-2 rounded-lg shadow-lg"
      >
        <input type="hidden" name="access_key" value="671277a9-3056-46df-ae88-682920d99420" />

        <div className="input-box mb-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
            className="animate-fade-in-bottom w-full p-3 border bg-[#0B2447] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ffee]"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
            className="animate-fade-in-bottom w-full p-3 border bg-[#0B2447] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ffee] mt-2"
          />
        </div>

        <textarea 
          name="message" 
          rows={6} 
          placeholder="Your Message" 
          required 
          className="animate-fade-in-bottom w-full p-3 border bg-[#0B2447] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ffee] mb-4"
        ></textarea>
        <input 
          type="submit" 
          value="Send Message" 
          className="btn animate-fade-in-bottom delay-75 w-full  bg-[#19A7CE] font-bold italic hover:bg-transparent hover:border-[#19A7CE] hover:border-2 hover:text-[#19A7CE] text-black px-4 py-2 rounded cursor-pointer"
        />
      </form>


       
      <h1 className="animate-fade-in-top text-5xl my-8 mb-10 text-center font-bold">
                Find <span className="text-cyan-400">Me</span>
            </h1>
      <div className="btn-container flex justify-center space-x-4">
        <Link 
          href="https://github.com/HadiqaGohar" 
          className="btn animate-slide font-bold py-2 px-4 bg-[#0B2447] fixed-glow text-[#00ffee] border-2 border-[#00ffee] rounded-md transition-transform duration-300 hover:bg-[#00ffee] hover:text-[#0B2447]"
        >
          GitHub
        </Link>
        <Link 
          href="https://www.npmjs.com/~hadiqagohar" 
          className="btn py-2 px-4 animate-slide font-bold bg-[#0B2447] fixed-glow text-[#00ffee] border-2 border-[#00ffee] rounded-md transition-transform duration-300 hover:bg-[#00ffee] hover:text-[#0B2447]"
        >
          NPM
        </Link>
        <Link 
          href="https://vercel.com/hadiqa-gohar-s-projects" 
          className="btn py-2 px-4 animate-slide font-bold bg-[#0B2447] fixed-glow text-[#00ffee] border-2 border-[#00ffee] rounded-md transition-transform duration-300 hover:bg-[#00ffee] hover:text-[#0B2447]"
        >
          Vercel
        </Link>
      </div>
    </section>
  );
};

export default Contact;
