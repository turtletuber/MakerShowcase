import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import RecentActivity from "@/components/RecentActivity";
import Experience from "@/components/Experience";
import ResourceLibrary from "@/components/ResourceLibrary";
import Nonprofit from "@/components/Nonprofit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen pattern-light">
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      
      <main className="flex-grow md:ml-60 w-full">
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
