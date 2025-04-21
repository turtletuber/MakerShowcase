import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-white hero-container py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Mike Amato</h1>
              <p className="text-xl text-gray-600 mt-2">STEM Educator | Engineer | Ed-Tech Consultant</p>
            </div>
            
            <p className="text-lg text-gray-700">
              Taking intimidating concepts and making them tactile, playful, and deeply human. Passionate about making engineering education fun, memorable, and inclusive for all learners.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white shadow-md rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary">1,500+</div>
                <div className="text-xs text-gray-500">Students Reached</div>
              </div>
              
              <div className="bg-white shadow-md rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-xs text-gray-500">STEM Kits Distributed</div>
              </div>
              
              <div className="bg-white shadow-md rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary">30+</div>
                <div className="text-xs text-gray-500">Workshops Hosted</div>
              </div>
            </div>
            
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full font-medium px-8">
              Get in Touch
            </Button>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <AspectRatio ratio={4/3} className="bg-muted">
                <img 
                  src="https://maker-portfolio.vercel.app/_next/image?url=%2Fimages%2Fhero-action.png&w=1200&q=75" 
                  alt="Mike teaching kids STEM activities" 
                  className="w-full object-cover h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
