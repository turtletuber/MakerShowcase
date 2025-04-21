import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <span className="text-gray-500 text-sm">{exp.period}</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-1">{exp.title}</h3>
                <p className="text-primary">{exp.company}</p>
              </div>
              <div className="md:w-3/4 md:pl-8 border-l-0 md:border-l-2 border-gray-200">
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex">
                      <span className="text-green-500 mr-2">✔</span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
