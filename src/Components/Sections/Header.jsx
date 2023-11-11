import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [activeLink, setActiveLink] = useState('/');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    const navbar = document.getElementById('navbar-with-collapse');
    navbar.classList.toggle('hidden');
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-wrap sm:justify-start fixed sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
      <nav className="max-w-[90rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-none text-2xl tracking-widest font-semibold dark:text-white" id="lol">Quote Verse</Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              aria-controls="navbar-with-collapse"
              aria-label="Toggle navigation"
              onClick={toggleMobileMenu}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              
            ) : (
            <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
              )}
          </button>
        </div>
      </div>
      <div id="navbar-with-collapse" className="hidden basis-full grow sm:block text-center">
        <div className="flex flex-col gap-10 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 text-lg">
          <CustomLink to="/" activeLink={activeLink} setActiveLink={setActiveLink}>
            Home
          </CustomLink>
          <CustomLink to="/about" activeLink={activeLink} setActiveLink={setActiveLink}>
            About
          </CustomLink>
          <CustomLink to="/team" activeLink={activeLink} setActiveLink={setActiveLink}>
            Team
          </CustomLink>
        </div>
      </div>
    </nav>
    </header >
  );
}

function CustomLink({ to, children, activeLink, setActiveLink, ...props }) {
  const conditionClass = activeLink === to ? 'text-blue-500' : 'text-white text-opacity-50 hover:text-opacity-100';

  const handleLinkClick = () => {
    setActiveLink(to);
  };

  return (
    <Link to={to} onClick={handleLinkClick} {...props} className={`${conditionClass} font-medium`}>
      {children}
    </Link>
  );
}
