import { FaTiktok, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 relative">
      <div className="absolute inset-0 pattern-dots opacity-10"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center text-lg font-bold mr-3">
                MA
              </div>
              <div>
                <h2 className="text-xl font-bold">Mike Amato</h2>
                <p className="text-primary-foreground/80 text-sm">STEM Educator | Engineer | Ed-Tech Consultant</p>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
              <FaTiktok className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
              <FaYoutube className="h-5 w-5" />
            </a>
            <a href="mailto:mike.inbox.apply@gmail.com" className="text-primary-foreground/80 hover:text-white transition-colors">
              <MdEmail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center text-primary-foreground/80 text-sm">
          <div className="flex flex-wrap justify-center space-x-4 mb-4">
            <a href="#impact" className="hover:text-white transition-colors">Impact</a>
            <a href="#activity" className="hover:text-white transition-colors">Recent Activity</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#resources" className="hover:text-white transition-colors">Resource Library</a>
            <a href="#nonprofit" className="hover:text-white transition-colors">Nonprofit</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p>© {new Date().getFullYear()} Mike Amato. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
