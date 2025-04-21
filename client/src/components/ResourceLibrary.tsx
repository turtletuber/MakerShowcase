import { useState } from "react";
import { Button } from "@/components/ui/button";
import { resources } from "@/lib/data";

type ResourceCategory = "All" | "Curriculum" | "Video" | "Research";

export default function ResourceLibrary() {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>("All");
  
  const filteredResources = activeCategory === "All" 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  return (
    <section id="resources" className="bg-white py-12 relative pattern-dots">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Resource Library</h2>
        <p className="text-gray-600 mb-8">Access articles, video tutorials, downloadable materials, and other educational resources for STEAM learning.</p>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button 
            variant={activeCategory === "All" ? "default" : "outline"} 
            onClick={() => setActiveCategory("All")}
            className={`rounded-full ${activeCategory === "All" ? "shadow-md" : ""}`}
          >
            All
          </Button>
          <Button 
            variant={activeCategory === "Curriculum" ? "default" : "outline"}
            onClick={() => setActiveCategory("Curriculum")}
            className={`rounded-full ${activeCategory === "Curriculum" ? "shadow-md" : ""}`}
          >
            Curriculum
          </Button>
          <Button 
            variant={activeCategory === "Video" ? "default" : "outline"}
            onClick={() => setActiveCategory("Video")}
            className={`rounded-full ${activeCategory === "Video" ? "shadow-md" : ""}`}
          >
            Video
          </Button>
          <Button 
            variant={activeCategory === "Research" ? "default" : "outline"}
            onClick={() => setActiveCategory("Research")}
            className={`rounded-full ${activeCategory === "Research" ? "shadow-md" : ""}`}
          >
            Research
          </Button>
        </div>
        
        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <a key={index} href="#" className="block group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all group-hover:shadow-xl group-hover:-translate-y-1 relative">
                <div className="absolute inset-0 bg-primary/5 pattern-light opacity-50"></div>
                <div className="relative h-48">
                  <img 
                    src={resource.image} 
                    alt={resource.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <span className="text-xs font-semibold bg-primary px-3 py-1 rounded-full shadow-sm inline-block">
                      {resource.category}
                    </span>
                    <h3 className="text-lg font-semibold mt-2">{resource.title}</h3>
                    <p className="text-sm text-white/90">{resource.description}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/5 rounded-full shadow-sm"
          >
            Request Custom Curriculum
          </Button>
        </div>
      </div>
    </section>
  );
}
