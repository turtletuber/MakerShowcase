import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import RecentActivity from "@/components/RecentActivity";
import Experience from "@/components/Experience";
import ResourceLibrary from "@/components/ResourceLibrary";
import Nonprofit from "@/components/Nonprofit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState("60px");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Update main content margin when sidebar changes
  useEffect(() => {
    const handleSidebarChange = () => {
      const sidebar = document.querySelector("aside");
      if (sidebar) {
        const width = window.getComputedStyle(sidebar).width;
        setSidebarWidth(width);
      }
    };

    // Add resize observer to track sidebar width changes
    const sidebar = document.querySelector("aside");
    if (sidebar) {
      const observer = new ResizeObserver(handleSidebarChange);
      observer.observe(sidebar);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen pattern-light">
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      
      <main 
        style={{ marginLeft: window.innerWidth >= 768 ? sidebarWidth : '0' }}
        className="flex-grow w-full transition-all duration-300 ease-in-out"
      >
        <Hero />
        <Impact />
        <RecentActivity />
        <Experience />
        <ResourceLibrary />
        <Nonprofit />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
