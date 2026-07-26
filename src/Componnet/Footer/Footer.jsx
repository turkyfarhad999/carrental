import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#f9f9f9]  text-gray-700 py-16 px-6 border-t-2 border-black">
      <div className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Left Section: Brand & Bio */}
        <div className="max-w-xs space-y-4">
          <h2 className="text-2xl font-black tracking-wider text-black">
            DRIVEFLEET
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Redefining automotive luxury through curated selections and uncompromising service. Precision engineered for the modern driver.
          </p>
          
          {/* Action / Social Icons (Pure SVG) */}
          <div className="flex items-center gap-4 text-gray-600 pt-2">
            {/* Share Icon */}
            <button className="hover:text-black transition-colors" aria-label="Share">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </button>

            {/* Email Icon */}
            <button className="hover:text-black transition-colors" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </button>

            {/* Phone Icon */}
            <button className="hover:text-black transition-colors" aria-label="Phone">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Section: Navigation Links & Copyright */}
        <div className="flex flex-col items-start md:items-end justify-between self-stretch gap-8 md:gap-0">
          {/* Links */}
          <nav className="flex flex-wrap gap-6 text-xs font-semibold tracking-wider text-gray-600 uppercase">
            <a href="#terms" className="hover:text-black transition-colors">
              Terms of Service
            </a>
            <a href="#privacy" className="hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a href="#support" className="hover:text-black transition-colors">
              Fleet Support
            </a>
            <a href="#contact" className="hover:text-black transition-colors">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-xs font-bold tracking-wider text-black uppercase">
            © 2024 DRIVEFLEET. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;