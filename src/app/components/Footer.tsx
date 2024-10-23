import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#0B2447] text-white py-4 shadow-xl">
        
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-lg">© {new Date().getFullYear()} Hadiqa Gohar. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://www.linkedin.com/in/your-linkedin" className="hover:text-[#19A7CE]" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/your-github" className="hover:text-[#19A7CE]" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/your-instagram" className="hover:text-[#19A7CE]" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/your-facebook" className="hover:text-[#19A7CE]" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
