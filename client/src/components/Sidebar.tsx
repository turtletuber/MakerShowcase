import { FaBars, FaChevronRight } from "react-icons/fa";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState, useEffect } from "react";

interface SidebarProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export default function Sidebar({ isMobileMenuOpen, toggleMobileMenu }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  // Set a delay before collapsing to avoid immediate collapse when moving cursor
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isHovering) {
      timer = setTimeout(() => {
        setIsExpanded(false);
      }, 300); // 300ms delay
    } else {
      setIsExpanded(true);
    }
    
    return () => clearTimeout(timer);
  }, [isHovering]);

  return (
    <aside 
      className={`w-full transition-all duration-300 ease-in-out 
                 ${isExpanded ? 'md:w-60' : 'md:w-16'} 
                 bg-primary text-white flex flex-col h-auto md:h-screen md:fixed z-40`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={`p-6 flex flex-col items-center ${isExpanded ? '' : 'md:p-3'}`}>
        <div className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center text-lg font-bold mb-4">
          MA
        </div>
        {!isExpanded && (
          <button 
            className="hidden md:flex mt-2 text-white hover:bg-primary-foreground/10 p-2 rounded-full" 
            onClick={() => setIsExpanded(true)}
          >
            <FaChevronRight className="h-3 w-3" />
          </button>
        )}
      </div>
      
      {/* Mobile Navigation Toggle */}
      <button 
        className="md:hidden px-6 py-3 bg-primary-foreground/10 text-white text-left flex justify-between items-center w-full"
        onClick={toggleMobileMenu}
      >
        Menu <FaBars className="h-4 w-4" />
      </button>
      
      {/* Navigation */}
      <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block flex-grow mt-4`}>
        <ul>
          <li>
            <a 
              href="#impact" 
              className={`flex items-center px-6 py-2 hover:bg-primary-foreground/10 transition-colors
                         ${isExpanded ? '' : 'md:justify-center md:px-3'}`}
            >
              {isExpanded ? 'Impact' : 'I'}
            </a>
          </li>
          <li>
            <a 
              href="#activity" 
              className={`flex items-center px-6 py-2 hover:bg-primary-foreground/10 transition-colors
                         ${isExpanded ? '' : 'md:justify-center md:px-3'}`}
            >
              {isExpanded ? 'Recent Activity' : 'R'}
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className={`flex items-center px-6 py-2 hover:bg-primary-foreground/10 transition-colors
                         ${isExpanded ? '' : 'md:justify-center md:px-3'}`}
            >
              {isExpanded ? 'Experience' : 'E'}
            </a>
          </li>
          <li>
            <a 
              href="#resources" 
              className={`flex items-center px-6 py-2 hover:bg-primary-foreground/10 transition-colors
                         ${isExpanded ? '' : 'md:justify-center md:px-3'}`}
            >
              {isExpanded ? 'Resource Library' : 'L'}
            </a>
          </li>
          <li>
            <a 
              href="#nonprofit" 
              className={`flex items-center px-6 py-2 hover:bg-primary-foreground/10 transition-colors
                         ${isExpanded ? '' : 'md:justify-center md:px-3'}`}
            >
              {isExpanded ? 'Nonprofit' : 'N'}
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`flex items-center px-6 py-2 hover:bg-primary-foreground/10 transition-colors
                         ${isExpanded ? '' : 'md:justify-center md:px-3'}`}
            >
              {isExpanded ? 'Contact' : 'C'}
            </a>
          </li>
        </ul>
      </nav>
      
      <div className={`p-6 text-sm mt-auto hidden md:block ${isExpanded ? '' : 'md:p-3'}`}>
        <div className={`flex space-x-3 mt-3 ${isExpanded ? 'justify-center' : 'flex-col space-x-0 space-y-3'}`}>
          <a href="#" className="text-white hover:text-primary-foreground/80 transition-colors">
            <FaTiktok className="h-4 w-4" />
          </a>
          <a href="#" className="text-white hover:text-primary-foreground/80 transition-colors">
            <FaYoutube className="h-4 w-4" />
          </a>
          <a href="mailto:mike.inbox.apply@gmail.com" className="text-white hover:text-primary-foreground/80 transition-colors">
            <MdEmail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </aside>
  );
}
