import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Impact() {
  return (
    <section id="impact" className="bg-white py-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="rounded-xl overflow-hidden mb-8">
          <AspectRatio ratio={16/9} className="bg-muted">
            <img 
              src="https://maker-portfolio.vercel.app/_next/image?url=%2Fimages%2Fhero-action.png&w=1200&q=75" 
              alt="Mike teaching kids STEM activities" 
              className="w-full object-cover h-full"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
