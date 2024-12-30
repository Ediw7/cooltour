import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="text-lg font-bold">
            <span className="text-white-400">COOLTOUR</span>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-white-400 hover:text-blue-400 transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-white-400 hover:text-blue-400 transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-white-400 hover:text-blue-400 transition-colors duration-300"
            >
              Twitter
            </a>
          </div>
        </div>


        <hr className="border-white-600 mb-4" />

 
        <div className="text-center text-sm text-white-400">
          <p>© {new Date().getFullYear()} COOLTOUR. Semua hak dilindungi.</p>
          <p>
            Dibuat dengan ❤️ oleh <span className="text-white-400">?</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
