import { Button } from "@/components/ui/button";
import { FaBars } from "react-icons/fa";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface SidebarProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export default function Sidebar({ isMobileMenuOpen, toggleMobileMenu }: SidebarProps) {
  return (
    <aside className="w-full md:w-72 bg-primary text-white flex flex-col">
      <div className="p-6 flex flex-col items-center md:items-start">
        <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center text-xl font-bold mb-4">
          MA
        </div>
        <h1 className="text-2xl font-bold">Mike Amato</h1>
        <p className="text-primary-foreground/80 mt-1">STEM Educator | Engineer | Ed-Tech Consultant</p>
        
        <p className="text-sm text-primary-foreground/90 mt-4">
          Taking intimidating concepts and making them tactile, playful, and deeply human. Passionate about making engineering education fun, memorable, and inclusive for all learners.
        </p>
        
        <div className="grid grid-cols-3 gap-4 w-full mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">1,500+</div>
            <div className="text-xs text-primary-foreground/80">Students Reached</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold">200+</div>
            <div className="text-xs text-primary-foreground/80">STEM Kits Distributed</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold">30+</div>
            <div className="text-xs text-primary-foreground/80">Workshops Hosted</div>
          </div>
        </div>
        
        <Button className="mt-6 w-full bg-white text-primary hover:bg-white/90">
          Get in Touch
        </Button>
      </div>
      
      {/* Mobile Navigation Toggle */}
      <button 
        className="md:hidden px-6 py-3 bg-primary-foreground/10 text-white text-left flex justify-between items-center w-full"
        onClick={toggleMobileMenu}
      >
        Menu <FaBars className="h-4 w-4" />
      </button>
      
      {/* Navigation */}
      <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block flex-grow mt-8`}>
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
        <div className="flex space-x-3 mt-3">
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
