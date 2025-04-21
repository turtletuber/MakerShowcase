import { Button } from "@/components/ui/button";

export default function Nonprofit() {
  const features = [
    {
      icon: "🔧",
      title: "Our Mission",
      description: "To provide hands-on STEM project opportunities to all children, regardless of background or resources. Everything they make, they keep."
    },
    {
      icon: "🌱",
      title: "Our Approach",
      description: "Interest-driven learning where children personalize what they make within scaffolded project plans. Human and AI support help overcome challenges."
    },
    {
      icon: "🧑‍🤝‍🧑",
      title: "Our Community",
      description: "We partner with urban neighborhood centers, local libraries, Native American tribal centers, and rural community organizations."
    }
  ];

  return (
    <section id="nonprofit" className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Kids Should Make Things</h2>
        <p className="text-gray-600 mb-8">
          Our 501(c)(3) nonprofit provides project plans, materials, and support to kids to create in their homes, libraries, and community spaces. Everything they make, they keep.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl text-primary mb-3">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <a href="https://www.kids-should-make-things.org/" target="_blank" rel="noopener noreferrer">
            <Button>
              Learn more at kids-should-make-things.org
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
