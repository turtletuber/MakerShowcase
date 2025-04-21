import { FaBars } from "react-icons/fa";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface SidebarProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export default function Sidebar({ isMobileMenuOpen, toggleMobileMenu }: SidebarProps) {
  return (
    <aside className="w-full md:w-60 bg-primary text-white flex flex-col h-auto md:h-screen md:fixed z-40">
      <div className="p-6 flex flex-col items-center">
        <div className="w-14 h-14 bg-white text-primary rounded-full flex items-center justify-center text-xl font-bold mb-4">
          MA
        </div>
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
          <li><a href="#impact" className="block px-6 py-2 hover:bg-primary-foreground/10 transition-colors">Impact</a></li>
          <li><a href="#activity" className="block px-6 py-2 hover:bg-primary-foreground/10 transition-colors">Recent Activity</a></li>
          <li><a href="#experience" className="block px-6 py-2 hover:bg-primary-foreground/10 transition-colors">Experience</a></li>
          <li><a href="#resources" className="block px-6 py-2 hover:bg-primary-foreground/10 transition-colors">Resource Library</a></li>
          <li><a href="#nonprofit" className="block px-6 py-2 hover:bg-primary-foreground/10 transition-colors">Nonprofit</a></li>
          <li><a href="#contact" className="block px-6 py-2 hover:bg-primary-foreground/10 transition-colors">Contact</a></li>
        </ul>
      </nav>
      
      <div className="p-6 text-sm mt-auto hidden md:block">
        <div className="flex space-x-3 mt-3 justify-center">
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
