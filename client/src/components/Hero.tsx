import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto p-4 md:p-8">
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
