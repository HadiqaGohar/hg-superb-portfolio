import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#0B2447] text-white py-4 shadow-xl">
        
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="md:text-lg text-sm">© {new Date().getFullYear()} Hadiqa Gohar. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://pk.linkedin.com/in/hadiqa-gohar-b64778300" className="hover:text-[#19A7CE]" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/HadiqaGohar" className="hover:text-[#19A7CE]" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/hadiqagohar12/" className="hover:text-[#19A7CE]" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://m.facebook.com/profile.php/?id=61554985182774" className="hover:text-[#19A7CE]" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
