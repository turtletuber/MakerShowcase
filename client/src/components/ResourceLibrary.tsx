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
    <section id="resources" className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Resource Library</h2>
        <p className="text-gray-600 mb-8">Access articles, video tutorials, downloadable materials, and other educational resources for STEAM learning.</p>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button 
            variant={activeCategory === "All" ? "default" : "outline"} 
            onClick={() => setActiveCategory("All")}
          >
            All
          </Button>
          <Button 
            variant={activeCategory === "Curriculum" ? "default" : "outline"}
            onClick={() => setActiveCategory("Curriculum")}
          >
            Curriculum
          </Button>
          <Button 
            variant={activeCategory === "Video" ? "default" : "outline"}
            onClick={() => setActiveCategory("Video")}
          >
            Video
          </Button>
          <Button 
            variant={activeCategory === "Research" ? "default" : "outline"}
            onClick={() => setActiveCategory("Research")}
          >
            Research
          </Button>
        </div>
        
        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <a key={index} href="#" className="block group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="relative h-48">
                  <img 
                    src={resource.image} 
                    alt={resource.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <span className="text-xs font-semibold bg-primary px-2 py-1 rounded">
                      {resource.category}
                    </span>
                    <h3 className="text-lg font-semibold mt-2">{resource.title}</h3>
                    <p className="text-sm text-white/80">{resource.description}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
            Request Custom Curriculum
          </Button>
        </div>
      </div>
    </section>
  );
}
